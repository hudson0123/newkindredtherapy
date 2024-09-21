"use client"

import React from 'react'
import { useState, useEffect, useRef} from 'react'

export default function Service({details, index}) {

    const [isVisible, setVisible] = useState(false);
    const domRef = useRef();
    
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setVisible(entry.isIntersecting);
                }
            });
        });
        observer.observe(domRef.current);
        return () => observer.unobserve(domRef.current);
    }, []);

    const animationDelay = `${index * 300}ms`;
    
    return (
        <div  ref={domRef} className={"bg-[#eaebff] p-5 shadow-[rgb(75,69,149)] shadow-md border-gray-100 border-1 " +  `delay-[${Math.floor(Math.random() * 10)*100}] fade-in-section ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: animationDelay }}>
            <h2 className="text-base font-bold heading-font">{details.title}</h2>
            <h4 className='subheading-font'><i>{details.provider}</i></h4>
            <p className='content-font'>{details.description}</p>
        </div>
    )
}
