import React, { useState } from 'react'
import NavigationBar from './NavigationBar';
import HomePage from './Home';
import { Container, Divider, Button } from 'semantic-ui-react'
import CheckoutPrompt from './CheckoutForm';
import FormPage from './FormPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <NavigationBar/>
      <Container>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/PostJob' element={<FormPage/>}/>
          <Route path='/Checkout' element={<CheckoutPrompt/>}/>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
