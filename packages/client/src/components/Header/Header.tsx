import React from 'react'
import { Button } from 'antd'
import './Header.css'

export default () => {
  return (
    <div className="header">
      <Button shape="circle" icon="menu" className="menu" size="small" />
      <div className="title">Farmacias de Turno</div>
    </div>
  )
}
