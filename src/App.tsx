import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import "./App.css";
import AppNavbar from "./components/AppNavbar";
import Layout from "./components/layouts/Layout";
import Login from "./components/auth/Login";
import BooksLibrary from "./components/BooksLibrary";
import RequiredAuth from "./components/auth/RequiredAuth";

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Login />} />
                    <Route
                        path="/bookslibrary"
                        element={
                            <RequiredAuth>
                                <BooksLibrary />
                            </RequiredAuth>
                        }
                    />
                    <Route path="*" element={<ErrorPage />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
