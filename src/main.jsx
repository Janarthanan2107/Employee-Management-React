import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { EmployeeContextProvider } from "./context/employee.Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <EmployeeContextProvider>
      <App />
    </EmployeeContextProvider>
  </React.StrictMode>
);
