import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* updateProduct(action) {
    try {
        yield axios.put(`/api/products`, action.payload)
        yield put({ type: "GET_PRODUCTS" });
        yield put({ type: "EMPTY_EDIT" });
    } catch (err) {
        console.log('Error Adding to Favorites:', err);
        yield put({ type: 'FETCH_ERROR' })
    }
}

function* updateProductSaga() {
    yield takeLatest('UPDATE_PRODUCT', updateProduct);
}

export default updateProductSaga;