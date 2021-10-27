import SHOP_DATA from './shop.data';

import ShopActionTypes from './shop.types';

const INITIAL_STATE = {
    collections: SHOP_DATA,
    shopItems: []
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ShopActionTypes.GET_SHOP_ITEMS:
            return {
                ...state,
                shopItems: state.collections.filter(collection => collection.routeName === action.payload).items
            }
        default:
            return state;
    }
}

export default shopReducer;