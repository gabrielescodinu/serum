import React from "react";

const Stats = () => {
    const stats = [
        {
            data: "35K",
            desc: "Customers consectetur adipiscing elit.",
        },
        {
            data: "10K+",
            desc: "Downloads efficitur id eu nulla facilisis turpis",
        },
        {
            data: "40+",
            desc: "Countries maximus sit amet auctor sed,",
        },
        {
            data: "30M+",
            desc: "Total revenue consectetur adipiscing elit",
        },
    ];

    return (
        <section className="py-32">
            <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-800 sm:text-4xl md:mx-auto">
                        <span className="relative inline-block">
                            <svg viewBox="0 0 52 24" fill="currentColor" className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                                <defs>
                                    <pattern id="5dc90b42-5ed4-45a6-8e63-2d78ca9d3d95" x="0" y="0" width=".135" height=".30">
                                        <circle cx="1" cy="1" r=".7" />
                                    </pattern>
                                </defs>
                                <rect fill="url(#5dc90b42-5ed4-45a6-8e63-2d78ca9d3d95)" width="52" height="24" />
                            </svg>
                            Our customers are always happy
                        </span>
                    </h2>
                    <p className="text-base text-gray-500 md:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis sollicitudin quam ut tincidunt.</p>
                </div>
                <div className="mt-12">
                    <ul className="flex-wrap gap-x-12 gap-y-10 items-center space-y-8 sm:space-y-0 sm:flex xl:justify-center">
                        {stats.map((item, idx) => (
                            <li key={idx} className="sm:max-w-[15rem]">
                                <h4 className="text-4xl text-primary font-extrabold">{item.data}</h4>
                                <p className="mt-3 text-gray-600 font-medium">{item.desc}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="absolute inset-0 max-w-xl mx-auto h-72 blur-[118px]" style={{ background: "linear-gradient(#6366f142, #6366f11a)" }}></div>
            </div>
        </section>
    );
};

export default Stats;
