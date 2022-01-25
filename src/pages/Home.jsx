import React from 'react';
import {useDispatch} from 'react-redux';

import {useSelector} from 'react-redux';
import {
  Categories,
  SortPopup,
  CoffeeBlock,
  CoffeeLoadingBlock,
} from '../components';

import {setCategory, setSortBy} from '../redux/actions/filters';
import {fetchGoods} from '../redux/actions/goods';
import {addGoodsToCart} from '../redux/actions/cart';

const categoryNames = [
  'Frappuccino',
  'Mocha',
  'Latte',
  'Cold Brew',
  'Good tidings',
];
const sortItems = [
  {name: 'popularity', type: 'popular'},
  {name: 'price', type: 'price'},
  {name: 'A - Z', type: 'title'},
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({goods}) => goods.items);
  const cartItems = useSelector(({cart}) => cart.items);
  const isLoaded = useSelector(({goods}) => goods.isLoaded);
  const {sortBy, category} = useSelector(({filters}) => filters);

  console.log(cartItems);

  React.useEffect(() => {
    dispatch(fetchGoods(sortBy, category));
  }, [sortBy, category]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const handleAddGoodsToCart = (obj) => {
    dispatch({
      type: 'ADD_GOODS_CART',
      payload: obj,
    });
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoryNames}
        />

        <SortPopup
          activeSortType={sortBy}
          items={sortItems}
          onClickSortType={onSelectSortType}
        />
      </div>
      <h2 className="content__title">Menu</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => (
              <CoffeeBlock
                onClickAddGoods={handleAddGoodsToCart}
                key={obj.id}
                addedCount={cartItems[obj.id] && cartItems[obj.id].length}
                {...obj}
              />
            ))
          : Array(8)
              .fill(0)
              .map((_, index) => <CoffeeLoadingBlock key={index} />)}
      </div>
    </div>
  );
}

export default Home;
