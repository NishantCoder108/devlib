import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";

const RequiredAuth = ({ children }: { children: JSX.Element }) => {
    const { accessToken } = useAppSelector((state) => state.auth);

    const location = useLocation();

    console.log("RequiredAuth", { accessToken });
    if (!accessToken) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }
    return children;
};

export default RequiredAuth;
