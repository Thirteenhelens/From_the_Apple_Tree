import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addFavorite() {
    try {
        const response = yield axios.post(`/api/`)
    } catch (err) {
        console.log('Error Adding to Favorites:', err);
        yield put({ type: 'FETCH_ERROR' })
    }
}

function* removeFavorite() {
    try {
        const response = yield axios.delete(`/api/`)
    } catch (err) {
        console.log('Error removing from Favorites:', err);
        yield put({ type: 'FETCH_ERROR' })
    }
}

function* favoriteSaga() {
    yield takeLatest('ADD_FAVORITE', addFavorite);
    yield takeLatest('REMOVE_FAVORITE', removeFavorite);
}

export default favoriteSaga;