import React from 'react';


import { Header } from './components';
import { Home, Cart } from './pages';

import { Routes, Route } from 'react-router-dom';


function App() {

    const [goods, setGoods] = React.useState([])

    React.useEffect(() => {
        fetch('http://localhost:3000/db.json')
            .then((resp) => resp.json())
            .then(json => {
                setGoods(json.goods);
            });
    }, []);

    console.log(goods)


    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Routes>
                    <Route path="/" component={Home} exact />
                </Routes>
            </div>
        </div>
    );


}

export default App;