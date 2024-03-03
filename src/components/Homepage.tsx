import { useState } from "react";
import AppNavbar from "./AppNavbar";

import AiPrompt from "./gpt/AiPrompt";

const Homepage = () => {
    const [text, setText] = useState("");

    const handleSearchText = (data: string) => {
        console.log("Homepage Search Text :-", data);

        setText(data);
    };

    return (
        <div>
            <AppNavbar searchText={handleSearchText} />
            <AiPrompt promptText={text} />
        </div>
    );
};

export default Homepage;
