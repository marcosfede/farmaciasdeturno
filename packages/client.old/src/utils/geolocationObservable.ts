type OnPermissionChangedCallback = (status: string) => void

export function checkGeolocationPermission(onPermissionChanged: OnPermissionChangedCallback) {
  // Check for Geolocation API permissions
  if ('permissions' in navigator) {
    // tslint:disable-next-line
    ;(navigator as any).permissions.query({ name: 'geolocation' }).then(function(permissionStatus: any) {
      onPermissionChanged(permissionStatus.state)
      permissionStatus.onchange = function() {
        onPermissionChanged(this.state)
      }
    })
  }
}

type Observer = (position: Coordinates) => void

class GeolocationObservable {
  public static getInstance() {
    if (!GeolocationObservable.instance) {
      GeolocationObservable.instance = new GeolocationObservable()
    }
    return GeolocationObservable.instance
  }
  private static instance: GeolocationObservable

  private started: boolean = false
  private watchId: number = 0
  private listenerId: number = 0
  private lastCoordinate: Coordinates | null
  // array of observers of every update
  private takeManyObservers: { [id: number]: Observer }
  // array of observers for next value
  private takeFirstObservers: Array<{
    resolve: any
    reject: any
  }>

  private constructor() {
    this.takeManyObservers = []
    this.takeFirstObservers = []
    this.lastCoordinate = null
  }
  public start() {
    if (!this.started) {
      this.started = true
      this.watchId = navigator.geolocation.watchPosition(
        (position) => this.update(position.coords),
        (err) => {
          this.started = false
          this.reject(err)
        },
        { enableHighAccuracy: true, maximumAge: 2000 },
      )
    }
  }
  public stop() {
    navigator.geolocation.clearWatch(this.watchId)
    this.started = false
  }
  public update(position: Coordinates) {
    // save for cache
    this.lastCoordinate = position
    // notify observers
    for (const observer of Object.values(this.takeManyObservers)) {
      observer(position)
    }
    // resolve one time promises
    for (const observer of this.takeFirstObservers) {
      observer.resolve(position)
    }
    // reset one time observers
    this.takeFirstObservers = []
  }
  public addListener(observer: Observer) {
    const id = this.listenerId
    this.takeManyObservers[id] = observer
    this.listenerId++
    return id
  }
  public removeListener(id: number) {
    if (this.takeManyObservers.hasOwnProperty(id)) {
      delete this.takeManyObservers[id]
    }
  }
  public takeFirst(cache = true): Promise<Coordinates> {
    const lastCoordinate = this.lastCoordinate

    // start watching since a position is immediately requested
    if (!this.started) {
      this.start()
    }

    // resolve from cache if available
    if (cache && lastCoordinate !== null) {
      return new Promise((resolve) => resolve(lastCoordinate))
    }
    // return a promise that will resolve on next update
    return new Promise((resolve, reject) => {
      this.takeFirstObservers.push({
        reject,
        resolve,
      })
    })
  }
  private reject(error: PositionError) {
    for (const observer of this.takeFirstObservers) {
      observer.reject(error)
    }
  }
}
export const geolocationObservable = GeolocationObservable.getInstance()
