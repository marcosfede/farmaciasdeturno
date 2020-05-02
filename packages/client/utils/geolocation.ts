class Gelocation {
  isAvailable() {
    return navigator && 'geolocation' in navigator
  }

  getPermissionStatus(): Promise<PermissionState | undefined> {
    if ('permissions' in navigator) {
      return navigator.permissions.query({ name: 'geolocation' }).then((permission) => permission.state)
    }
    return Promise.resolve(undefined)
  }

  subscribe(callback: PositionCallback, errorCallback?: PositionErrorCallback, options?: PositionOptions): number {
    return navigator.geolocation.watchPosition(callback, errorCallback, options)
  }

  unsubscribe(watchId: number) {
    navigator.geolocation.clearWatch(watchId)
  }

  getCurrentPostion(options?: PositionOptions) {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, options)
    })
  }
}

export const geolocation = new Gelocation()
