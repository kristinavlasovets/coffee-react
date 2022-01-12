import React from 'react';
import {useDispatch} from 'react-redux';

import {useSelector} from 'react-redux';
import {Categories, SortPopup, CoffeeBlock} from '../components';

import {setCategory} from '../redux/actions/filters';

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({goods}) => goods.items);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={onSelectCategory}
          items={['Drinks', 'Mocha', 'Latte', 'Cold Brew', 'Good tidings']}
        />

        <SortPopup
          items={[
            {name: 'popularity', type: 'popular'},
            {name: 'price', type: 'cost'},
            {name: 'A - Z', type: 'alphabet'},
          ]}
        />
      </div>
      <h2 className="content__title">Menu</h2>
      <div className="content__items">
        {items && items.map((obj) => <CoffeeBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
}

export default Home;
