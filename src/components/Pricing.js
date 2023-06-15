import React from 'react';

const pricingData = [
    {
        title: 'Personal use',
        price: 'Free',
        features: [
            '10 deploys per day',
            '10 GB of storage',
            'Unlimited domains',
            'SSL Certificates'
        ],
        button: 'Start for free',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium',
        isPopular: false,
    },
    {
        title: 'For your team',
        price: '$39',
        features: [
            'Unlimited deploys',
            'Up to 10 Team Members',
            '100 GB of storage',
            '24/7 support',
            'Global CDN'
        ],
        button: 'Get started',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium',
        isPopular: true,
    }
];

const Pricing = () => {
    return (
        <section className="bg-secondary">
            <div className="px-4 py-32 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 relative">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <div>
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-primary uppercase">Brand new</p>
                    </div>
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-100 sm:text-4xl md:mx-auto">
                        <span className="relative inline-block">
                            <svg viewBox="0 0 52 24" fill="currentColor" className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                                <defs>
                                    <pattern id="ace59d72-08d5-4850-b9e4-d9d0b86c0525" x="0" y="0" width=".135" height=".30">
                                        <circle cx="1" cy="1" r=".7"></circle>
                                    </pattern>
                                </defs>
                                <rect fill="url(#ace59d72-08d5-4850-b9e4-d9d0b86c0525)" width="52" height="24"></rect>
                            </svg>
                            <span className="relative">Transparent</span>
                        </span> pricing. Pay as you grow.
                    </h2>
                    <p className="text-base text-gray-400 md:text-lg">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.</p>
                </div>
                <div className="grid max-w-md gap-10 row-gap-5 sm:row-gap-10 lg:max-w-screen-md lg:grid-cols-2 sm:mx-auto">
                    {pricingData.map((plan, index) => (
                        <div className="flex flex-col justify-between p-5 bg-white/[.075] rounded shadow-xl" key={index}>
                            <div className="mb-6">
                                <div className="flex items-center justify-between pb-6 mb-6 border-b">
                                    <div>
                                        <p className="text-sm font-bold tracking-wider uppercase text-gray-400">{plan.title}</p>
                                        <p className="text-5xl font-extrabold text-gray-100">{plan.price}</p>
                                    </div>
                                    <div className="flex items-center justify-center w-24 h-24 rounded-full bg-gray-300">
                                        <svg className="w-10 h-10 text-gray-800" viewBox="0 0 24 24" strokeLinecap="round" strokeWidth="2">
                                            <path d="M12,7L12,7 c-1.657,0-3-1.343-3-3v0c0-1.657,1.343-3,3-3h0c1.657,0,3,1.343,3,3v0C15,5.657,13.657,7,12,7z" fill="none" stroke="currentColor"></path>
                                            <path d="M15,23H9v-5H7v-6 c0-1.105,0.895-2,2-2h6c1.105,0,2,0.895,2,2v6h-2V23z" fill="none" stroke="currentColor"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <p className="mb-2 font-bold tracking-wide text-gray-200">Features</p>
                                    <ul className="space-y-2">
                                        {plan.features.map((feature, index) => (
                                            <li className="flex items-center" key={index}>
                                                <div className="mr-2">
                                                    <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" strokeLinecap="round" strokeWidth="2">
                                                        <polyline fill="none" stroke="currentColor" points="6,12 10,16 18,8"></polyline>
                                                        <circle cx="12" cy="12" fill="none" r="11" stroke="currentColor"></circle>
                                                    </svg>
                                                </div>
                                                <p className="font-medium text-gray-400">{feature}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div>
                                {plan.isPopular && (
                                    <a href="/" className="inline-flex items-center justify-center w-full h-12 px-6 mb-4 font-medium tracking-wide text-white transition duration-200 bg-primary rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none">{plan.button}</a>
                                )}
                                {!plan.isPopular && (
                                    <a href="/" className="inline-flex items-center justify-center w-full h-12 px-6 mb-4 font-medium tracking-wide text-white transition duration-200 bg-gray-600 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none">{plan.button}</a>
                                )}
                                <p className="text-sm text-gray-200">{plan.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="absolute inset-0 max-w-lg my-auto mx-auto h-72 blur-[118px]" style={{ background: 'linear-gradient(#14b8a642, #14b8a61a)' }}></div>
            </div>
        </section>
    );
};

export default Pricing;
