import React, { useState } from "react";
import Button from "./Button";
import mobileShorten from "/images/bg-shorten-mobile.svg";
import desktopShorten from "/images/bg-shorten-desktop.svg";
import Card from "./Card";
import icon1 from "/images/icon-brand-recognition.svg";
import icon2 from "/images/icon-detailed-records.svg";
import icon3 from "/images/icon-fully-customizable.svg";
import { motion, AnimatePresence } from "motion/react";

const cardDetails = [
    {
        icon: icon1,
        heading: "Brand Recognition",
        description:
            "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
    },
    {
        icon: icon2,
        heading: "Detailed Records",
        description:
            "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    },
    {
        icon: icon3,
        heading: "Fully Customizable",
        description:
            "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    },
];

const API_KEY = "8943b7fd64cd8b1770ff5affa9a9437b";
const SHORTENING_URL = `https://www.shareaholic.com/v2/share/shorten_link?apikey=${API_KEY}&url=`;

const LinkShortening = () => {
    const [input, setInput] = useState("");
    const [urls, setUrls] = useState([]);
    const [error, setError] = useState(false);
    const [copiedIdx, setCopiedIdx] = useState(null);

    async function handleShorten() {
        if (input === "") {
            setError(true);
            return;
        }

        setError(false);

        try {
            const res = await fetch(
                `${SHORTENING_URL}${encodeURIComponent(input)}`
            );
            const data = await res.json();

            if (!data?.data) {
                alert("Shortening failed. Please try again.");
                return;
            }

            const shortened = data.data;

            setUrls((prev) =>
                [...prev, { main: input, short: shortened }].reverse()
            );
            setInput("");
            setCopiedIdx(null);
        } catch (err) {
            console.error("API Error:", err);
            alert("An error occurred while shortening the link.");
        }
    }

    function handleCopy(link, index) {
        navigator.clipboard
            .writeText(link)
            .then(() => setCopiedIdx(index))
            .catch(() => alert("Failed to copy!"));
    }

    return (
        <section className="bg-n-g-1/30">
            <div className="wrapper relative pb-19 lg:pb-28">
                <div className="absolute left-6 right-6 sm:left-16 -top-20 sm:right-16 lg:left-0 lg:right-0 bg-p-p rounded-lg overflow-clip p-6 lg:py-12 lg:px-16">
                    <picture>
                        <source
                            media="(min-width: 40rem)"
                            srcSet={desktopShorten}
                        />
                        <img
                            src={mobileShorten}
                            alt=""
                            className="absolute -right-21 -top-5 z-10 sm:inset-0 w-full"
                        />
                    </picture>
                    <div className="relative z-40 grid gap-4 lg:gap-6 lg:grid-cols-[1fr_188px]">
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            type="text"
                            className={`py-3 px-4 lg:py-5 lg:px-8 outline-0 focus:ring-3 focus:ring-p-b lg:text-[1.2rem] ${
                                error &&
                                "focus:ring-red-400 ring-3 ring-red-400"
                            } bg-white rounded-lg w-full`}
                            placeholder="Shorten a link here..."
                        />
                        {error && (
                            <p className="italic text-red-400 -mt-3">
                                Please add a link
                            </p>
                        )}
                        <div
                            className="w-full lg:col-start-2 lg:row-start-1"
                            onClick={handleShorten}
                        >
                            <Button
                                type="primary-nav"
                                className="rounded-md text-lg w-full lg:h-full"
                            >
                                Shorten It!
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="">
                    <div className="pt-28 flex flex-col gap-4">
                        <AnimatePresence>
                            {urls.length > 0 &&
                                urls.map(({ main, short }, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{
                                            duration: 0.7,
                                            ease: "easeInOut",
                                        }}
                                        className="overflow-clip"
                                    >
                                        <div className="bg-white px-6 py-4.5 rounded-md flex flex-col lg:flex-row items-center gap-8">
                                            <div className="flex flex-col lg:flex-row items-center justify-between flex-1 text-[1.2rem]">
                                                <p className="text-n-g-3">
                                                    {main}
                                                </p>
                                                <p className="text-p-b">
                                                    {short}
                                                </p>
                                            </div>
                                            <div
                                                onClick={() =>
                                                    handleCopy(short, index)
                                                }
                                            >
                                                <Button
                                                    type="primary-nav"
                                                    className={`rounded-md px-8 ${
                                                        copiedIdx === index &&
                                                        "bg-p-p"
                                                    }`}
                                                >
                                                    {copiedIdx === index
                                                        ? "Copied"
                                                        : "Copy"}
                                                </Button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                        </AnimatePresence>
                    </div>
                </div>

                <div className="text-center pt-15 lg:pt-24 sm:px-20 lg:px-0">
                    <h2 className="text-[1.65rem] lg:text-[2.35rem] text-n-g-3 font-bold lg:w-[550px] lg:mx-auto">
                        Advanced Statistics
                    </h2>
                    <p className="mt-6 lg:mt-2 text-[1rem] lg:text-[1.15rem] leading-[1.6] text-n-g-2 lg:w-[550px] lg:mx-auto">
                        Track how your links are performing across the web with
                        our advanced statistics dashboard.
                    </p>
                    <div className="relative mt-24 lg:mt-25 grid lg:grid-cols-3 gap-24 lg:gap-8">
                        <div className="absolute w-2 h-full lg:w-full lg:h-2 -translate-x-1/2 left-1/2 bg-p-b lg:top-1/2 -translate-y-7"></div>
                        {cardDetails.map(
                            ({ icon, heading, description }, index) => (
                                <Card
                                    key={index}
                                    icon={icon}
                                    heading={heading}
                                    description={description}
                                    className={
                                        index === 1
                                            ? "lg:mt-12"
                                            : index === 2
                                            ? "lg:mt-24"
                                            : ""
                                    }
                                />
                            )
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LinkShortening;
