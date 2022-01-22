import React from 'react';
import {useDispatch} from 'react-redux';

import {useSelector} from 'react-redux';
import {
  Categories,
  SortPopup,
  CoffeeBlock,
  CoffeeLoadingBlock,
} from '../components';

import {setCategory} from '../redux/actions/filters';
import {fetchGoods} from '../redux/actions/goods';

const categoryNames = ['Drinks', 'Mocha', 'Latte', 'Cold Brew', 'Good tidings'];
const sortItems = [
  {name: 'popularity', type: 'popular'},
  {name: 'price', type: 'cost'},
  {name: 'A - Z', type: 'alphabet'},
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({goods}) => goods.items);
  const isLoaded = useSelector(({goods}) => goods.isLoaded);
  const {category, sortBy} = useSelector(({filters}) => filters);

  console.log(category, sortBy);

  React.useEffect(() => {
    dispatch(fetchGoods());
  }, [category]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickItem={onSelectCategory} items={categoryNames} />

        <SortPopup items={sortItems} />
      </div>
      <h2 className="content__title">Menu</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => (
              <CoffeeBlock key={obj.id} isLoading={true} {...obj} />
            ))
          : Array(8)
              .fill(0)
              .map((_, index) => <CoffeeLoadingBlock key={index} />)}
      </div>
    </div>
  );
}

export default Home;
