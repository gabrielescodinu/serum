import React from "react";

const Stats = () => {
    const statsContent = {
        title: "The quick, brown fox jumps over a lazy dog",
        subtitle: "Brand new",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.",
        stats: [
            {
                value: "82%",
                description: "Lorem ipsum dolor adipiscing sit amet, consectetur elit.",
            },
            {
                value: "106.5K",
                description: "Lorem ipsum elit consectetur sit amet, adipiscing dolor.",
            },
        ],
    };

    return (
        <section className="bg-secondary">
            <div className="px-4 py-32 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 relative">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <div>
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-primary uppercase">{statsContent.subtitle}</p>
                    </div>
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-100 sm:text-4xl md:mx-auto">
                        <span className="relative inline-block">
                            <svg viewBox="0 0 52 24" fill="currentColor" className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                                <defs>
                                    <pattern id="d5589eeb-3fca-4f01-ac3e-983224745704" x="0" y="0" width=".135" height=".30">
                                        <circle cx="1" cy="1" r=".7"></circle>
                                    </pattern>
                                </defs>
                                <rect fill="url(#d5589eeb-3fca-4f01-ac3e-983224745704)" width="52" height="24"></rect>
                            </svg>
                            <span className="relative">{statsContent.title}</span>
                        </span>
                    </h2>
                    <p className="text-base text-gray-300 md:text-lg">{statsContent.description}</p>
                </div>
                <div className="relative w-full p-px mx-auto mb-4 overflow-hidden transition-shadow duration-300 rounded lg:mb-8 lg:max-w-4xl group shadow-xl">
                    <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"></div>
                    <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100"></div>
                    <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"></div>
                    <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100"></div>
                    <div className="relative flex flex-col items-center h-full py-10 duration-300 bg-white/[.075] rounded-sm transition-color sm:items-stretch sm:flex-row">
                        {statsContent.stats.map((stat, index) => (
                            <div key={index} className="px-12 py-8 text-center">
                                <h6 className="text-4xl font-bold text-primary sm:text-5xl">{stat.value}</h6>
                                <p className="text-center md:text-base text-gray-300">{stat.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <p className="mx-auto mb-4 text-gray-300 sm:text-center lg:max-w-2xl lg:mb-6 md:px-16">{statsContent.description}</p>
                <div className="absolute inset-0 max-w-md my-auto mx-auto h-72 blur-[118px]" style={{ background: "linear-gradient(#14b8a642, #14b8a61a)" }}></div>
            </div>
        </section>
    );
};

export default Stats;
