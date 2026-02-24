export const generateDummyMessage = () => {
  const id = Math.random();
  let obj = {
    timeStamp: Date.now(),
    id: id,
    message: `This is a dummy message + ${id}`,
  };

  return obj;
};

export const formatTime = (timestamp) => {
  const date = new Date(timestamp);

  return date.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
};
