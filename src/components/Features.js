import React from "react";
import CheckIcon from "../assets/check.svg";

const Features = () => {
    const content = {
        title: "Strumenti collaborativi per progettare l'esperienza utente",
        description: "Utilizza i nostri strumenti per esplorare le tue idee e rendere realtà la tua visione. Poi condividi facilmente il tuo lavoro.",
        items: [
            {
                icon: CheckIcon,
                text: "Meno routine, più creatività",
            },
            {
                icon: CheckIcon,
                text: "Centinaia di migliaia di risparmi",
            },
            {
                icon: CheckIcon,
                text: "Gestisci i budget in modo efficiente",
            },
        ],
        image1: "",
    };

    return (
        <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 py-32 relative">
            <div className="mx-auto sm:text-center lg:max-w-2xl">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <div>
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-gray-600 uppercase rounded-full bg-teal-accent-400">Brand new</p>
                    </div>
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-800 sm:text-4xl md:mx-auto">
                        <span className="relative inline-block">
                            <svg viewBox="0 0 52 24" fill="currentColor" className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                                <defs>
                                    <pattern id="5dc90b42-5ed4-45a6-8e63-2d78ca9d3d95" x="0" y="0" width=".135" height=".30">
                                        <circle cx="1" cy="1" r=".7" />
                                    </pattern>
                                </defs>
                                <rect fill="url(#5dc90b42-5ed4-45a6-8e63-2d78ca9d3d95)" width="52" height="24" />
                            </svg>
                            <span className="relative">The</span>
                        </span>{" "}
                        quick, brown fox jumps over a lazy dog
                    </h2>
                    <p className="text-base text-gray-500 md:text-lg">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.</p>
                </div>
                <div className="mb-4 transition-shadow duration-300 hover:shadow-xl lg:mb-12">
                    <img className="object-cover w-full h-56 rounded shadow-primary shadow-2xl sm:h-64 md:h-80 lg:h-96" src="https://media.discordapp.net/attachments/1053327836695511130/1118838241827762257/Gabriele_An_isometric_illustration_of_a_data_business_in_the_st_a247b4cd-3338-4f0c-abb1-48214c72b1c3.png?width=1794&height=1196" alt="" />
                </div>
                <p className="max-w-xl mb-12 text-base text-gray-700 sm:mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris aliquip ex ea.</p>
                <a href="/" aria-label="" className="inline-flex items-center font-semibold transition-colors duration-200 bg-primary text-white hover:bg-gray-700 px-8 py-4 rounded-lg shadow-primary shadow-2xl">
                    {" "}
                    Learn more{" "}
                    <svg className="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
                        {" "}
                        <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />{" "}
                    </svg>{" "}
                </a>
            </div>
            <div className="absolute inset-0 max-w-xl mx-auto h-72 blur-[118px]" style={{ background: "linear-gradient(#6366f142, #6366f11a)" }}></div>
        </div>
    );
};

export default Features;
