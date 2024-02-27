import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PersonIcon } from "../icons/Person";
import { useForm } from "react-hook-form";
import { IPassword } from "../icons/IPassword";
import { ILogin } from "../icons/ILogin";
import Logo from "../../assets/svg/logo.svg";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../configs/firebase";
import { getAnalytics, logEvent } from "firebase/analytics";

type FormData = {
    email: string;
    password: string;
};

const Signup = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>();
    const navigate = useNavigate();
    const analytics = getAnalytics();
    const [signupErr, setSignupErr] = useState("");

    const onSubmit = handleSubmit(async (data) => {
        const { email, password } = data;
        reset();

        logEvent(analytics, "signup_button_clicked", {});
        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            console.log({ userCredential });

            navigate("/", { replace: true });
        } catch (error) {
            if (error instanceof Error) {
                const errorMessageMatch = error.message.match(
                    /Firebase: Error \((.*)\)/
                );
                const errorMessage = errorMessageMatch
                    ? errorMessageMatch[1]
                    : "Unknown error";

                console.log("Actual error message:", errorMessage);
                setSignupErr(errorMessage.toUpperCase());
            }
        }
    });

    console.log("Form Errors: ", errors);

    return (
        <div className="flex items-center justify-center ">
            <div className="h-[90vh] w-80 pt-28">
                <div className="flex flex-col items-center pb-16">
                    <img alt="devlib logo" src={Logo} />
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
                        <p className="text-[.5rem] font-semibold text-red-700 h-1">
                            {signupErr && signupErr}
                        </p>
                        <Button
                            type="submit"
                            fullWidth
                            className="bg-[#e8139ecf] text-white font-bold mt-8 py-7"
                            radius="full"
                            endContent={<ILogin />}
                        >
                            Sign Up
                        </Button>
                    </div>
                </form>

                <div className="flex items-center justify-between  text-small font-semibold mt-3">
                    <p className="text-sm ">
                        Already User?
                        <Link to="/" className="hover:underline decoration-1">
                            Login
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

export default Signup;
