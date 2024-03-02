import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
} from "@nextui-org/react";

interface IModal {
    isOpen: boolean;
    onOpen?: () => void;
    onClose: () => void;
    title: string | null;
}
const AppModal = ({ isOpen, onClose, title }: IModal) => {
    return (
        <>
            <Modal
                isDismissable={false}
                backdrop="blur"
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalContent>
                    {/* {(onClose) => ( */}
                    <>
                        <ModalHeader className="flex flex-col gap-1">
                            {title}
                        </ModalHeader>
                        <ModalBody>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nullam pulvinar risus non risus
                                hendrerit venenatis. Pellentesque sit amet
                                hendrerit risus, sed porttitor quam.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nullam pulvinar risus non risus
                                hendrerit venenatis. Pellentesque sit amet
                                hendrerit risus, sed porttitor quam.
                            </p>
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                color="danger"
                                variant="light"
                                onPress={onClose}
                            >
                                Close
                            </Button>
                            <Button color="primary" onPress={onClose}>
                                Submit
                            </Button>
                        </ModalFooter>
                    </>
                    {/* )} */}
                </ModalContent>
            </Modal>
        </>
    );
};

export default AppModal;
