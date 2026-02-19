export const fetchData = async (page, limit) => {
  const skip = (page - 1) * limit;
  const data = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
  );
  return data.json();
};
