import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Checkout from './pages/checkout';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Login/>}></Route>
                <Route path="/subscription/:bussinessId/:mail/:urlBack" element={<Checkout/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;