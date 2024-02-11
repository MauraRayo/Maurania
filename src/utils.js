export const getImageUrl = (path) => {
  return new URL(`/assets/${path}`, import.meta.url).href;
};

export const getPdfUrl = (path) => {
  return new URL(`/assets/${path}`, import.meta.url).href;
};
