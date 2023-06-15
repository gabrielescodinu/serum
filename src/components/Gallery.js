import React from "react";

import Image1 from "../assets/image3.webp";
import Image2 from "../assets/image2.webp";

const Gallery = () => {
    const galleryData = [
        {
            category: "Business",
            title: "Fractals becomes an official Instagram Marketing Partner",
            description: "Great news we're eager to share.",
            author: "Aaron Larsson",
            date: "Feb 15, 2021",
            image: Image1,
            link: "#",
            authorImage: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
        },
        {
            category: "Announcements",
            title: "Announcing a free plan for small teams",
            description: "At Wake, our mission has always been focused on bringing openness.",
            author: "Hanna Wolfe",
            date: "Feb 4, 2021",
            image: Image2,
            link: "#",
            authorImage: "https://images.unsplash.com/photo-1669720229052-89cda125fc3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
        },
    ];

    return (
        <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 py-32 mx-auto">
            <div className="grid lg:grid-cols-2 gap-6">
                {galleryData.map((item, index) => (
                    <a key={index} className="group sm:flex" href={item.link}>
                        <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[200px] sm:w-[250px] sm:h-[350px]">
                            <img
                                className="w-full h-full absolute top-0 left-0 object-cover shadow-xl transition duration-300 ease-in-out group-hover:scale-105"
                                src={item.image}
                                alt={item.title}
                            />
                        </div>
                        <div className="grow">
                            <div className="p-4 flex flex-col h-full sm:p-6">
                                <div className="mb-3">
                                    <p className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-white/[.075] text-gray-100">
                                        {item.category}
                                    </p>
                                </div>
                                <h3 className="text-lg sm:text-2xl font-semibold text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
                                    {item.title}
                                </h3>
                                <p className="mt-2 text-gray-600 dark:text-gray-400">{item.description}</p>
                                <div className="mt-5 sm:mt-auto">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="h-[2.875rem] w-[2.875rem] rounded-full"
                                                src={item.authorImage}
                                                alt={item.author}
                                            />
                                        </div>
                                        <div className="ml-2.5 sm:ml-4">
                                            <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                                                {item.author}
                                            </h4>
                                            <p className="text-xs text-gray-500">{item.date}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
