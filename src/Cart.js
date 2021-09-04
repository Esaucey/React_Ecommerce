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
      <Banner></Banner>
      <Content>
        <CartItems cartItems={cartItems}/>
        <CartTotal getCount={getCount} getTotalPrice={getTotalPrice}/>
      </Content>
    </Container>
  )
}

export default Cart

const Container = styled.div`
  margin: auto;
  max-width: 1600px;
  display: block;
  padding: 0 18px 0 18px;
  align-items: flex-start;



  @media screen and (max-width: 600px) {
    display: block;
  }
`
const Banner = styled.div`
  margin: 0 -20px 0 -20px;
  background-image: url("banner2.jpg");
  min-height: 800px;
  -webkit-mask-image: linear-gradient(to top, transparent 5%, black 100%);
  background-position: top;
  background-size: cover;
  z-index: 1;
`
const Content = styled.div`
  display: flex;
  margin-top: -780px;
`