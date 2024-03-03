import useSearchBooks from "../configs/hooks/useSearchBooks";
import BooksCard from "./BooksCard";

interface IQuery {
    query: string;
}
const BooksLibrary = ({ query }: IQuery) => {
    const books = useSearchBooks(query);

    if (!books)
        return (
            <p className="text-gray-900  px-[1.5rem] py-8">No Found Books 😔</p>
        );
    return (
        <>
            <div className="flex px-6 gap-4 mt-12 items-center sm:justify-between flex-wrap justify-center ">
                {books
                    ? books.map((item) => <BooksCard key={item.id} {...item} />)
                    : "Not found"}
            </div>
        </>
    );
};

export default BooksLibrary;
