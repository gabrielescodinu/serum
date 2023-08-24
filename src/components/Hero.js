import React from 'react';

const Hero = () => {
    const heroData = {
        subtitle: 'Very proud to introduce',
        title: 'Revolutionary way to build the web',
        startNowButtonLabel: 'Start now',
        takeTourButtonLabel: 'Take tour',
        socialLinks: [
            {
                icon: 'https://cdn.discordapp.com/attachments/1053327836695511130/1117746972103293442/Gabriele_digital_art_purple_colors_drawing_4e3b6a74-9765-47f0-9323-eb1eaf99b9f4.png',
                url: '#',
            },
            {
                icon: 'https://cdn.discordapp.com/attachments/1053327836695511130/1117747120255891458/Gabriele_digital_art_blue_color_drawing_b4ebc2f5-0e1e-4b6c-9bc4-7d3f9fd26ea7.png',
                url: '#',
            },
            {
                icon: 'https://cdn.discordapp.com/attachments/1053327836695511130/1117747251378437636/Gabriele_digital_art_purple_colors_drawing_a86e3c07-47d6-48ef-98c2-4685ea7ab104.png',
                url: '#',
            },
            {
                icon: 'https://cdn.discordapp.com/attachments/1053327836695511130/1117747329442289664/Gabriele_digital_art_blue_color_drawing_5c6f47f5-9865-4b66-af5f-81223e277aec.png',
                url: '#',
            },
        ],
        backgroundImage: 'https://media.discordapp.net/attachments/1053327836695511130/1118616226160193707/Gabriele_An_isometric_image_of_an_computer_in_the_style_of_whit_e7d6c129-bb59-4bb3-93a2-a0fd733f8bb6.png?width=2506&height=1404',
        photoCredit: 'Photo by Fakurian Design',
    };

    return (
        <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 relative">
            <div className="grid gap-10 lg:grid-cols-2 min-h-screen py-32">
                <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
                    <div className="max-w-xl mb-6">
                        <h2 className="ax-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
                            <span className="text-primary">Find your</span>
                            <br></br>
                            <span className="text-gray-800">business online</span>
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. explicabo.</p>
                    </div>
                    <div>
                        <a
                            href="/"
                            aria-label=""
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-white py-4 px-8 bg-primary hover:bg-gray-700 shadow-primary shadow-2xl rounded-lg"
                        >
                            {' '}
                            Learn more{' '}
                            <svg
                                className="inline-block w-3 ml-2"
                                fill="currentColor"
                                viewBox="0 0 12 12"
                            >
                                {' '}
                                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />{' '}
                            </svg>{' '}
                        </a>
                    </div>
                </div>
                <div className="flex items-center justify-center -mx-4 lg:pl-8">
                    <div className="flex flex-col items-end px-3">
                        <img
                            className="object-cover mb-6 rounded shadow-primary shadow-2xl h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                            src="https://media.discordapp.net/attachments/1053327836695511130/1118642616750321875/Gabriele_An_isometric_illustration_of_a_data_business_in_the_st_5a0a86ac-9e7e-4dcc-a5e3-a4a9c617945e.png?width=1196&height=1196"
                            alt=""
                        />
                        <img
                            className="object-cover w-20 h-20 rounded shadow-primary shadow-2xl sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                            src="https://media.discordapp.net/attachments/1053327836695511130/1118642622932717758/Gabriele_An_isometric_illustration_of_a_data_business_in_the_st_41fb6b78-e58f-4588-90a7-278c1a44c6e4.png?width=1196&height=1196"
                            alt=""
                        />
                    </div>
                    <div className="px-3">
                        <img
                            className="object-cover w-40 h-40 rounded shadow-primary shadow-2xl sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                            src="https://media.discordapp.net/attachments/1053327836695511130/1118642633938575532/Gabriele_An_isometric_illustration_of_a_data_business_in_the_st_1ab7da6e-c3c1-4b5a-93c7-48bd1b2434be.png?width=1196&height=1196"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div
                className="absolute inset-0 max-w-xl my-auto mr-auto h-72 blur-[118px] pointer-events-none"
                style={{ background: 'linear-gradient(#6366f142, #6366f11a)' }}
            ></div>
        </div>
    );
};

export default Hero;
