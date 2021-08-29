import React from 'react';
import styled from 'styled-components';
import { auth, provider } from './firebase';

function Login({ setUser }) {

  const signIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      let user = result.user;
      let newUser = {
        name: user.displayName,
        email: user.email,
        photo: user.photoURL
      }
      localStorage.setItem('user', JSON.stringify(newUser));
      setUser(newUser);
    }).catch((error)=> {
      alert(error.message);
    })
  }

  return (
    <Container>
      <Content>
          <Logo src='https://www.vippng.com/png/detail/203-2033516_squid-icon-splatted-sploos-barnsquid-splatoon-squid-small.png' />
          <h1>Sign into Shop</h1>
          <LoginBtn
            onClick={signIn}
          >
            Sign in with Google
          </LoginBtn>
      </Content>
    </Container>
  )
}

export default Login

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f8f8f8;
  display: grid;
  place-items: center;
`

const Content = styled.div`
  padding: 100px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 1px 3px gray;
  text-align: center;
`

const Logo = styled.img`
  height: 100px;
  margin-bottom: 40px;
`

const LoginBtn = styled.button`
  margin-top: 50px;
  background-color: #f0c14b;
  border-radius: 4px;
  border: 2px solid #a88734;
  font-size: 16px;
  padding: 4px 8px 4px 8px;
  cursor: pointer;
  
`