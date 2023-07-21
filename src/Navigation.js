import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Navbar from './Components/Navbar/Navbar';
import Cart from './Components/Cart/Cart';
function Navigation() {
    return (
        <React.Fragment>
            <Router basename="/">
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/cart" element={<Cart />} />
                </Routes>
            </Router>
        </React.Fragment>

    );
}

export default Navigation;