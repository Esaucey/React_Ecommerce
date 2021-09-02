import './App.css';
import Header from './Header';
import Cart from './Cart';
import Home from './Home';
import Login from './Login';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from 'styled-components';
import { useState } from 'react';
import { db, auth } from './firebase';
import { useEffect } from 'react';
// import { Container } from '@material-ui/core';

function App() {

  const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('user')));

  const [ cartItems, setCartItems ] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');

  const getSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  }

  const getCartItems = () => {
    db.collection('cartItems').onSnapshot((snapshot) => {
      const tempItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data()
      }))
      setCartItems(tempItems);
    })
  }

  const signOut = () => {
    auth.signOut().then(() => {
      localStorage.removeItem('user');
      setUser(null);
      
    })
  }

  useEffect(() => {
    getCartItems();
  }, [])

  console.log(searchTerm);

  return (
    <Router>
      {
        !user ? (
          <Login setUser={setUser} />
        ) : (
          <Container>
        <Header signOut={signOut} user={user} cartItems={cartItems} searchTerm={getSearchTerm}/>
        <Switch>
          <Route path="/cart">
            <Cart cartItems={cartItems} />
          </Route>

          <Route path="/">
            <Home searchTerm={searchTerm} />
          </Route>
        </Switch>
      </Container>
        )
      }
      
    </Router>
  );
}

export default App;

const Container = styled.div`
  background-color: #EAEDED;
`