const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
};

const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0);

const cart = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_GOODS_CART':
            {
                const currentGoodsItems = !state.items[action.payload.id] ? [action.payload] :
                    [...state.items[action.payload.id].items, action.payload];

                const newItems = {
                    ...state.items,
                    [action.payload.id]: {
                        items: currentGoodsItems,
                        totalPrice: getTotalPrice(currentGoodsItems),
                    },
                };

                const items = Object.values(newItems).map((obj) => obj.items);
                const allGoods = [].concat.apply([], items);
                const totalPrice = getTotalPrice(allGoods);

                return {
                    ...state,
                    items: newItems,
                    totalCount: allGoods.length,
                    totalPrice,
                };
            }

        default:
            return state;
    }
};

export default cart;