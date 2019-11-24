import React from 'react'
import styled from 'styled-components'
import { IonButton, IonIcon } from '@ionic/react'
import { call, navigate } from 'ionicons/icons'

const Item = styled.div`
  display: flex;
  flex-direction: row;
  flex: 0 1 auto;
  flex: 0 1 auto;
  padding: 8px;
  border-top: #e8e8e8 solid 1px;
  margin: 6px 0;
  border-bottom: #e8e8e8 solid 1px;
  background: #fff;
`
const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
`
const Actions = styled.div`
  display: flex;
  flex: 0 1;
  align-items: center;
`

const Title = styled.div`
  font-size: 1.1rem;
  line-height: 1.8rem;
  font-weight: 400;
  color: #262626;
`
const Address = styled.div`
  font-size: 0.9rem;
  line-height: 1.3rem;
  font-weight: 400;
  color: #8c8c8c;
`
const Distance = styled.span`
  color: #237804;
`
const Phone = styled.div`
  font-size: 0.9rem;
  line-height: 1.3rem;
  font-weight: 400;
  color: #8c8c8c;
`

interface IProps {
  pharmacy: Pharmacy
}

const PharmacyListCard = ({ pharmacy }: IProps) => {
  return (
    <Item>
      <Body>
        <Title>Pharmacy Name</Title>
        <Address>
          8 623 <Distance>(5km)</Distance>
        </Address>
        <Phone>+54 221 5979483</Phone>
      </Body>
      <Actions>
        <IonButton shape="round" size="small" color="medium">
          <IonIcon icon={call} />
        </IonButton>
        <IonButton shape="round" size="small" color="medium">
          <IonIcon icon={navigate} />
        </IonButton>
      </Actions>
    </Item>
  )
}

export default PharmacyListCard
