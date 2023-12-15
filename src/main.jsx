import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "./Redux/store.js";
import { BrowserRouter } from "react-router-dom";
const theme = extendTheme({
  fonts: {
    body: "Roboto, sans-serif",
    heading: "Roboto, serif",
  },
  fontSizes: {
    sm: {
      base: "14px",
      sm: "12px",
      md: "14px",
      lg: "16px",
      xl: "18px",
    },
  },
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </Provider>
);
