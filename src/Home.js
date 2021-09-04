import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Product from './Product';
import { db } from './firebase';

function Home({ searchTerm }) {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    db.collection('products').onSnapshot((snapshot) => {
      let tempProducts = []

      tempProducts = snapshot.docs.map((doc) => (
        {
          id: doc.id,
          product: doc.data()
        }
      ));
      setProducts(tempProducts);
    })
  }

  useEffect(() => {
    console.log("call products")
    getProducts()
  }, [])

  console.log(products);

  return (
    <Container>
      <Banner>
        <BannerTitle>Welcome To AmaShop</BannerTitle>
        <BannerSubTitle>Fine your items and get shopping</BannerSubTitle>
      </Banner>
      <Content>
        {
          products.filter((data) => {
            if (searchTerm == "") {
              return data
            } else if (data.product.name.toLowerCase().includes(searchTerm.toLowerCase())) {
              return data
            }
          }).map((data) => (
            <Product 
              title={ data.product.name }
              price={ data.product.price }
              rating={ data.product.rating }
              image={ data.product.image }
              id={ data.id }
            />
          ))
        }
          

      </Content>
    </Container>
  )
}

export default Home

const Container = styled.div`
  max-width: 1600px;
  margin: 0 auto;
`

const Banner = styled.div`
  background-image: url("banner2.jpg");
  min-height: 800px;
  background-position: top;
  background-size: cover;
  z-index: 1;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))
`

const BannerTitle = styled.div`
  padding: 50px 0 0 8%;
  font-size: 4em;

  @media screen and (max-width: 800px) {
    font-size: 3em;
  }

  @media screen and (max-width: 520px) {
    padding-left: 0;
    font-size: 2.5em;
    text-align: center;
  }
`

const BannerSubTitle = styled.div`
  padding: 10px 0 0 8%; 
  font-size: 3em;

  @media screen and (max-width: 800px) {
    font-size: 2em;
    
  }

  @media screen and (max-width: 520px) {
    padding-left: 0;
    font-size: 2em;
    text-align: center;
  }
`

const Content = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  margin-top: -550px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-grow: 1;
  flex-shrink: 1;
  justify-content: flex-start;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`