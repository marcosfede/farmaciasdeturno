import { BaseControlProps, BaseControl } from 'react-map-gl'

interface CustomMarkerProps extends BaseControlProps {
  latitude: number
  longitude: number
}
export class CustomMarker extends BaseControl<CustomMarkerProps, any> {
  _render() {
    const { longitude, latitude } = this.props

    const [x, y] = this._context.viewport!.project([longitude, latitude])

    return (
      <div
        ref={this._containerRef}
        style={{
          position: 'absolute',
          left: x,
          top: y,
        }}
      >
        {this.props.children}
      </div>
    )
  }
}
