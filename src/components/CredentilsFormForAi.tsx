import { Button, Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../app/hooks";
import { addAiCredential } from "../features/aiCredentialSlice";

interface ICredentialsForAi {
    openAiKey: string;
}
interface IProps {
    onClose: () => void;
}
const CredentilsFormForAi = ({ onClose }: IProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ICredentialsForAi>();

    const dispatch = useAppDispatch();

    const handleFormSubmit = handleSubmit((data) => {
        console.log("Credential Form Data", data);
        const trimData = data.openAiKey.trim();
        dispatch(addAiCredential(trimData));
        onClose();
    });

    console.log(errors);
    return (
        <div>
            <form
                onSubmit={handleFormSubmit}
                className="flex items-start flex-col justify-center gap-6"
            >
                <Input
                    {...register("openAiKey", { required: true })}
                    autoComplete="off"
                    classNames={{
                        base: "w-full h-10 ",
                        mainWrapper: "h-full",
                        input: "text-small px-2",
                        inputWrapper:
                            "h-full font-normal text-default-500 bg-white dark:bg-default-500/20 ",
                    }}
                    placeholder={`Paste Your OpenAi credentials.`}
                    size="sm"
                    type="password"
                    fullWidth={true}
                />
                <Button
                    type="submit"
                    fullWidth
                    className="bg-[#e8139ecf] text-white font-bold "
                >
                    Submit
                </Button>
                <p className="text-small">
                    Note: It will be stored on the client side, not in the
                    database.
                </p>
            </form>
        </div>
    );
};

export default CredentilsFormForAi;
