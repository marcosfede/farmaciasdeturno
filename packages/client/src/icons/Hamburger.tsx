import React from 'react'

interface IProps {
  size: number
}

const Hamburger: React.FC<IProps> = ({ size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24">
    <path
      fill="#454f63"
      d="M8.75,13.5a.75.75,0,0,1,0-1.5h10.5a.75.75,0,0,1,0,1.5Zm-8-6A.75.75,0,0,1,.75,6h18.5a.75.75,0,0,1,0,1.5Zm0-6A.75.75,0,0,1,.75,0h10.5a.75.75,0,0,1,0,1.5Z"
      transform="translate(2 5)"
    />
  </svg>
)

export default Hamburger
