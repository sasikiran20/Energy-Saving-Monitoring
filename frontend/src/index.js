import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Login from "./login";
import Register from "./register";
import Dashboard from "./Dashboard";
import ProfilePage from "./ProfilePage";
import EnergySaving from "./EnergySaving";
import Charts from "./Charts";
import Rewards from "./Rewards";
import Appliances from "./Appliances";
import Leaderboard from "./Leaderboard";

import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/boxicons/css/boxicons.css';
import './assets/vendor/quill/quill.snow.css';
import './assets/vendor/quill/quill.bubble.css';
import './assets/vendor/remixicon/remixicon.css';
import './assets/vendor/simple-datatables/style.css'

// import  './assets/vendor/apexcharts/apexcharts.min.js';
import  './assets/vendor/bootstrap/js/bootstrap.bundle.min.js';
import  './assets/vendor/quill/quill.min.js';
// import  './assets/vendor/chart.js/chart.min.js';
// import  './assets/vendor/echarts/echarts.min.js';
// import  './assets/vendor/simple-datatables/simple-datatables.js';
// import  './assets/vendor/tinymce/tinymce.min.js';
// import  './assets/vendor/php-email-form/validate.js';





import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import Points from "./Points";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/energy_savings",
    element: <EnergySaving />,
  },
  {
    path: "/test",
    element: <Charts />,
  },
  {
    path: "/rewards",
    element: <Rewards />,
  },
  {
    path: "/appliances",
    element: <Appliances />,
  },
  {
    path: "/points",
    element: <Points />,
  },
   {
    path: "/leaderboard",
    element: <Leaderboard />,
   },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
