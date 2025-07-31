import React, { useEffect, useState } from "react";
import siteLogo from "/images/logo.svg";
import { twMerge } from "tailwind-merge";
import Button from "./Button";
import { motion, AnimatePresence } from "motion/react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <header>
            <div className="wrapper py-10 lg:py-12 flex items-center justify-between">
                <div className="shrink-0 cursor-pointer">
                    <img src={siteLogo} alt="shorty logo" />
                </div>

                <div
                    onClick={() => setIsOpen((curr) => !curr)}
                    className="w-6 h-5 flex flex-col justify-between lg:hidden"
                >
                    <span
                        className={twMerge(
                            "block h-0.5 bg-n-g-2 w-full transition-transform duration-500",
                            isOpen && "origin-center -rotate-45 translate-y-2.5"
                        )}
                    ></span>
                    <span
                        className={twMerge(
                            "block h-0.5 bg-n-g-2 w-full transition-opacity duration-500",
                            isOpen && "opacity-0"
                        )}
                    ></span>
                    <span
                        className={twMerge(
                            "block h-0.5 bg-n-g-2 w-full  transition-transform duration-500",
                            isOpen && "origin-center rotate-45 -translate-y-2"
                        )}
                    ></span>
                </div>

                <div className="hidden lg:block flex-1 w-full ml-12">
                    <ul className="flex items-center gap-9 text-sm font-bold text-n-g-2">
                        <li className="hover:text-n-g-3 transition-colors duration-300 cursor-pointer">
                            Features
                        </li>
                        <li className="hover:text-n-g-3 transition-colors duration-300 cursor-pointer">
                            Pricing
                        </li>
                        <li className="hover:text-n-g-3 transition-colors duration-300 cursor-pointer">
                            Resources
                        </li>
                    </ul>
                </div>

                <div className=" hidden lg:flex items-center gap-10">
                    <div>
                        <span className="font-bold text-n-g-2 cursor-pointer hover:text-n-g-3 transition-colors duration-300">
                            Login
                        </span>
                    </div>
                    <div>
                        <Button type="primary-nav">Sign Up</Button>
                    </div>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -100 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -100 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="lg:hidden fixed left-6 right-6 top-24 bg-p-p rounded-xl"
                        >
                            <ul className="flex flex-col items-center gap-7 text-sm font-medium text-white pt-10 pb-8 mx-6 border-b-1 border-n-g-2/50">
                                <li className="text-lg hover:text-n-g-3 transition-colors duration-300 cursor-pointer">
                                    Features
                                </li>
                                <li className="text-lg hover:text-n-g-3 transition-colors duration-300 cursor-pointer">
                                    Pricing
                                </li>
                                <li className="text-lg hover:text-n-g-3 transition-colors duration-300 cursor-pointer">
                                    Resources
                                </li>
                            </ul>
                            <div className="flex flex-col items-center gap-5 px-6 pt-8 pb-10">
                                <div>
                                    <span className="text-lg font-medium text-white">
                                        Login
                                    </span>
                                </div>
                                <div className="w-full">
                                    <Button
                                        type="primary-nav"
                                        className="w-full text-lg py-2.5 font-medium"
                                    >
                                        Sign Up
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};

export default Navbar;
