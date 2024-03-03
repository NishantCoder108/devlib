import {
    Button,
    Card,
    CardBody,
    CardFooter,
    Image,
    Link,
    Tooltip,
} from "@nextui-org/react";
import DownloadBtn from "../assets/svg/download.svg";
import { BookState } from "../features/bookSlice";
import useSearchBookById from "../configs/hooks/useSearchBookById";

const BooksCard = (props: BookState) => {
    // console.log("Bookcard Props:- ", props);

    const book = useSearchBookById(props.id) as BookState;

    if (!book.image) return;

    const { authors, image, pages, title, download, id } = book;

    // console.log({ book });

    return (
        <>
            {book && (
                <Card
                    shadow="sm"
                    key={id}
                    // isHoverable={true}
                    className="w-[250px] rounded"
                    onPress={() => console.log("item pressed")}
                >
                    <CardBody className="overflow-visible p-0 rounded-none">
                        <Image
                            shadow="sm"
                            radius="lg"
                            width="100%"
                            alt={title}
                            className="w-[250px] object-cover h-[300px] rounded-none"
                            src={image}
                        />
                    </CardBody>
                    <CardFooter className="text-small flex-col justify-start items-start text-left">
                        <p className="font-semibold ">{title}</p>
                        <p className="text-default-500 overflow-hidden whitespace-nowrap overflow-ellipsis max-w-full">
                            {authors}
                        </p>
                        <div className="flex items-center justify-between w-full">
                            <p>{pages || 0} Pages</p>
                            <Tooltip
                                placement={"bottom"}
                                offset={-3}
                                showArrow
                                content="Download"
                            >
                                <Button
                                    isIconOnly
                                    aria-label="download books"
                                    className="bg-transparent"
                                    radius="full"
                                    href={download}
                                    as={Link}
                                    download={true}
                                >
                                    <img
                                        alt="download books"
                                        src={DownloadBtn}
                                        className="w-4"
                                    />
                                </Button>
                            </Tooltip>
                        </div>
                    </CardFooter>
                </Card>
            )}{" "}
        </>
    );
};

export default BooksCard;
