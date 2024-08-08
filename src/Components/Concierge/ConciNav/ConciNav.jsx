import React, { useState } from 'react'
import GoldButton from '../../CompoCards/GoldButton/Goldbutton'
import MyProperty from './Myproperty';
import RelationsMan from './RelationsMan';
import LegalSupport from './LegalSupport';
import FinanceAssis from './FinanceAssis';
import PropertyMan from './PropertyMan';

let LinkList = [
    {
        title: "My Properties",
        idnum: 1,
    },
    {
        title: "Relationship Manager",
        idnum: 2,
    },
    {
        title: "Property Management",
        idnum: 3,
    },
    {
        title: "Legal Support",
        idnum: 4,
    },
    {
        title: "Finance Assistance",
        idnum: 5,
    }
]

export default function ConciNav() {
    const [idnum, setidnum] = useState(1);
    const addActive = (e) => {
        const links = document.querySelectorAll('.conceirgelinks');
        links.forEach((link) => {
            link.classList.remove('border-gold');
            link.classList.remove('border-2');
        });
        e.currentTarget.classList.add('border-gold');
        e.currentTarget.classList.add('border-2');
    }

    return (
        <>
            <div className="w-full  bg-white flex flex-col rounded-xl"  >
                <header className="w-full p-6  border-b border-gray-200">
                    <div className="container">
                        <h1 className="text-2xl font-bold text-black">iProp91 <span className="text-primary">Concierge</span></h1>
                        <p className="text-gray-500 mt-2 text-sm">
                            Upload all your real estate documents, applicable at different stages of ownership in an encrypted safe, accessible at all times
                        </p>
                    </div>
                </header>
                <div className="flex justify-end">

                    <div className="w-64  mr-10">
                        <GoldButton
                            btnname={"Add New Property"}
                            bgcolor={"bg-gold"}
                        ></GoldButton>
                    </div>
                </div>
                <nav className="mt-6">
                    <ul className="flex flex-row">
                        {LinkList.map((link, index) => (
                            <li key={index} className={`py-4 px-4 m-2 rounded-lg conceirgelinks cursor-pointer ${index === 0 ? 'border-gold border-2' : ''}`} onClick={(e) => { addActive(e); setidnum(link.idnum) }}>
                                <a href={link.link} className="text-black text-md">{link.title}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div className="">

                {idnum === 1 && <MyProperty />}
                {idnum === 2 && <RelationsMan />}
                {idnum === 3 && <PropertyMan />}
                {idnum === 4 && <LegalSupport />}
                {idnum === 5 && <FinanceAssis />}

            </div>
        </>
    )
}