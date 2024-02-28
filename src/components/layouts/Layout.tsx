import { Outlet } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { auth } from "../../configs/firebase";
import { useAppDispatch } from "../../app/hooks";
import { logoutUser, signInUser } from "../../features/authSlice";

const Layout = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    console.log("Auth in Layout file", auth);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                const userDetails = {
                    email: user.email,
                    accessToken: await user.getIdToken(),
                    emailVerified: user.emailVerified,
                    uid: user.uid,
                };
                console.log("User_Layout", userDetails);

                dispatch(signInUser(userDetails));
                navigate("/bookslibrary");
            } else {
                // User is signed out
                dispatch(logoutUser());
                navigate("/");
            }
        });

        return () => unsubscribe();
        //
    }, []);
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default Layout;
