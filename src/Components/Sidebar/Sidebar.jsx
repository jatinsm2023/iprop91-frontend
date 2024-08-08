import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Linklist = {
    Concierge: {
        icon: 'bx bx-home',
        link: '/conceirge'
    },
    Safe: {
        icon: 'bx bx-music',
        link: '/safe'
    },
    Family: {
        icon: 'bx bx-drink',
        link: '/family'
    },
    'Real Insight': {
        icon: 'bx bx-shopping-bag',
        link: '/realinsight'
    },
    'Buy/Sell/Lease': {
        icon: 'bx bx-chat',
        link: '/buyselllease'
    },
    Lend: {
        icon: 'bx bx-user',
        link: '/lend'
    },
    Advice: {
        icon: 'bx bx-bell',
        link: '/advise'
    },
    Logout: {
        icon: 'bx bx-log-out',
        link: '/logout'
    }
};

const Sidebar = () => {
    const [activeLink, setActiveLink] = useState('/conceirge');
    const location = useLocation();

    const addActive = (link) => {
        setActiveLink(link);
    };

    return (
        <>
            <div className="sticky h-[100vh] flex flex-row shadow-md left-0 bottom-0 top-0 ">
                <div className="flex flex-col w-52 bg-white rounded-r-3xl overflow-hidden">
                    <div className="flex flex-row items-center justify-center h-12 text-gray-500 hover:text-gray-800 border m-2 rounded-xl shadow-sm bg-gold">
                        <h1 className="text-xl uppercase text-indigo-500">Logo</h1>
                    </div>
                    <ul className="flex flex-col py-4 ">
                        {Object.keys(Linklist).map((key, index) => (
                            <li key={index}>
                                <Link
                                    to={Linklist[key].link}
                                    className={`flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-black border m-2 mx-4 rounded-xl shadow-sm links ${
                                        location.pathname === Linklist[key].link ? 'border-gold border-b-4' : ''
                                    } hover:bg-gold hover:text-white`}
                                    onClick={() => addActive(Linklist[key].link)}
                                >
                                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg  hover:!text-white ">
                                        <i className={Linklist[key].icon}></i>
                                    </span>
                                    <span className="text-sm font-medium">{key}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
