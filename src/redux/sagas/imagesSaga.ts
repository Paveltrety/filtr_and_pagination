import { setCurrentFilter, setImagesData } from "../actions/actions";
import { getImagesApi, getImagesFilterApi } from "../../api/api";
import { call, put } from "redux-saga/effects";
import { PhotosState as ImagesState, Result } from "./../types";

export function* getImagesSaga() {
  try {
    const { result, error }: Result<Array<ImagesState>> = yield call(
      getImagesApi
    );
    if (error) {
      throw new Error(error);
    }
    if (result) {
      yield put(setImagesData(result));
    }
  } catch (e) {
    console.log(e, "ОШИБКА В САГЕ");
  }
}

export function* getImagesFilterSaga({ payload: idAlbum }: any) {
  try {
    const { result, error }: Result<Array<ImagesState>> = yield call(
      getImagesFilterApi,
      idAlbum
    );
    if (error) {
      throw new Error(error);
    }
    if (result) {
      yield put(setImagesData(result));
      yield put(setCurrentFilter(idAlbum))
    }
  } catch (e) {
    console.log(e, "ОШИБКА В САГЕ");
  }
}
