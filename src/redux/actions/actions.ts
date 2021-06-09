import { PhotosState } from "../types";
import { TYPES } from "./actionsTypes";

export const getImages = () => ({
  type: TYPES.GET_IMAGES,
});

export const setImagesData = (photos: Array<PhotosState>) => ({
  type: TYPES.SET_IMAGES_DATA,
  payload: photos,
});

export const setDisplayImages = (photos: Array<PhotosState>) => ({
  type: TYPES.SET_DISPLAY_IMAGES,
  payload: photos,
});

export const setCurrentPage = (numberPage: number) => ({
  type: TYPES.SET_CURRENT_PAGE,
  payload: numberPage,
});
