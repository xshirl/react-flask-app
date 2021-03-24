import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
const [placeholder, setPlaceholder] = useState('Hi');

useEffect(() => {
  fetch('/hello').then(res => res.json())
  .then(data => {
    console.log('data',data)
    console.log(data.result)
    setPlaceholder(data.result)
  })
  .catch(error => {
    console.log(error)
  })
}, []);

  return (
    <div className="App">
        <p>{placeholder}</p>
    </div>
  );
}

export default App;
