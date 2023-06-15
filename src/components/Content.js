import React from "react";

const Content = () => {
    const contentData = [
        {
            icon: (
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
            ),
            title: "Shooting Stars",
            description: "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.",
            link: "Learn More",
            url: "#",
        },
        {
            icon: (
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
            ),
            title: "The Catalyzer",
            description: "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.",
            link: "Learn More",
            url: "#",
        },
        {
            icon: (
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                </svg>
            ),
            title: "Neptune",
            description: "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.",
            link: "Learn More",
            url: "#",
        },
    ];

    return (
        <section className="text-gray-600 body-font py-32 relative">
            <div className="container px-5 mx-auto flex flex-wrap items-center">
                <div className="lg:w-1/2 w-full mb-10 lg:mb-0 overflow-hidden rounded-full shadow-primary shadow-2xl">
                    <img alt="feature" className="object-cover object-center h-full w-full" src="https://media.discordapp.net/attachments/1053327836695511130/1118849161001963600/sletchertek_An_isometric_image_of_an_computer_in_the_style_of_w_bc86918e-d37a-4bde-af23-f6e393fa6a37.png?width=1080&height=1080" />
                </div>
                <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                    {contentData.map((content, index) => (
                        <div key={index} className="flex flex-col mb-10 lg:items-start items-center">
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-100 shadow-primary shadow-2xl text-primary mb-5">{content.icon}</div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">{content.title}</h2>
                                <p className="leading-relaxed text-base">{content.description}</p>
                                <a href={content.url} className="mt-3 text-primary hover:text-gray-500 inline-flex items-center">
                                    {content.link}
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="absolute inset-0 max-w-xl mx-auto my-auto h-72 blur-[118px]" style={{ background: "linear-gradient(#6366f142, #6366f11a)" }}></div>
        </section>
    );
};

export default Content;
