"use client"

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        if (!formSubmitted) {
            document.getElementById("submitInput").innerHTML = 'Loading';
            e.preventDefault();

            emailjs.send('service_nvez149', 'template_pfysblt', formData, '7Xniu4oQAodcmMsLw')
                .then((result) => {
                    console.log(result.text);
                    document.getElementById("nameInput").value = '';
                    document.getElementById("subjectInput").value = '';
                    document.getElementById("emailInput").value = '';
                    document.getElementById("messageInput").value = '';
                    document.getElementById("submitInput").innerHTML = 'Email Sent.';
                }, (error) => {
                    console.log(error.text);
                    document.getElementById("submitInput").innerHTML = 'Email Sent.';
                });
            setFormSubmitted(true);
        } else {
            // Do nothing if form is already submitted
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div id="contact" className="h-[100dvh] flex flex-col sm:flex-row items-middle gap-16 m-10 sm:p-16 mx-auto max-w-6xl font-[sans-serif]">
            {/* Left Section */}
            <div className="flex-1 flex flex-col justify-center mx-[5dvh]">
                <h1 className="text-[rgb(48,104,184)] drop-shadow text-2xl sm:text-3xl font-extrabold">
                    We'd Love to hear from you.
                </h1>
                <p className="text-sm sm:text-base text-gray-500 mt-4">
                    Feel free to reach out with any questions, comments, or requests, and I&apos;ll get back to you as soon as possible!
                </p>

                <div className="mt-12">
                    <h2 className="text-gray-800 text-base font-bold">Email</h2>
                    <ul className="mt-4">
                        <li className="flex items-center">
                            <div className="h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <img src="/mail-svgrepo-com.png" alt="mail" />
                            </div>
                            <a href="mailto:hudsonodonnell2004@gmail.com" className="text-black text-md ml-4 mt-1 underline">
                                hudsonodonnell2004@gmail.com
                            </a>
                        </li>
                    </ul>
                </div>

                <hr className="my-8" />

                <div className="">
                    <h2 className="text-gray-800 text-base font-bold">Socials</h2>
                    <ul className="flex mt-4 space-x-4">
                        <li className="h-10 w-10 rounded-full flex items-center justify-center">
                            <a href="https://www.facebook.com/people/Kindred-Therapy/61551832591985/" target='_blank' rel="noopener noreferrer">
                                <img src="/facebook-svgrepo-com.png" alt="facebook" />
                            </a>
                        </li>
                        <li className="h-10 w-10 rounded-full flex items-center justify-center">
                            <a href="https://www.instagram.com/kindred_therapy/?igsh=cjAwYnJ6dTVmZ3h4" target='_blank' rel="noopener noreferrer">
                                <img src="/instagram-logo-svgrepo-com.png" alt="instagram" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Right Section: Form */}
            <form className="flex-1 flex flex-col justify-center space-y-4 p-8 sm:p-10 rounded-xl drop-shadow-2xl w-full">
                <input 
                    id="nameInput"
                    type="text" 
                    name="name" 
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-md py-3 px-4 bg-white text-gray-800 text-sm outline-[rgb(48,104,184)] border border-gray-400" 
                    required
                />
                <input 
                    id="emailInput"
                    type="email" 
                    name="email" 
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-md py-3 px-4 bg-white text-gray-800 text-sm outline-[rgb(48,104,184)] border border-gray-400" 
                    required
                />
                <input 
                    id="subjectInput"
                    type="text" 
                    name="subject" 
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full rounded-md py-3 px-4 bg-white text-gray-800 text-sm outline-[rgb(48,104,184)] border border-gray-400" 
                    required
                />
                <textarea 
                    id="messageInput"
                    name="message"
                    placeholder="Message" 
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-md px-4 bg-white text-gray-800 text-sm pt-3 outline-[rgb(48,104,184)] border border-gray-400" 
                    required
                />
                <button 
                    onClick={handleSubmit}
                    id="submitInput"
                    type="submit"
                    className="text-white bg-[rgb(48,104,184)] tracking-wide rounded-md text-sm px-4 py-3 w-full mt-6"
                >
                    Send
                </button>
            </form>
        </div>
    );
}
