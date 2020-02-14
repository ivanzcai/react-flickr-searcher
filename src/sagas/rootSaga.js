import { call, put, takeLatest } from 'redux-saga/effects'
import Feeds from '../Services/feeds'

export function* fetchFeedsByTags(action) {
    yield put({ type: "UPDATE_SELECTED_TAGS", payload: action.payload })

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