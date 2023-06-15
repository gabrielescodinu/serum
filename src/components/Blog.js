import React from "react";

const Blog = () => {
    const blogData = [
        {
            image: "https://media.discordapp.net/attachments/1053327836695511130/1118642616750321875/Gabriele_An_isometric_illustration_of_a_data_business_in_the_st_5a0a86ac-9e7e-4dcc-a5e3-a4a9c617945e.png?width=1196&height=1196",
            date: "13 Jul 2020",
            title: "Diving to the deep",
            description: "Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni voluptatem doloremque.",
            likes: "7.4K",
            comments: "81",
            link: "#",
        },
        {
            image: "https://media.discordapp.net/attachments/1053327836695511130/1118642622932717758/Gabriele_An_isometric_illustration_of_a_data_business_in_the_st_41fb6b78-e58f-4588-90a7-278c1a44c6e4.png?width=1196&height=1196",
            date: "4 Nov 2020",
            title: "Conquer the World",
            description: "Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni voluptatem doloremque.",
            likes: "7.4K",
            comments: "81",
            link: "#",
        },
        {
            image: "https://media.discordapp.net/attachments/1053327836695511130/1118642633938575532/Gabriele_An_isometric_illustration_of_a_data_business_in_the_st_1ab7da6e-c3c1-4b5a-93c7-48bd1b2434be.png?width=1196&height=1196",
            date: "28 Dec 2020",
            title: "Explore the beautiful",
            description: "Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni voluptatem doloremque.",
            likes: "7.4K",
            comments: "81",
            link: "#",
        },
    ];

    return (
        <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 py-32 relative">
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
                        Latest from the Blog
                    </span>
                </h2>
                <p className="text-base text-gray-500 md:text-lg">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.</p>
            </div>

            <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                {blogData.map((blog, index) => (
                    <a href={blog.link} aria-label="Article" className="relative">
                        <div key={index} className="overflow-hidden shadow-primary shadow-2xl duration-300 bg-white rounded-lg group">
                            <div className="relative pt-[70%] overflow-hidden">
                                <img className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src={blog.image} alt="Description" />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/25 to-transparent"></div>
                            </div>{" "}
                            <div className="p-5">
                                <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">{blog.date}</p>
                                <div className="inline-block mb-3 text-gray-800 transition-colors duration-200 group-hover:text-primary">
                                    <p className="text-2xl font-bold leading-5">{blog.title}</p>
                                </div>
                                <p className="mb-4 text-gray-500">{blog.description}</p>
                                <div className="flex space-x-4">
                                    <div className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group">
                                        <div className="mr-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700">
                                                <polyline points="6 23 1 23 1 12 6 12" fill="none" strokeMiterlimit="10"></polyline>
                                                <path d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z" fill="none" stroke="currentColor" strokeMiterlimit="10"></path>
                                            </svg>
                                        </div>
                                        <p className="font-semibold">{blog.likes}</p>
                                    </div>
                                    <div className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group">
                                        <div className="mr-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700">
                                                <polyline points="23 5 23 18 19 18 19 22 13 18 12 18" fill="none" strokeMiterlimit="10"></polyline>
                                                <polygon points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2" fill="none" stroke="currentColor" strokeMiterlimit="10"></polygon>
                                            </svg>
                                        </div>
                                        <p className="font-semibold">{blog.comments}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>

            <div className="absolute inset-0 max-w-xl mx-auto h-72 blur-[118px]" style={{ background: "linear-gradient(#6366f142, #6366f11a)" }}></div>
        </div>
    );
};

export default Blog;
