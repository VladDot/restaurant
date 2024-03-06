import React from "react";
import { Link } from "react-router-dom";

interface IErrorsProps {
    text: string;
    url: string;
}

export const Errors: React.FC<IErrorsProps> = ({ text, url }) => {
    return (
        <div
            className=" h-screen flex-col justify-center bg-green
          items-center  overflow-y-hidden text-center"
        >
            <h1 className="mb-10 pt-[250px]">
                Oops! We can't find the page you're looking for
            </h1>
            <Link
                className="text-3xl hover:text-aqua transition duration-300 ease-in-out"
                to={url}
            >
                {text}
            </Link>
        </div>
    );
};

export default Errors;
