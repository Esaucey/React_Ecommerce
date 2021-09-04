import styled from 'styled-components'
import React from 'react'
import CartItem from './CartItem'
import { db } from './firebase'
import { useState, useEffect } from 'react'

function CartItems({ cartItems }) {

  const [cartItem, setCartItem] = useState([]);

  const getCartItem = () => {
    db.collection('cartItems').onSnapshot((snapshot) => {
      let tempCartItem = []
      if (snapshot.empty == true) {
            console.log(snapshot.empty);
            tempCartItem = <EmptyCart>Your Cart Is Empty</EmptyCart>
          } 
      setCartItem(tempCartItem);
    })
  }

  useEffect(() => {
    console.log("call carts")
    getCartItem()
  },[])

  return (
    <Container>
      <Title>Shopping Cart</Title>
      <hr />
      <ItemsContainer>
        {cartItem}
        {cartItems.map((item) => (
              <CartItem 
                id={item.id}
                item={item.product}
              />
            ))}
      </ItemsContainer>
    </Container>
  )
}

export default CartItems

const Container = styled.div`
  flex: 0.8;
  padding: 20px;
  margin-right: 18px;
  background-color: white;

  @media screen and (max-width: 600px) {
    margin-right: 0;
  }
`

const EmptyCart = styled.h2`
  margin-top: 50px;
  padding-bottom: 100px;
  border-bottom: 1px solid #DDD;
`

const Title = styled.div`
  margin-bottom: 8px;
  font-size: 2em;
  font-weight: 700;
`

const ItemsContainer = styled.div`
  
`