import { Link } from "react-router-dom";

export default function ErrorPage() {
    return (
        <div className="flex  h-[70vh] w-full  items-center justify-center">
            <div id="error-page" className="flex flex-col ">
                <h1>Oops!</h1>
                <p>
                    The page you're looking for doesn't exist. Please check the
                    URL or go back to the homepage.
                </p>
                <Link className="mt-6 underline text-purple-400" to="/">
                    Back To Home
                </Link>
            </div>{" "}
        </div>
    );
}
