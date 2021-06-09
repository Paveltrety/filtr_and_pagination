import { takeEvery } from "redux-saga/effects";
import { TYPES } from "../actions/actionsTypes";
import { getPhotosSaga } from "./imagesSaga";

export default function* projectSaga() {
  yield takeEvery(TYPES.GET_IMAGES, getPhotosSaga);
}

