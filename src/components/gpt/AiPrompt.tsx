import { useEffect, useState } from "react";

import { useAppSelector } from "../../app/hooks";
import BooksLibrary from "../BooksLibrary";
import OpenAI from "openai";

interface Iprops {
    promptText: string;
}
const AiPrompt = ({ promptText }: Iprops) => {
    const [response] = useState("");
    const aiCredential = useAppSelector((state) => state.aiCredential);

    const callOpenAI = async (token: string, promptText: string) => {
        const openai = new OpenAI({
            apiKey: token,
            dangerouslyAllowBrowser: true,
        });

        console.log("OpenAi", openai);

        const gptQuery =
            "Act as a Programming Book Recommendation system and suggest some book for the query : " +
            promptText +
            ". only give me names of 5 book, comma seperated like the example result given ahead. Example Result: Learning Node.js, The Next.js Handbook, Learning Vue.js, Eloquent JavaScript, Learning JavaScript";

        const gptResults = await openai.chat.completions.create({
            messages: [{ role: "user", content: gptQuery }],
            model: "gpt-3.5-turbo",
        });

        console.log("gptRes", gptResults);
    };

    useEffect(() => {
        if (promptText && aiCredential) {
            callOpenAI(aiCredential, promptText);
        }
    }, [aiCredential, promptText]);

    return (
        <>
            <BooksLibrary query={response || promptText} />
        </>
    );
};

export default AiPrompt;
