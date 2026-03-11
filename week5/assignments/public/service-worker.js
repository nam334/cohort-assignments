self.addEventListener("install", () => {
  console.log("service worker installed");
});

self.addEventListener("activate", () => {
  console.log("service worker activated");
});

self.addEventListener("push", async (e) => {
  console.log("service worker pushed");
  let data = {};
  if (e.data) {
    data = e.data.json();
  }
  console.log("push data", data);
  const notification = {
    id: Date.now(),
    message: data.message,
    timestamp: Date.now(),
    read: false,
  };
  console.log("Notification created:", notification);
  //get all open browser tabs
  const clients = await self.clients.matchAll();

  //send notification to eaach tab
  clients.forEach((client) => {
    client.postMessage(notification);
  });
});
