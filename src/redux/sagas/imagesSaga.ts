import {
  getImagesFilter,
  setCurrentFilter,
  setImagesData,
} from "../actions/actions";
import { getImagesApi, getImagesFilterApi } from "../../api/api";
import { call, put } from "redux-saga/effects";
import { ImagesState, Result } from "./../types";

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
    console.log(e, "error in saga 'getImagesSaga");
  }
}

export function* getImagesFilterSaga({
  payload: idAlbum,
}: ReturnType<typeof getImagesFilter>) {
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
      yield put(setCurrentFilter(idAlbum));
    }
  } catch (e) {
    console.log(e, "error in saga 'getImagesFilterSaga");
  }
}
