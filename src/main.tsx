import React from "react";
import {defaultTheme, Provider} from '@adobe/react-spectrum';
import {ToastContainer} from '@react-spectrum/toast'
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider theme={defaultTheme}>
      <ToastContainer/>
      <App/>
    </Provider>
  </React.StrictMode>,
);
