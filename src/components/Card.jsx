import React from "react";
import { twMerge } from "tailwind-merge";

const Card = ({ icon, heading, description, className }) => {
    return (
        <div className={twMerge("relative h-fit flex flex-col items-center lg:items-start bg-white pt-19 rounded-md px-8 pb-10", className)}>
            <div className="bg-p-p w-fit p-6 rounded-full absolute top-0 -translate-y-1/2 lg:left-8">
                <img src={icon} alt="" />
            </div>
            <h3 className="text-[1.3rem] lg:text-[1.3] tracking-wide font-bold text-n-g-3">{heading}</h3>
            <p className="text-[1rem] lg:leading-[1.6] lg:text-start text-n-g-2 mt-5 tracking-tight">{description}</p>
        </div>
    );
};

export default Card;
