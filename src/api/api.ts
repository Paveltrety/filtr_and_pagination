export const getImagesApi = () => {
  return fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => response.json())
    .then((result) => ({
      result,
    }))
    .catch((error) => ({ error }));
};

export const getImagesFilterApi = (idAlbum: number) => {
  return fetch(`https://jsonplaceholder.typicode.com/albums/${idAlbum}/photos`)
    .then((response) => response.json())
    .then((result) => ({
      result,
    }))
    .catch((error) => ({ error }));
};
