import Logo from "../assets/svg/logo.svg";
import Logout from "../assets/svg/logout.svg";
import Ai from "../assets/svg/ai.svg";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Button,
    Input,
} from "@nextui-org/react";
import { signOut } from "firebase/auth";
import { auth } from "../configs/firebase";
import { logoutUser } from "../features/authSlice";
import { useAppDispatch } from "../app/hooks";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

interface ISearchData {
    searchText: string;
}

export default function AppNavbar() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ISearchData>();
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

    const handleSearchText = handleSubmit((data) => {
        console.log("search data", data);
        reset();
    });

    return (
        <Navbar disableAnimation maxWidth="full" className="bg-transparent">
            <NavbarContent className="" justify="center">
                <NavbarBrand>
                    <img src={Logo} alt="devlib logo"></img>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent justify="end" className="">
                <form
                    onSubmit={handleSearchText}
                    className="flex items-center rounded-none"
                >
                    <Input
                        {...register("searchText", { required: true })}
                        autoComplete="off"
                        classNames={{
                            base: "w-full h-10 ",
                            mainWrapper: "h-full w-[46vw] ",
                            input: "text-small px-2",
                            inputWrapper:
                                "h-full font-normal text-default-500 bg-white dark:bg-default-500/20 rounded-l-full",
                        }}
                        placeholder="Search your programming books with AI, e.g., Can you suggest JavaScript-related books? ..."
                        size="sm"
                        type="search"
                        fullWidth={true}
                    />
                    <Button
                        type="submit"
                        // fullWidth
                        className="rounded-r-full bg-white border border-l-1 px border-gray-50 "
                        isIconOnly
                    >
                        <img src={Ai} alt="ai logo" className="w-4" />
                    </Button>
                </form>

                <NavbarItem>
                    <Button
                        isIconOnly
                        aria-label="logout"
                        className="bg-transparent"
                        radius="full"
                        onClick={handleLogout}
                    >
                        <img src={Logout} alt="logout" className="w-4" />
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
