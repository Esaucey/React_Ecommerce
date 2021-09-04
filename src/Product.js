import React from 'react';
import styled from 'styled-components';
import { db } from "./firebase";
function Product( { title, price, rating, image, id } ) {
  
  const addToCart = () => {
    const cartItem = db.collection("cartItems").doc(id);
    cartItem.get()
    .then((doc) => {
      console.log(doc);
      if(doc.exists) {
        cartItem.update({
          quantity: doc.data().quantity + 1
        })
      } else {
        db.collection("cartItems").doc(id).set({
          name: title,
          image: image,
          price: price,
          quantity: 1
        })
      }
    })
  }

  return (
    <Container>
      <Title>
        { title }
      </Title>

      <Price>
        ${ price }
      </Price>

      <Rating>
        { 
          Array(rating)
          .fill()
          .map(rating => <p>⭐</p>)
        }
      </Rating>

      <Image src={ image }/>
      <ActionSection>
        <AddToCartButton onClick={addToCart}>
          Add to Cart
        </AddToCartButton>
      </ActionSection>
    </Container>
  )
}

export default Product;

const Container = styled.div`
  background-color: white;
  width: 100%;
  z-index: 100;
  flex: 1;
  padding 20px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 600px) {
    width: auto;
  }
`

const Title = styled.span`

`

const Price = styled.span`
  font-weight: 500;
  matgin-top: 3px;
`

const Rating = styled.div`
  display: flex;
`

const Image = styled.img`
  margin-top: 30px;
  max-height: 200px;
  object-fit: contain;
`

const AddToCartButton = styled.button`
  width: 100px;
  height: 30px;
  background-color: #f0c14b;
  border: 2px solid #a88734;
  border-radius: 2px;
  cursor: pointer;
  :hover {
    background-color: #ddb347;
  }
  :active {
    background-color: #B27D23;
  }
`

const ActionSection = styled.div`
  margin-top: 12px;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`