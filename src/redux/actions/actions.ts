import { PhotosState } from "../types";
import { TYPES } from "./actionsTypes";

export const getPhotos = () => ({
  type: TYPES.GET_PHOTOS,
});

export const setPhotosData = (photos: Array<PhotosState>) => ({
  type: TYPES.SET_PHOTOS_DATA,
  payload: photos,
});
