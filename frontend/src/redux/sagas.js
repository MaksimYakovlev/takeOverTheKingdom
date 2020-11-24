import { call, put, takeEvery } from "redux-saga/effects";
import { FETCH_COUNTRIES, REQUEST_COUNTRIES } from "./types";
import { hideLoader, showAlert, showLoader } from "./actions";


export function* sagaWatcher() {
    yield takeEvery(REQUEST_COUNTRIES, sagaWorker);
  }

  function* sagaWorker() {
    try {
      yield put(showLoader());
      const payload = yield call(fetchedPosts);
      yield put({ type: FETCH_COUNTRIES, payload });
      yield put(hideLoader());
    } catch (error) {
      yield put(showAlert("Что-то пошло не так"));
      yield put(hideLoader());
    }
  }
  
  async function fetchedPosts() {
    const response = await fetch(
      "http://localhost:3001/region"
    );
    const json = await response.json();
    return json;
  }
  