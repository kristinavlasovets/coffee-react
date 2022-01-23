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
  const isLoaded = useSelector(({goods}) => goods.isLoaded);
  const {sortBy, category} = useSelector(({filters}) => filters);

  React.useEffect(() => {
    dispatch(fetchGoods(sortBy, category));
  }, [sortBy, category]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

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
