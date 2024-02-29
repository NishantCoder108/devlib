import React, { useState } from "react";
import AppNavbar from "./AppNavbar";
import BooksLibrary from "./BooksLibrary";

const Homepage = () => {
    const [text, setText] = useState("js");
    const handleSearchText = (data: string) => {
        console.log("homepage data", data);
        setText(data);
    };

    return (
        <div>
            {" "}
            <AppNavbar searchText={handleSearchText} />
            <BooksLibrary query={text} />
        </div>
    );
};

export default Homepage;
