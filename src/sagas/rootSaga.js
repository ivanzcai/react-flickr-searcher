import { call, put, takeLatest } from 'redux-saga/effects'
import Feeds from '../services/feeds'

export function* fetchFeedsByTags(action) {
    try {
        const data = yield call(Feeds.byTags, action.payload)
        yield put({ type: "SEARCH_SUCCESS", payload: data })
    } catch (error) {
        yield put({ type: "SEARCH_FAILED", payload: error })
    }
}


export default function* rootSaga() {
    yield takeLatest('SEARCH', fetchFeedsByTags)
}