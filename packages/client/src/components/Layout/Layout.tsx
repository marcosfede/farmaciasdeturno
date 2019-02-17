import React from 'react'
import * as PropTypes from 'prop-types'

import './Layout.css'
import 'normalize.css'

interface IProps {
  children: React.ReactNode
}

const Layout = ({ children }: IProps) => <div className="layout">{children}</div>

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
