import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  productListReducer,
  productDetailsListReducer,
} from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsListReducer,
  cart: cartReducer,
});
//从localStorage 中获取cartItem
const cartItemFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];
const initialState = {
  cart: { cartItems: cartItemFromStorage },
};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
