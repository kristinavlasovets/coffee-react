import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { Header } from './components';
import { Home, Cart } from './pages';
import { Routes, Route } from 'react-router-dom';

import { setGoods, setGoods as setGoodsAction } from './redux/actions/goods';

// function App() {

// React.useEffect(() => {
//     axios.get('http://localhost:3000/db.json').then(({ data }) => {
//         setGoods(data.goods)
//     });

// }, []);

//     return;

//     // (
//     //     <div className="wrapper">
//     //         <Header />
//     //         <div className="content">
//     //             <Routes>
//     //                 <Route path="/" element={<Home items={goods} />}></Route>
//     //                 <Route path="/cart" element={<Cart />}></Route>
//     //             </Routes>
//     //         </div>
//     //     </div>
//     // );


// }

class App extends React.Component {

    componentDidMount() {
        axios.get('http://localhost:3000/db.json').then(({ data }) => {
            this.props.setGoods(data.goods);
        });
    }
    render() {
        return (
            <div className="wrapper">
                <Header />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home items={this.props.items} />}></Route>
                        <Route path="/cart" element={<Cart />}></Route>
                    </Routes>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        items: state.goods.items,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setGoods: (items) => dispatch(setGoodsAction(items))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);