import { Button, Tooltip, useDisclosure } from "@nextui-org/react";
import AiIcon from "../../assets/svg/ai.svg";
import AppModal from "../common/AppModal";
import CredentilsFormForAi from "../CredentilsFormForAi";

const SearchByAi = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleOpen = () => {
        onOpen();
    };

    return (
        <div>
            <AppModal
                modalBody={<CredentilsFormForAi onClose={onClose} />}
                title={"Integrate Your App With Ai"}
                isOpen={isOpen}
                onClose={onClose}
            />
            <Tooltip
                placement={"bottom"}
                offset={-3}
                showArrow
                content="Search By Ai"
                className="border-none outline-none text-[#e8139ecf]"
            >
                <Button
                    type="submit"
                    // fullWidth
                    className=" bg-transparent "
                    isIconOnly
                    onClick={handleOpen}
                >
                    <img src={AiIcon} alt="ai logo" className="w-4" />
                </Button>
            </Tooltip>
        </div>
    );
};

export default SearchByAi;
