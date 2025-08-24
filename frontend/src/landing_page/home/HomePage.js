import React from "react";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Trust from "./Trust";
import OpenAccount from "../OpenAccount";


function HomePage() {
    return (
        <>
            <Hero />
            <Pricing />
            <Trust />
            <OpenAccount />
        </>
    );
}

export default HomePage;