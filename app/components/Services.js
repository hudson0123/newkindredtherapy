"use client"

import React from 'react'
import Service from './Service'

export default function Services() {
  return (
    <div id="services" className="h-[100dvh] py-24 px-4 mt-28 sm:px-12 bg-white">
      <div className="relative flex justify-center font-bold text-2xl mb-10">
        <h1 className='text-4xl z-10 text-[rgb(75,69,149)]'>Services We Offer</h1>
        <div className='absolute bg-[#eaebff] h-12 w-72 top-4 right-[36dvw] blur-md z-2'></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 m-[10dvh]">
            <Service 
                index={1}
                details={{
                    title: "Trauma-Focused CBT",
                    description: "An evidence-based approach that helps individuals process and manage the impact of traumatic experiences.",
                    provider: "Robin Schafer & Heather"
                }}
            />
            <Service 
                index={2}
                details={{
                    title: "Child-Parent Psychotherapy",
                    description: "A treatment model designed to support young children and their caregivers in restoring their sense of safety.",
                    provider: "Robin Schafer & Heather"
                }}
            />
            <Service 
                index={3}
                details={{
                    title: "Brainspotting",
                    description: "An advanced brain-body therapy technique that helps access, process, and release trauma stored in the brain.",
                    provider: "Robin Schafer"
                }}
            />
            <Service 
                index={4}
                details={{
                    title: "Traumaplay",
                    description: "A playful and child-centered intervention designed to help children work through trauma.",
                    provider: "Heather"
                }}
            />
            <Service 
                index={5}
                details={{
                    title: "Child-Centered Play Therapy",
                    description: "This therapy allows children to express their experiences through play.",
                    provider: "Robin Schafer & Heather"
                }}
            />
            <Service 
                index={6}
                details={{
                    title: "Treating Perinatal Mood Disorders",
                    description: "This therapy focuses on supporting mothers experiencing anxiety or depression during pregnancy.",
                    provider: "Robin Schafer & Heather"
                }}
            />
            <Service 
                index={7}
                details={{
                    title: "Circle of Security",
                    description: "An evidence-based program that helps caregivers understand their child’s emotional needs.",
                    provider: "Robin Schafer & Heather"
                }}
            />
            <Service 
                index={8}
                details={{
                    title: "Gottman Therapy",
                    description: "A research-based approach to couples therapy that emphasizes improving communication.",
                    provider: "Robin Schafer"
                }}
            />
            <Service 
                index={9}
                details={{
                    title: "Child and Adolescent Trauma Professional",
                    description: "A specialized certification focused on treating trauma in children and adolescents.",
                    provider: "Robin Schafer"
                }}
            />
        </div>
    </div>
  )
}
