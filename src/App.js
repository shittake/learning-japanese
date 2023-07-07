import './App.css';
import React from 'react';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Hiragana } from './Pages/Hiragana';
import { Katakana } from './Pages/Katakana';
import { HiraganaTest } from './Pages/HiraganaTest';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/hiragana' element={<Hiragana />} />
          <Route exact path='/katakana' element={<Katakana />} />
          <Route exact path='/hiragana-test' element={<HiraganaTest />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
