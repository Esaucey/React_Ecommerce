import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ListIcon from '@material-ui/icons/List';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { db } from './firebase';


function Header({ cartItems, user, signOut, searchTerm }) {

  const getCount = () => {
    let count = 0;
    //loop through cart items
    cartItems.forEach((item) => {
      count += item.product.quantity;
      }) 
      return count;
  }
  return (
    <div>
      <Container>
        <HeaderLogo>
          <Link to="/">
            <img src="logo.png" alt="logo"/>
          </Link>
        </HeaderLogo>
        <HeaderOptionAddress>
          <HeaderOption>
          </HeaderOption>
        </HeaderOptionAddress>

        <HeaderSearch>
          <HeaderSearchInput 
            type='text' 
            placeholder="Search..." 
            onChange={searchTerm}
          />
  
        </HeaderSearch>

        <HeaaderNavItems>
          <HeaderOption onClick={signOut}>
            <OptionLineOne>Hello, {user.name}</OptionLineOne>
            <OptionLineTwo>Click to Logout</OptionLineTwo>
          </HeaderOption>

            <HeaderOptionCart>
              <Link to="/cart">
                <ShoppingBasketIcon />
                <CartCount>{getCount()}</CartCount>
              </Link>
            </HeaderOptionCart>
        </HeaaderNavItems>
      {/* <ListIconControl>
        <ListIcon />
      </ListIconControl> */}
      </Container>
      <Menu>
        <DropDownHeaderOption onClick={signOut}>
          <OptionLineOne>Hello, {user.name}</OptionLineOne>
          <OptionLineTwo>Click to Logout</OptionLineTwo>
        </DropDownHeaderOption>
        
          <DropDownHeaderOptionCart>
            <Link to="/cart">
              <ToCart>
                <ShoppingBasketIcon />
                <CartCount>{getCount()}</CartCount>
              </ToCart>
            </Link>
          </DropDownHeaderOptionCart>
         
      </Menu>
    </div>
  )
}

export default Header

const Container = styled.div`
  height: 60px;
  padding:0 20px 0 20px;
  background-color: #B0BB66 ;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
`

const HeaderLogo = styled.div`
  img {
    width: 100px;
    margin-left: 12px;
  }
`

const HeaderOptionAddress = styled.div`
  padding-left: 9px;
  display: flex;
  align-items: center;
`

const OptionLineOne = styled.div`

`

const OptionLineTwo = styled.div`
  font-weight: 700;
`

const HeaderSearch = styled.div`
  display: flex;
  flex-grow: 1;
  height: 40px;
  border-radius: 4px;
  overflow: hidden;
  margin-left: 4px;
  background0color: white;
  :focus-within {
    box-shadow: 0 0 0 3px #F90;
  }
`

const HeaderSearchInput = styled.input`
  font-size: 1.2em;
  flex-grow: 1;
  border: 0;
  :focus {
    border: none;
  }
`
const HeaaderNavItems = styled.div`
  display: flex;
`

const HeaderOption = styled.div`
  padding: 10px 9px 10px 10px; 
  cursor: pointer;

  text-align: center;
  @media screen and (max-width: 600px) {
    display: none;
  }
`

const DropDownHeaderOption = styled.div`
  display: none;
  flex-grow: 1;
  @media screen and (max-width: 600px) {
    display: block;
    text-align: center;
  }
`



const HeaderOptionCart = styled.div`
  display: flex;
  a {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    color: white;
    text-decoration: none;
    flex-grow: 1;
    justify-content: center;
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
`

const DropDownHeaderOptionCart = styled.div`
  display: none;
  flex-grow: 1;
  @media screen and (max-width: 600px) {
    display: flex;
    background-color: green;
    justify-content: center;
    a {
      display: flex;
      align-items: center;
      margin: 0;
      padding: 0;
      color: white;
      text-decoration: none;
      flex-grow: 1;
      justify-content: center;
    }
}
`
const ToCart = styled.div`
  display: flex;
  justify-content: space-around;
`

const CartCount = styled.div`
  padding-left: 4px;
  font-weight: 700;
  color: #f08804;
`

const Menu = styled.div`
    display: none;
    z-index: 1;
    background-color: grey;
    @media screen and (max-width: 600px) {
      display: flex;
      justify-content: center;
    }
`
const ListIconControl = styled.div`
  display: none;
  @media screen and (max-width: 600px) {
    margin-left: 20px;
    display: block;
  }
`