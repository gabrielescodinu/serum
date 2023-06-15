import React from 'react';
import Partner1 from '../assets/partner1.svg';
import Partner2 from '../assets/partner2.svg';
import Partner3 from '../assets/partner3.svg';
import Partner4 from '../assets/partner4.svg';
import Partner5 from '../assets/partner5.svg';
import Partner6 from '../assets/partner6.svg';

const partnersData = [
    {
        id: 1,
        name: 'Partner 1',
        image: Partner1,
    },
    {
        id: 2,
        name: 'Partner 2',
        image: Partner2,
    },
    {
        id: 3,
        name: 'Partner 3',
        image: Partner3,
    },
    {
        id: 4,
        name: 'Partner 4',
        image: Partner4,
    },
    {
        id: 5,
        name: 'Partner 5',
        image: Partner5,
    },
    {
        id: 6,
        name: 'Partner 6',
        image: Partner6,
    },
];

const Partners = () => {
    return (
        <section className="bg-secondary">
            <div className="max-w-[85rem] px-4 py-32 sm:px-6 lg:px-8 mx-auto relative">
                <div className="w-2/3 mx-auto text-center mb-12">
                    <h2 className="mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-primary sm:text-4xl md:mx-auto">
                        Trusted by Open Source <br />{' '}
                        <span className="text-gray-300">enterprise, and more than 99,000 of you</span>
                    </h2>
                </div>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-x-6">
                    {partnersData.map((partner) => (
                        <div key={partner.id} className="text-center">
                            <img src={partner.image} alt={partner.name} className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto text-gray-500" />
                        </div>
                    ))}
                </div>
                <div className="absolute inset-0 max-w-lg my-auto mx-auto h-72 blur-[118px]" style={{ background: 'linear-gradient(#14b8a642, #14b8a61a)' }}></div>
            </div>
        </section>
    );
};

export default Partners;
