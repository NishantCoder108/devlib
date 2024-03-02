import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import "./App.css";
import Layout from "./components/layouts/Layout";
import Login from "./components/auth/Login";
import RequiredAuth from "./components/auth/RequiredAuth";
import Signup from "./components/auth/Signup";
import Homepage from "./components/Homepage";

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route
                        path="/bookslibrary"
                        element={
                            <RequiredAuth>
                                <Homepage />
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
