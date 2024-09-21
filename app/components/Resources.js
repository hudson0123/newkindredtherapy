"use client"

import React from 'react';

export default function Resources() {
    const organizations = [
        {
            name: 'Athens Parent Wellbeing',
            link: 'https://athensparentwellbeing.org',
            image: '/athensparentwellbeing.aspx' // Replace with actual image path
        },
        {
            name: 'Motherhood Beyond Bars',
            link: 'https://motherhoodbeyondbars.org',
            image: '/motherhoodbeyondbars.png' // Replace with actual image path
        },
        {
            name: 'Postpartum Support International',
            link: 'https://www.postpartum.net',
            image: '/postpartumsupportinternational.png' // Replace with actual image path
        },
        {
            name: 'Jubilee Partners',
            link: 'https://jubileepartners.org',
            image: '/jubileepartners.png' // Replace with actual image path
        }
    ];

    return (
        <div id="resources" className="relative grid h-[100dvh] p-8 sm:p-16 bg-white">
            <h1 className="text-[rgb(75,69,149)] z-10 text-4xl sm:text-4xl font-bold mt-5 mb-8 text-center">
                Organizations We Love and Support
            </h1>
            <div className='absolute bg-[#eaebff] h-12 w-[40dvw] top-16 right-[28dvw] blur-md z-2'></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
                {organizations.map((org, index) => (
                    <a 
                        key={index} 
                        href={org.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="transition transform hover:scale-105"
                    >
                        <div className="bg-gray-100 border border-1 border-black p-4 rounded-lg shadow-xl hover:bg-gray-200">
                            <img 
                                src={org.image} 
                                alt={org.name} 
                                className="h-48 object-cover rounded-lg"
                            />
                            <h2 className="text-center bg-[#eaebff] p-4 text-md font-semibold mt-4">{org.name}</h2>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
