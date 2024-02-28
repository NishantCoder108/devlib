import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import App from "./App.tsx";
import "./index.css";
import { DEVMODE } from "./constants.ts";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";

if (!DEVMODE) console.log = () => {};

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <NextUIProvider>
            <Provider store={store}>
                <App />
            </Provider>
        </NextUIProvider>
    </React.StrictMode>
);
