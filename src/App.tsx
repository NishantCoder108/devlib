import { useState } from "react";

import "./App.css";
import AppNavbar from "./components/AppNavbar";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <div>Hello world!</div>,
            errorElement: <ErrorPage />,
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
