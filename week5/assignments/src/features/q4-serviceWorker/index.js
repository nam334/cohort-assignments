export { default } from "./components/NotificationCenter";
//check if browser support service worker
if ("serviceWorker" in navigator) {
  //wait until page fully loads
  window.addEventListener("load", () => {
    //register the service worker file located in public folder
    navigator.serviceWorker
      .register("/service-worker.js")

      //if registration is successful
      .then((registration) => {
        console.log("Service Worker registered:", registration);
      })
      // If registration fails
      .catch((error) => {
        console.log("Service Worker registration failed:", error);
      });
  });
}
