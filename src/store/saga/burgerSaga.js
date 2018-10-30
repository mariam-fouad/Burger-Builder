import * as burgerActions from '../actions/burgerActions';
import {put} from 'redux-saga/effects';
import axios from '../../order-axios';

export function* initialIngredient (action){
    try {
        const response = yield axios.get('/ingredients.json');
        yield put (burgerActions.setIngredient(response.data));
    } catch (error) {
        yield put (burgerActions.catchError());
    }
}