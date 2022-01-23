const initialState = {
    items: [],
    isLoaded: false,
};

const goods = (state = initialState, action) => {

    switch (action.type) {
        case 'SET_GOODS':
            return {
                ...state,
                items: action.payload,
                isLoaded: true,
            };
        case 'SET_LOADED':
            return {
                ...state,
                isLoaded: action.payload,
            };

        default:
            return state;
    }


    // if (action.type === 'SET_GOODS') {

    // }

    // if (action.type === 'SET_LOADED') {

    // }

    // return state;

};

export default goods;