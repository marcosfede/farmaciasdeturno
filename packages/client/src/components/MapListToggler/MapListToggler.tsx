import React from 'react'
import { Icon } from 'antd'

import './MapListToggler.css'

interface IProps {
  onClick: () => void
}

export default ({ onClick }: IProps) => {
  return (
    <div className="toggler" onClick={onClick}>
      <Icon type="menu" className="toggle-button" />
      <span className="toggle-text">SHOW LIST</span>
    </div>
  )
}
