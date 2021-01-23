import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  productListReducer,
  productDetailsListReducer,
} from './reducers/productReducers';
import { cartReucer } from './reducers/cartReducers';
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsListReducer,
  cart: cartReucer,
});
const cartItemFromStorage = localStorage.getItem('cartItem')
  ? JSON.parse(localStorage.getItem('cartItem'))
  : [];
const initialState = {
  cart: { cartItem: cartItemFromStorage },
};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
