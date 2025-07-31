import React from "react";
import Button from "./Button";
import boostMob from "/images/bg-boost-mobile.svg";
import boostDesk from "/images/bg-boost-desktop.svg";

const Boost = () => {
    return (
        <section className="bg-p-p relative">
            <div className="wrapper pt-24 lg:pt-14 pb-22 lg:pb-13 relative z-40">
                <h2 className="text-center text-[1.65rem] lg:text-[2.38rem] text-white font-bold">
                    Boost your links today
                </h2>
                <div className="flex items-center justify-center mt-4 lg:mt-6">
                    <Button
                        type="primary-nav"
                        className="px-10 py-4 text-[1.2rem]"
                    >
                        Get Started
                    </Button>
                </div>
            </div>
            <div>
                <picture>
                    <source media="(min-width: 40rem)" srcset={boostDesk} />
                    <img src={boostMob} alt="" className="absolute top-0 bottom-0 left-0 right-0 w-full h-full z-10" />
                </picture>
            </div>
        </section>
    );
};

export default Boost;
