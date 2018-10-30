import * as orderActions from '../actions/orderActions';
import {put} from 'redux-saga/effects';
import axios from '../../order-axios';

export function* orderingBurger (action){
    
    yield put (orderActions.orderingBurrgerLoading());
    try {
        const response = yield axios.post('/orders.json?auth='+action.token,action.orderInfo);
        yield put (orderActions.orderingBurgerSuccees(response.data.name,action.orderInfo));
    } catch (error) {
        yield put (orderActions.orderingBurgerFailed(error));
    }
    
}