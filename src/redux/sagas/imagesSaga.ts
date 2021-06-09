import { setDisplayImages } from "./../actions/actions";
import { setImagesData } from "../actions/actions";
import { getPhotosApi } from "../../api/api";
import { call, put } from "redux-saga/effects";
import { PhotosState, Result } from "./../types";

export function* getPhotosSaga() {
  try {
    const { result, error }: Result<Array<PhotosState>> = yield call(
      getPhotosApi
    );
    if (error) {
      throw new Error(error);
    }
    if (result) {
      yield put(setImagesData(result));
      yield put(setDisplayImages(result.slice(0, 10)));
    }
  } catch (e) {
    console.log(e, "ОШИБКА В САГЕ");
  }
}
