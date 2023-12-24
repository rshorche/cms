import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDSJYP5WtVnpuMhRSWBa0qelp7h9phGlWE",
  authDomain: "cms-react-81f80.firebaseapp.com",
  projectId: "cms-react-81f80",
  storageBucket: "cms-react-81f80.appspot.com",
  messagingSenderId: "408502527024",
  appId: "1:408502527024:web:11b6b7e3f92ae7f9bdb9f5"
};
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
