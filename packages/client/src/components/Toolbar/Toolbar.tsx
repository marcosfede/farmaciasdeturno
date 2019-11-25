import React from "react"
import HamburgerIcon from "../../icons/Hamburger"

interface IProps {
  title: String
}

const Toolbar = ({ title = "Farmacias de Turno" }: IProps) => (
  <div>
    <span className="m-5">
      <HamburgerIcon size={24} />
    </span>
    <span>{title}</span>
  </div>
)

export default Toolbar
