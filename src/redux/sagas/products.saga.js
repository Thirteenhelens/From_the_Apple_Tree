import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchProducts() {
    try {
        const response = yield axios.get(`/api/products`);
        yield put({ type: 'SET_PRODUCTS', payload: response.data });
        yield put({ type: "GET_PRODUCTS_INFO" });
    } catch (err) {
        console.log('Error on fetchProducts: ', err);
        yield put({ type: 'FETCH_ERROR' })
    }
}

function* deleteProduct(action) {
    try {
        yield axios.delete(`/api/products/${action.payload}`);
        yield put({ type: "GET_PRODUCTS" });
        yield put({ type: "GET_PRODUCTS_INFO" });
    } catch (err) {
        console.log('Error on delete: ', err);
        yield put({ type: 'FETCH_ERROR' });
    }
}

function* addProduct(action) {
    try {
        yield axios.post('/api/products', action.payload);
        yield put({ type: "GET_PRODUCTS" });
        yield put({ type: "GET_PRODUCTS_INFO" });
    } catch (err) {
        console.log('Error on post:', err);
        yield put({ type: 'FETCH_ERROR' });
    }
}

// function* productToEdit() {
//     try {
//         yield axios.put('/api/products', action.payload)
//         yield put({ type: "GET_PRODUCTS" });
//     } catch (err) {
//         console.log('Error in edit:', err);
//         yield put({ type: 'FETCH_ERROR' });
//     }
// }

function* productsSaga() {
    yield takeLatest('ADD_PRODUCT', addProduct);
    yield takeLatest('GET_PRODUCTS', fetchProducts);
    yield takeLatest('DELETE_PRODUCT', deleteProduct);
    // yield takeLatest('PRODUCT_TO_EDIT', productToEdit);
}

export default productsSaga;