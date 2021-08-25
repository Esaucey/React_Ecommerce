import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from "react-router-dom";
import { db } from './firebase';

function Header({ cartItems }) {

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
      <HeaderLogo>
        <Link to="/">
          <img src={ "http://lostcoastoutpost.com/media/uploads/event/32885/TheDankLogo.jpg" } alt="logo"/>
        </Link>
      </HeaderLogo>
      <HeaderOptionAddress>
        <LocationOnIcon />
        <HeaderOption>
          <OptionLineOne>Hello</OptionLineOne>
          <OptionLineTwo>Select Your Address</OptionLineTwo>
        </HeaderOption>
      </HeaderOptionAddress>

      <HeaderSearch>
        <HeaderSearchInput type='text' />
        <HeaderSearchIconContainer>
          <SearchIcon />
        </HeaderSearchIconContainer>
      </HeaderSearch>

      <HeaaderNavItems>
        <HeaderOption>
          <OptionLineOne>Hello, Eric</OptionLineOne>
          <OptionLineTwo>Account & List</OptionLineTwo>
        </HeaderOption>

        <HeaderOption>
        <OptionLineOne>Returns</OptionLineOne>
          <OptionLineTwo>& Orders</OptionLineTwo>
        </HeaderOption>

        
          <HeaderOptionCart>
            <Link to="/cart">
              <ShoppingBasketIcon />
              <CartCount>{getCount()}</CartCount>
            </Link>
          </HeaderOptionCart>
        
        
      </HeaaderNavItems>

    </Container>
  )
}

export default Header

const Container = styled.div`
  height: 60px;
  background-color: #4A5579 ;
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
  flex-grow: 1;
  border: 0;
  :focus {
    border: none;
  }
`

const HeaderSearchIconContainer = styled.div`
  background-color: #febd69;
  width: 45px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`

const HeaaderNavItems = styled.div`
  display: flex;
`

const HeaderOption = styled.div`
  padding: 10px 9px 10px 10px; 
`
const HeaderOptionCart = styled.div`
  display: flex;
  a {
      display: flex;
      align-items: center;
      padding-right: 9px;
      color: white;
      text-decoration: none;
    }
`

const CartCount = styled.div`
  padding-left: 4px;
  font-weight: 700;
  color: #f08804;
`