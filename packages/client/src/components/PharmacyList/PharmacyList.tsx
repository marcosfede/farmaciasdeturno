import React from 'react'
import styled from 'styled-components'
import { PharmacyListCard } from '..'

const List = styled.div`
  margin-top: 50vh;
  display: block;
  width: 100vw;
  position: relative;
  background: #f5f5f5;
`

interface IProps {
  pharmacies: Pharmacy[]
  className?: string
}

const Placeholder = () => <div className="placeholder">No items yet...</div>

const PharmacyList = ({ pharmacies, className }: IProps) => {
  if (pharmacies.length === 0) return <Placeholder />
  return (
    <List className={className}>
      {pharmacies.map((p) => (
        <PharmacyListCard key={p.id} pharmacy={p} />
      ))}
    </List>
  )
}

export default PharmacyList
