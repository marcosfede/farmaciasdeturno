import React from 'react'

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

export default function noSSR(Component: typeof React.Component) {
  const wrapped: React.ComponentClass = class NoSSRWrapper extends React.Component {
    state = {
      server: true,
    }

    componentDidMount() {
      if (typeof window !== undefined) {
        this.setState({ server: false })
      }
    }

    render() {
      if (this.state.server) {
        return null
      }
      return <Component {...this.props} />
    }
  }
  wrapped.displayName = `NoSSR${getDisplayName(Component)}`
  return wrapped
}
