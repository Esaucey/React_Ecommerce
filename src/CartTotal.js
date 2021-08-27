import React from 'react'
import styled from 'styled-components'

function CartTotal({ getTotalPrice }) {

  return (
    <Container>
      <Subtotal>Subtotal (2 items): ${ getTotalPrice() } </Subtotal>
      <CheckoutBtn>Proceed to Checkout</CheckoutBtn>
    </Container>
  )
}

export default CartTotal

const Container = styled.div`
  flex: 0.3;
  padding: 20px;
  background-color: white;
`

const Subtotal = styled.h2`
  margin-bottom: 16px;
`

const CheckoutBtn = styled.button`
  background-color: #f0c14b;
  width: 100%;
  padding: 4px 8px;
  border: 2px solid #a88734;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  :hover {
    background-color: #ddb347;
  }
`