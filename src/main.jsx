import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactComponent from "./views/pages/Contact/contact.jsx";
import Project from "./views/pages/Projects/Project.jsx";
import Homepage from "./views/pages/HomePage/Homepage.jsx";
import AboutUsSection from "./views/pages/About/Aboutpage.jsx";

const router = createBrowserRouter([
  {
    // path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/projects",
        element: <Project />,
      },
      {
        path: "/contact",
        element: <ContactComponent />,
      },
      {
        path: "/About",
        element: <AboutUsSection/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
