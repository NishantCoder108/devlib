import { getAuth } from "firebase/auth";
import { Navigate, useLocation } from "react-router-dom";

const RequiredAuth = ({ children }: { children: JSX.Element }) => {
    const auth = getAuth();

    const user = auth.currentUser;
    const refreshToken = user?.refreshToken;

    const location = useLocation();

    // console.log({ location });
    // console.log({ user });

    if (!refreshToken) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return children;
};

export default RequiredAuth;
