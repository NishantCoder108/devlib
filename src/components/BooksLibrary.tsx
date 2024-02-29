import { Button } from "@nextui-org/react";

import AppNavbar from "./AppNavbar";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import BooksCard from "./BooksCard";
import { useEffect, useState } from "react";
import { BookState, addBooks } from "../features/bookSlice";

interface IQuery {
    query: string;
}
const BooksLibrary = ({ query }: IQuery) => {
    // const allBooks = useAppSelector((state) => state.books.allBooks);
    // console.log("All books in books library", allBooks);
    const dispatch = useAppDispatch();

    const [books, setBooks] = useState<BookState[]>([]);
    const fetchBooks = async (query: string) => {
        try {
            const booksList = await fetch(
                `https://www.dbooks.org/api/search/${query}`
            );
            const json = await booksList.json();

            console.log("res_books_list", json);
            setBooks(json.books);
            dispatch(addBooks(json.books));
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchBooks(query);
    }, [query]);
    console.log("Books library books ", books);
    // console.log("Books library all books ", allBooks);

    // if (!books) {
    //     return <p>Loading...</p>;
    // }
    return (
        <>
            <div className="flex px-6 gap-4 items-center justify-between flex-wrap">
                {books.length > 0
                    ? books.map((item) => <BooksCard {...item} />)
                    : "Not found"}
            </div>
        </>
    );
};

export default BooksLibrary;
