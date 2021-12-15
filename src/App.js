import React from 'react';
import axios from 'axios';

import { Header } from './components';
import { Home, Cart } from './pages';

import { Routes, Route } from 'react-router-dom';


function App() {

    const [goods, setGoods] = React.useState([])

    React.useEffect(() => {
        axios.get('http://localhost:3000/db.json').then(({ data }) => {
            setGoods(data.goods)
        });

    }, []);

    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home items={goods} />}></Route>
                    <Route path="/cart" element={<Cart />}></Route>
                </Routes>
            </div>
        </div>
    );


}

export default App;