import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/react";
import { ReactNode } from "react";

interface IModal {
    isOpen: boolean;
    onOpen?: () => void;
    onClose: () => void;
    title?: string | null;
    modalBody: ReactNode;
}
const AppModal = ({ isOpen, onClose, title, modalBody }: IModal) => {
    return (
        <>
            <Modal
                isDismissable={false}
                backdrop="blur"
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalContent>
                    <>
                        <ModalHeader className="flex flex-col gap-1">
                            {title}
                        </ModalHeader>
                        <ModalBody>{modalBody}</ModalBody>
                    </>
                </ModalContent>
            </Modal>
        </>
    );
};

export default AppModal;
