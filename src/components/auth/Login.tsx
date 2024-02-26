import { Button, Image, Input } from "@nextui-org/react";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { PersonIcon } from "../icons/Person";
import { SubmitHandler, useForm } from "react-hook-form";
import { IPassword } from "../icons/IPassword";
import { ILogin } from "../icons/ILogin";
import Logo from "../../assets/svg/logo.svg";

type FormData = {
    email: string;
    password: string;
};

const Login = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormData>();
    const navigate = useNavigate();
    const location = useLocation();

    // console.log("Location in login", location);
    // const from = location.state?.from?.pathname || "/";

    // function handleSubmit1(event: React.FormEvent<HTMLFormElement>) {
    //     event.preventDefault();

    //     const formData = new FormData(event.currentTarget);
    //     const username = formData.get("username") as string;

    //     console.log({ username });
    //     console.log("2", { from });

    //     //logic to navigate after login
    //     navigate(from, { replace: true });
    // }
    const onSubmit = handleSubmit((data) => console.log("sdkfj", data));

    console.log(watch("email")); // watch input value by passing the name of it

    return (
        <div className="flex items-center justify-center ">
            <div className="h-[90vh] w-80 pt-28">
                <div className="flex flex-col items-center pb-16">
                    <img
                        // width={240}
                        alt="devlib logo"
                        src={Logo}
                    />
                </div>
                <form onSubmit={onSubmit}>
                    <div className="flex flex-col gap-6 ">
                        <Input
                            {...register("email", { required: true })}
                            isRequired
                            radius="full"
                            autoComplete="off"
                            type="email"
                            // label="Email"
                            classNames={{
                                input: [
                                    "bg-transparent",
                                    "text-black/90 dark:text-white/90",
                                    "placeholder:text-default-700/50 font-semibold  dark:placeholder:text-white/60",
                                ],
                                // innerWrapper: "bg-white",
                                inputWrapper: ["bg-white"],
                            }}
                            placeholder="Enter Your Email"
                            // labelPlacement="outside"
                            startContent={
                                <PersonIcon className="text-2xl text-default-400 pointer-events-none   flex-shrink-0" />
                            }
                        />
                        <Input
                            {...register("password", { required: true })}
                            autoComplete="off"
                            isRequired
                            type="password"
                            radius="full"
                            // label="Email"
                            classNames={{
                                input: [
                                    "bg-transparent",
                                    "text-black/90 dark:text-white/90",
                                    "placeholder:text-default-700/50 font-semibold  dark:placeholder:text-white/60",
                                ],
                                // innerWrapper: "bg-white",
                                inputWrapper: ["bg-white"],
                            }}
                            placeholder="Enter Your Password"
                            // labelPlacement="outside"
                            startContent={
                                <IPassword className="text-2xl text-default-400  pointer-events-none  flex-shrink-0" />
                            }
                        />
                        <Button
                            type="submit"
                            fullWidth
                            className="bg-[#e8139ecf] text-white font-bold mt-8 py-7"
                            radius="full"
                            endContent={<ILogin />}
                        >
                            Login In
                        </Button>{" "}
                    </div>
                </form>

                <div className="flex items-center justify-between  text-small font-semibold mt-3">
                    <p className="text-sm ">
                        New User?{" "}
                        <Link
                            to="/signup"
                            className="hover:underline decoration-1"
                        >
                            {" "}
                            Sign Up
                        </Link>
                    </p>
                    <Link
                        to="/reset-password"
                        className="text-small hover:underline decoration-1"
                    >
                        Reset Password
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
