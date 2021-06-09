export type InitialState = {
  images: Array<PhotosState>;
  displayImages: Array<PhotosState>;
  totalNumberPages: number;
  currentPage: number;
};

export type PhotosState = {
  albumId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string;
};

export type Result<T = any> = {
  result?: T;
  error?: string;
};
