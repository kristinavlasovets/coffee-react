import axios from 'axios';

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
});

export const fetchGoods = (sortBy, category) => (dispatch) => {

    console.log(sortBy, category)
    dispatch(setLoaded(false));
    axios.get(`http://localhost:3001/goods?${category !== null ? `category=${category}` : ''}&_sort=${sortBy}&_order=asc`).then(({ data }) => {
        dispatch(setGoods(data));
    });
}


export const setGoods = (items) => ({
    type: 'SET_GOODS',
    payload: items,
});

