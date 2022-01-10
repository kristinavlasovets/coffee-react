import React from 'react';

import {Categories, SortPopup, CoffeeBlock} from '../components';

function Home({items}) {
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={(name) => console.log(name)}
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
