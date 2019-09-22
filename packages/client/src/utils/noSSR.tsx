import React, { ReactNode } from 'react'

interface IState {
  render: boolean
}

interface IProps {
  fallback?: ReactNode
}

export default class NoSSR extends React.Component<IProps, IState> {
  static defaultProps = {
    fallback: null,
  }

  constructor(props) {
    super(props)
    this.state = {
      render: false,
    }
  }

  componentDidMount() {
    if (typeof window !== undefined) {
      this.setState({ render: true })
    }
  }

  render() {
    if (!this.state.render) {
      return this.props.fallback
    }
    return this.props.children
  }
}
