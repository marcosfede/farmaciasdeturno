import React from 'react'

import './MapListToggler.css'

interface IProps {
  onClick: () => void
}

export default ({ onClick }: IProps) => {
  return (
    <div className="toggler" onClick={onClick}>
      <span className="toggle-text">SHOW LIST</span>
    </div>
  )
}
