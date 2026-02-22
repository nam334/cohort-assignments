export const searchProducts = async (query) => {
  const data = await fetch(`https://dummyjson.com/products/search?q=${query}`);
  return data.json();
};
