import {
  getImages,
  getImagesFilter,
  setCurrentFilter,
  setCurrentPage,
  setImagesData,
} from "./actions/actions";

export type InitialState = {
  images: Array<ImagesState>;
  displayImages: Array<ImagesState>;
  totalNumberPages: number;
  currentPage: number;
  currentFilter: number | null;
};

export type ImagesState = {
  albumId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string;
};

export type Result<T> = {
  result?: T;
  error?: string;
};

export type ActionImagesReducerType = ReturnType<
  | typeof getImages
  | typeof getImagesFilter
  | typeof setImagesData
  | typeof setCurrentPage
  | typeof setCurrentFilter
>;
