import * as orderActions from '../actions/orderActions';
import {put ,select} from 'redux-saga/effects';
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

export function* fetchingOrders (ation){
    const state = yield select();
    yield put (orderActions.fetchingOrdersLoading());
    const queryParm = '?auth='+state.authReducer.token +'&orderBy="userId"&equalTo="'+state.authReducer.userId+'"';
    try {
        const response = yield axios.get('/orders.json'+queryParm);
        const fetchedOrders=[];
            for (let key in response.data){
              fetchedOrders.push(
                {
                  ...response.data[key],
                  id:key,
                }
              );
            }
        yield put (orderActions.fetchingOrdersSuccess(fetchedOrders));
    } catch (error) {
        yield put (orderActions.fetchingOrdersFailed(error));
    }
}