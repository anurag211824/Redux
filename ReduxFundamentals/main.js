// 1. Import createRoot from react-dom/client and Provider from react-redux
// 2. Import the reducx store
// 3. Wrap it inside the Provider and pass a store as a key to the Provider

import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";

import { store } from "./store/index.js";
createRoot(document.querySelector("#root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
