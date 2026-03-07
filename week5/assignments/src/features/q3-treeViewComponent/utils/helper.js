export const generateChildNodes = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "src", hasChildren: false },
        { id: 2, name: "public", hasChildren: false },
        { id: 3, name: "package.json", hasChildren: false },
      ]);
    }, 2000);
  });
};
