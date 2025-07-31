import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LinkShortening from "./components/LinkShortening";
import Boost from "./components/Boost";
import Footer from "./components/Footer";

const App = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <LinkShortening />
            <Boost />
            <Footer />
        </>
    );
};

export default App;
