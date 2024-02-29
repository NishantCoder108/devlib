import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import React from "react";
import { BookState } from "../features/bookSlice";

const BooksCard = (props: BookState) => {
    console.log("Bookcard ", props);

    const { authors, id, image, title } = props;

    return (
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
            </CardFooter>
        </Card>
    );
};

export default BooksCard;