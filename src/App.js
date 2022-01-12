import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import { Header } from './components';
import { Home, Cart } from './pages';
import { Routes, Route } from 'react-router-dom';

import { setGoods, setGoods as setGoodsAction } from './redux/actions/goods';

function App() {

    const dispatch = useDispatch();


    React.useEffect(() => {
        axios.get('http://localhost:3000/db.json').then(({ data }) => {
            dispatch(setGoods(data.goods))
        });
    }, []);

    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home />} ></Route>
                    <Route path="/cart" element={<Cart />}></Route>
                </Routes>
            </div>
        </div>
    )
};

export default App;
