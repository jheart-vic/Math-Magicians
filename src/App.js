import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Nav from './components/Navbar/Nav';
import Home from './components/Navbar/Home';
import Quote from './components/Navbar/Quote';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>

      </div>
    </Router>

  );
}

export default App;
