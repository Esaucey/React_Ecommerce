import React from 'react'
import styled from 'styled-components'
import CartTotal from './CartTotal'
import CartItems from './CartItems'

function Cart({ cartItems }) {

  const getTotalPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += (item.product.price * item.product.quantity)
    })
    return total;
  }

  const getCount = () => {
    let count = 0;
    //loop through cart items
    cartItems.forEach((item) => {
      count += item.product.quantity;
      }) 
      return count;
  }

  return (
    <Container>
      <CartItems cartItems={cartItems}/>
      <CartTotal getCount={getCount} getTotalPrice={getTotalPrice}/>
    </Container>
  )
}

export default Cart

const Container = styled.div`
  display: flex;
  padding: 14px 18px 0 18px;
  align-items: flex-start;
  background-image: url("banner2.jpg");
  min-height: 600px;
  background-position: top;
  background-size: cover;
  z-index: 1;

  @media screen and (max-width: 600px) {
    display: block;
  }
`