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
  flex-shrink: 1;
`

const Banner = styled.div`
  background-image: url('https://i.imgur.com/SYHeuYM.jpg');
  min-height: 600px;
  background-position: center;
  background-size: cover;
  z-index: 1;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))
`

const Content = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  margin-top: -350px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`