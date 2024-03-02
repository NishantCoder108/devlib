import { useEffect, useState } from "react";
import { BookState } from "../../features/bookSlice";
import { Search_BOOKS_API } from "../../constants";

const useSearchBooks = (query: string) => {
    const [books, setBooks] = useState<BookState[]>([]);
    const fetchBooks = async (query: string) => {
        try {
            const booksList = await fetch(`${Search_BOOKS_API}/${query}`);
            const json = await booksList.json();

            // console.log("Books List", json);
            setBooks(json.books);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchBooks(query);
    }, [query]);

    return books ? books : null;
};

export default useSearchBooks;
