export type InitialState = {
  photos: Array<PhotosState>;
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
