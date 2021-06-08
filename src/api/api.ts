export const getPhotosApi = () => {
  return fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => response.json())
    .then((result) => ({
      result,
    }))
    .catch((error) => ({ error }));
};
