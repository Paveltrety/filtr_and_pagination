import { PhotosState, Result } from "./../types";
import { call, put, takeEvery } from "redux-saga/effects";
import { getPhotosApi } from "../../api/api";
import { TYPES } from "../actions/actionsTypes";
import { setPhotosData } from "../actions/actions";
export default function* projectSaga() {
  yield takeEvery(TYPES.GET_PHOTOS, getPhotosSaga);
}

export function* getPhotosSaga() {
  try {
    const { result, error }: Result<Array<PhotosState>> = yield call(
      getPhotosApi
    );
    if (error) {
      throw new Error(error);
    }
    if (result) {
      yield put(setPhotosData(result));
    }
  } catch (e) {
    console.log(e, "ОШИБКА В САГЕ");
  }
}
