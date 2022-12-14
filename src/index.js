import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/authContext/authenticationContext";
import { DataProvider } from "./context/dataContext/dataContext";
import { ServiceProvider } from "./context/servicesContext/servicesContext";
import { ToastContainer } from "react-toastify";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <ServiceProvider>
          <DataProvider>
            <ToastContainer />
            <App />
          </DataProvider>
        </ServiceProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("app")
);

ReactDOM.createPortal(
  <ToastContainer
    position="bottom-right"
    autoClose={1500}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
  />,
  document.getElementById("notifications")
);