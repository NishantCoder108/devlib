import { useEffect, useState } from "react";
import { Search_BOOK_By_ID } from "../../constants";

const useSearchBookById = (bookId: string) => {
    const [bookDetails, setBookDetails] = useState({});

    const fetchBookById = async (bookId: string) => {
        const data = await fetch(Search_BOOK_By_ID + "/" + bookId);
        const jsonData = await data.json();

        console.log("Books List :- ", jsonData);

        setBookDetails(jsonData);
    };

    useEffect(() => {
        fetchBookById(bookId);
    }, [bookId]);

    return bookDetails ? bookDetails : null;
};

export default useSearchBookById;
