import React from "react";
import bgImg from "/images/illustration-working.svg";
import Button from "./Button";

const Hero = () => {
    return (
        <section className="overflow-x-clip">
            <div className="wrapper lg:grid lg:grid-cols-2 pb-41 lg:pb-56">
                <div className="relative lg:col-start-2">
                    <img
                        src={bgImg}
                        alt=""
                        className="absolute scale-142 -right-20 lg:top-23 lg:-right-53 top-12 -z-10"
                    />
                </div>
                <div className="pt-90 sm:pt-150 lg:pt-24 sm:w-[580px] sm:mx-auto lg:col-start-1">
                    <h1 className="text-center lg:text-start text-[2.5rem] lg:text-[5rem] leading-[1.2] lg:leading-[1.15] lg:tracking-tight font-bold text-n-g-3">
                        More than just shorter links
                    </h1>
                    <p className="text-center lg:text-start text-n-g-2 text-[1.1rem] lg:text-[1.3rem] lg:w-[40ch] leading-[1.7] mt-4 lg:mt-0 lg:tracking-wide">
                        Build your brand’s recognition and get detailed insights
                        on how your links are performing.
                    </p>
                    <div className="flex items-center justify-center lg:justify-start mt-8">
                        <Button type="primary-nav" className="text-[1.2rem] px-11">
                            Get Started
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
