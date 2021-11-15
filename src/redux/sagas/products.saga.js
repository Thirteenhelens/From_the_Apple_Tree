import { put, takeLatest } from 'redux-saga/effects';

function* fetchProducts() {
    try {
        const response = yield axios.get('/api/products');

        yield put({ type: 'SET_PRODUCTS', payload: response.data });

    } catch (err) {
        console.log('Error on fetchProducts: ', err);
        yield put({ type: 'FETCH_ERROR' })
    }
}

function* productsSaga() {
    yield takeLatest('GET_PRODUCTS', fetchProducts);
}