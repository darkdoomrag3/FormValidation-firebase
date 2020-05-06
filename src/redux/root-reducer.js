import { combineReducers } from 'redux';
import cartReducer from './cart/cartreducer'


export default combineReducers({

   
    cart : cartReducer

})
