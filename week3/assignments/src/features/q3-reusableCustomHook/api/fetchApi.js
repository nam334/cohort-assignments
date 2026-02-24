export const fetchApi = async (url) => {
  const data = await fetch(url);
  return data.json();
};
