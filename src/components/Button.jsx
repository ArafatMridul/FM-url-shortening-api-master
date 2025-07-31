import React from "react";
import { twMerge } from "tailwind-merge";

const Button = ({ type, children, className }) => {
    return (
        <button
            type="button"
            className={twMerge(
                "font-medium transition-opacity duration-300 hover:opacity-70 cursor-pointer",
                type === "primary-nav" &&
                    "px-6 py-3 text-white text-sm bg-p-b rounded-full shrink-0",
                className
            )}
        >
            {children}
        </button>
    );
};

export default Button;
