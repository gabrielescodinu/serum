import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import Logo from '../assets/logo.svg';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleHamburgerClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isMenuOpen]);

    const menuItems = [
        {
            id: 1,
            name: 'Home',
            url: '#',
            subItems: [
                { id: '1.1', name: 'Account', url: '#' },
                { id: '1.2', name: 'Support', url: '#' },
                { id: '1.3', name: 'Contacts', url: '#' }
            ]
        },
        {
            id: 2,
            name: 'Product',
            url: '#',
            subItems: [
                { id: '2.1', name: 'Catalogue', url: '#' },
                { id: '2.2', name: 'New Arrivals', url: '#' },
                { id: '2.3', name: 'Best Sellers', url: '#' }
            ]
        },
        {
            id: 3,
            name: 'Features',
            url: '#',
            subItems: [
                { id: '3.1', name: 'Updates', url: '#' },
                { id: '3.2', name: 'Beta', url: '#' },
                { id: '3.3', name: 'V1.0', url: '#' }
            ]
        },
        {
            id: 4,
            name: 'Pricing',
            url: '#',
            subItems: [
            ]
        },
        {
            id: 5,
            name: 'About',
            url: '#',
            subItems: [
                { id: '5.1', name: 'Company', url: '#' },
                { id: '5.2', name: 'Team', url: '#' },
                { id: '5.3', name: 'Careers', url: '#' }
            ]
        },
    ];

    return (
        <header className='p-4 bg-secondary'>
            {/* mobile menu */}
            <div
                id="menu-mobile"
                className={`menu-mobile-class -m-8 p-8 fixed w-screen h-screen bg-gray-800/[.95] z-20 transform transition-transform duration-300 flex flex-col justify-center 
                ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <ul className="space-y-8 text-base">
                    {menuItems.map((item) => (
                        <li key={item.id}>
                            <div className="relative group">
                                <a href={item.url} className="font-medium tracking-wide text-gray-800 transition-colors duration-200 hover:text-primary">
                                    <div className="flex items-center justify-between w-fit py-1">
                                        {item.name}
                                        {item.subItems && item.subItems.length > 0 && <span> <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" fill='currentColor' viewBox="0 -960 960 960"><path d="M480-345 240-585l43-43 197 198 197-197 43 43-240 239Z" /></svg></span>}
                                    </div>
                                </a>
                                {item.subItems && item.subItems.length > 0 && (
                                    <div className="hidden group-hover:block absolute left-0 w-full bg-gray-900 rounded-lg p-2 text-sm z-10">
                                        <div className="flex flex-col">
                                            {item.subItems.map((subItem) => (
                                                <div key={subItem.id} className="px-1 py-2">
                                                    <a href={subItem.url} className="block px-4 py-2 rounded transition duration-200 text-gray-800 hover:bg-primary hover:text-white">{subItem.name}</a>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </li>
                    ))}

                </ul>
                <ul className="space-y-8 mt-8">
                    <li>
                        <button className="Sign up-button inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 shadow-md bg-primary hover:bg-gray-500 rounded-lg" aria-label="Sign up" title="Sign up"> Sign up </button>
                    </li>
                </ul>
            </div>

            {/* desktop menu */}
            <nav>
                <nav className="z-30 relative max-w-screen-xl mx-auto md:px-8">
                    <div className="flex justify-between items-center absolute w-full left-0 lg:px-8">
                        <div className="z-30">
                            <img src={Logo} alt="logo" className="w-20 h-auto" />
                        </div>
                        <ul className="items-center hidden space-x-8 lg:flex text-base">
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    <div
                                        aria-label={item.name}
                                        title={item.name}
                                        className="font-medium cursor-pointer tracking-wide text-gray-600 transition-colors duration-200 hover:text-primary group relative"
                                    >
                                        <div className='flex items-center py-4'>
                                            {item.name}
                                            {item.subItems && item.subItems.length > 0 && <span> <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" fill='currentColor' viewBox="0 -960 960 960"><path d="M480-345 240-585l43-43 197 198 197-197 43 43-240 239Z" /></svg></span>}
                                        </div>
                                        {item.subItems && item.subItems.length > 0 && (
                                            <div className="hidden group-hover:block absolute w-40 bg-gray-800/[.85] rounded-lg p-2 text-sm">
                                                <ul>
                                                    {item.subItems.map((subItem, subIndex) => (
                                                        <li key={`${index}.${subIndex}`}>
                                                            <a href={subItem.url} className="block py-2.5 px-4 rounded transition duration-200 text-gray-300 hover:bg-primary hover:text-white">{subItem.name}</a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </li>
                            ))}


                        </ul>
                        <ul className="items-center hidden space-x-8 lg:flex">
                            <li>
                                <button className="Sign up-button inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 shadow-primary shadow-2xl bg-primary hover:bg-gray-500 rounded-lg" aria-label="Sign up" title="Sign up"> Sign up </button>
                            </li>
                        </ul>
                        <div id="hamburger" className='lg:hidden' onClick={handleHamburgerClick}>
                            <svg
                                id="hamburger-icon"
                                className={`text-gray-300 ${isMenuOpen ? 'hidden' : ''}`}
                                xmlns="http://www.w3.org/2000/svg"
                                height="40"
                                viewBox="0 -960 960 960"
                                width="40"
                            >
                                <path fill="currentColor" d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
                            </svg>
                            <svg
                                id="close-icon"
                                className={`close-icon-class ${isMenuOpen ? 'text-gray-300' : 'hidden'}`}
                                onClick={handleHamburgerClick}
                                xmlns="http://www.w3.org/2000/svg"
                                height="40"
                                viewBox="0 -960 960 960"
                                width="48"
                            >
                                <path fill="currentColor" d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
                            </svg>
                        </div>

                    </div>
                </nav>
            </nav>
        </header>
    );
}

export default Header;