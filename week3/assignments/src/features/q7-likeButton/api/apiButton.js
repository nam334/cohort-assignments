export const mockApi = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSuccess = Math.random() > 0.5;
      if (isSuccess) resolve("Promise resolved");
      else {
        reject(new Error("Request failed. Please try again"));
      }
    }, 2000);
  });
};
