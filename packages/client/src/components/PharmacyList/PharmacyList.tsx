import React from 'react'

interface IProps {
  pharmacies: Pharmacy[]
  className?: string
}

const Placeholder = () => <div className="placeholder">No items yet...</div>

const PharmacyList = ({ pharmacies, className }: IProps) => {
  if (pharmacies.length === 0) return <Placeholder />
  return (
    <div className={className}>
      {pharmacies.map((p) => (
        <div key={p.id} className="list__item">
          {p.name}
        </div>
      ))}
    </div>
  )
}

export default PharmacyList
