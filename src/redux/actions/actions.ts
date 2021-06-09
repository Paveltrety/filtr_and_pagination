import { PhotosState } from "../types";
import { TYPES } from "./actionsTypes";

export const getImages = () => ({
  type: TYPES.GET_IMAGES,
});

export const getImagesFilter = (idAlbum: number) => ({
  type: TYPES.GET_IMAGES_FILTER,
  payload: idAlbum,
});

export const setImagesData = (photos: Array<PhotosState>) => ({
  type: TYPES.SET_IMAGES_DATA,
  payload: photos,
});

export const setCurrentPage = (numberPage: number) => ({
  type: TYPES.SET_CURRENT_PAGE,
  payload: numberPage,
});

export const setCurrentFilter = (numberFilter: number) => ({
  type: TYPES.SET_CURRENT_FILTER,
  payload: numberFilter,
});
