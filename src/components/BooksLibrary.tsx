import { Button } from "@nextui-org/react";
import { signOut } from "firebase/auth";
import { auth } from "../configs/firebase";
import { logoutUser } from "../features/authSlice";
import { useAppDispatch } from "../app/hooks";
import { useNavigate } from "react-router-dom";

const BooksLibrary = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                dispatch(logoutUser());
                navigate("/", { replace: true });
            })
            .catch((error) => {
                console.log("Logout Failed Error :", error);
            });
    };
    return (
        <div className="text-red-700">
            <p>Books library</p>
            <Button onClick={handleLogout}> Logout</Button>
        </div>
    );
};

export default BooksLibrary;
