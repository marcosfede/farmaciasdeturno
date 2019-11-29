import React from 'react'
import HamburgerIcon from '../../icons/Hamburger'

interface IProps {
  title: string
}

const Toolbar = ({ title = 'Farmacias de Turno' }: IProps) => (
  <div>
    <span className="m-0">
      <HamburgerIcon size={24} />
    </span>
    <span>{title}</span>
  </div>
)

export default Toolbar
