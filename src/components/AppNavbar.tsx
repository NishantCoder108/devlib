import Logo from "../assets/svg/logo.svg";
import Logout from "../assets/svg/logout.svg";
import SearchIcon from "../assets/svg/search.svg";

import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Button,
    Input,
    Tooltip,
} from "@nextui-org/react";
import { signOut } from "firebase/auth";
import { auth } from "../configs/firebase";
import { logoutUser } from "../features/authSlice";
import { useAppDispatch } from "../app/hooks";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import SearchByAi from "./SearchByAi";

interface ISearchData {
    searchText: string;
}
interface AppNavbarProps {
    searchText: (data: string) => void;
}
export default function AppNavbar({ searchText }: AppNavbarProps) {
    const {
        register,
        handleSubmit,
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
        console.log("SearchTextInNavbar:-", data);

        searchText(data.searchText);
    });

    console.log(errors);
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
                            mainWrapper: "h-full w-[30vw] ",
                            input: "text-small px-2",
                            inputWrapper:
                                "h-full font-normal text-default-500 bg-white dark:bg-default-500/20 rounded-l-full",
                        }}
                        placeholder={`Search with AI, for example: "Suggest JavaScript books?"`}
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
                        <img src={SearchIcon} alt="ai logo" className="w-4" />
                    </Button>
                </form>
                <SearchByAi />
                <NavbarItem>
                    <Tooltip
                        placement={"bottom"}
                        content={"Logout"}
                        offset={-3}
                        showArrow
                    >
                        <Button
                            isIconOnly
                            aria-label="logout"
                            className="bg-transparent"
                            radius="full"
                            onClick={handleLogout}
                        >
                            <img src={Logout} alt="logout" className="w-4" />
                        </Button>
                    </Tooltip>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
