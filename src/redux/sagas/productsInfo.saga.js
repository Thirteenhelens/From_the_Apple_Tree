import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchProductInfo() {
    try {
        const response = yield axios.get('/api/productsInfo');

        yield put({ type: 'SET_PRODUCT_INFO', payload: response.data });

    } catch (err) {
        console.log('Error on fetchProductsInfo: ', err);
        yield put({ type: 'FETCH_ERROR' })
    }
}

function* productsInfoSaga() {
    yield takeLatest('GET_PRODUCTS_INFO', fetchProductInfo);
}

export default productsInfoSaga;