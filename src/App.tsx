import React from 'react';
import './App.css';
import Stars from './components/Stars';

function App() {
  return (
    <>
      <Stars count={3} />
      <Stars count={4} />
      <Stars count={1} />
    </>

  );
}

export default App;
