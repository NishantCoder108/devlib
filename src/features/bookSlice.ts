import { createSlice } from "@reduxjs/toolkit";

export interface BookState {
    status?: string;
    title: string;
    id: string;
    subtitle: string;
    description?: string;
    authors: string;
    publisher?: string;
    pages?: string;
    year?: string;
    image: string;
    url: string;
    download?: string;
}

interface Bookslibrary {
    allBooks: BookState[];
    bookById?: BookState;
}
const books: Bookslibrary = {
    allBooks: [
        {
            status: "ok",
            id: "1503212300",
            title: "Invent Your Own Computer Games with Python",
            subtitle: "A beginner's guide to computer programming in Python",
            description:
                "Invent Your Own Computer Games with Python teaches you how to program in the Python language...",
            authors: "Al Sweigart",
            publisher: "CreateSpace",
            pages: "367",
            year: "2015",
            image: "https://www.dbooks.org/img/books/1503212300s.jpg",
            url: "https://www.dbooks.org/invent-your-own-computer-games-with-python-1503212300/",
            download:
                "https://www.dbooks.org/d/1503212300-1635507922-39943ccf97e71c6e/",
        },
    ],
};
export const bookSlice = createSlice({
    name: "books",
    initialState: books,
    reducers: {
        addBooks: (state, action) => {
            return { ...state, ...action.payload };
        },
    },
});

// Action creators are generated for each case reducer function
export const { addBooks } = bookSlice.actions;

export default bookSlice.reducer;
