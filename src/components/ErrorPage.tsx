import { useRouteError } from "react-router-dom";

interface AppError {
    statusText?: string;
    data?: string;
    status?: number;
}
export default function ErrorPage() {
    const error = useRouteError() as AppError;

    console.error(error);

    return (
        <div className="flex  h-[70vh] w-full  items-center justify-center">
            <div id="error-page" className="flex flex-col ">
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>
                        {error.status ? (
                            <span>
                                {error.status}- {error.statusText} -{error.data}
                            </span>
                        ) : (
                            JSON.stringify(error)
                        )}
                    </i>
                </p>
            </div>{" "}
        </div>
    );
}
