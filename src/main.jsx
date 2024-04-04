import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { store } from "./REDUX/store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import GenerationPage from "./IMAGE GENERATOR/pages/GenerationPage/GenerationPage";
import ImgResult from "./IMAGE GENERATOR/pages/ImgResult/ImgResult";
import Collection from "./IMAGE GENERATOR/pages/Collection/Collection";
import Download from "./IMAGE GENERATOR/pages/Download/Download";
import History from "./IMAGE GENERATOR/pages/History/History";
import Setings from "./IMAGE GENERATOR/pages/Setings/Setings";
import LogOut from "./IMAGE GENERATOR/pages/LogOut/LogOut";
import CreatPost from "./IMAGE GENERATOR/pages/CreatPost/CreatPost";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/create",
    element: <GenerationPage></GenerationPage>,
  },
  {
    path: "/imgResult",
    element: <ImgResult></ImgResult>,
  },
  {
    path: "/collection",
    element: <Collection></Collection>,
  },
  {
    path: "/post",
    element:<CreatPost></CreatPost>,
  },
  {
    path: "/download",
    element: <Download></Download>,
  },
  {
    path: "/history",
    element: <History></History>,
  },
  {
    path: "/settings",
    element: <Setings></Setings>,
  },
  {
    path: "/logout",
    element: <LogOut></LogOut>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
