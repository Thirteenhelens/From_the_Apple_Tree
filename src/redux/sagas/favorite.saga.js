import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addFavorite(action) {
    try {
        yield axios.post(`/api/favorite`, action.payload)
        yield put({ type: "GET_FAVORITES" });
    } catch (err) {
        console.log('Error Adding to Favorites:', err);
        yield put({ type: 'FETCH_ERROR' })
    }
}

function* fetchFavorites() {
    try {
        const response = yield axios.get(`/api/favorite`);
        yield put({ type: 'SET_FAVORITES', payload: response.data });
    } catch (err) {
        console.log('Error on fetchProducts: ', err);
        yield put({ type: 'FETCH_ERROR' })
    }
}

function* removeFavorite(action) {
    const { id } = action.payload
    console.log(id)
    try {
        yield axios.delete(`/api/favorite/${id}`);
        yield put({ type: "GET_FAVORITES" });
    } catch (err) {
        console.log('Error removing from Favorites:', err);
        yield put({ type: 'FETCH_ERROR' })
    }
}

function* favoriteSaga() {
    yield takeLatest('ADD_FAVORITE', addFavorite);
    yield takeLatest("GET_FAVORITES", fetchFavorites);
    yield takeLatest('REMOVE_FAVORITE', removeFavorite);
}

export default favoriteSaga;