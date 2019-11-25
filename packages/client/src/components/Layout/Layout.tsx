import React from "react"
import * as PropTypes from "prop-types"
import "../../css/style.css"

interface IProps {
  children: React.ReactNode
}

const Layout = ({ children }: IProps) => <>{children}</>

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
