import { takeEvery } from "redux-saga/effects";
import { TYPES } from "../actions/actionsTypes";
import { getImagesFilterSaga, getImagesSaga } from "./imagesSaga";

export default function* projectSaga() {
  yield takeEvery(TYPES.GET_IMAGES_FILTER, getImagesFilterSaga);
  yield takeEvery(TYPES.GET_IMAGES, getImagesSaga);
}
