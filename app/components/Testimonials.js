import React from 'react'

export default function Testimonials() {

  const testimonials = [
    {
        quote: "",
        author: "",
    }
  ]

  return (
    <div className="max-w-7xl mx-20 py-44 px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-24">What Our Users Are Saying</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
        <div className="bg-white border-2 shadow rounded-lg p-8">
            <p className="text-gray-700 mb-4">"This app has been a game changer for me! I highly recommend it to anyone looking to streamline their workflow."</p>
            <p className="text-gray-700 font-medium">- John Doe, CEO</p>
        </div>
        <div className="bg-white shadow rounded-lg p-8">
            <p className="text-gray-700 mb-4">"I've tried a lot of different apps, but this one really stands out. It's so easy to use, and the features are exactly what I need."</p>
            <p className="text-gray-700 font-medium">- Jane Smith, Designer</p>
        </div>
        <div className="bg-white shadow rounded-lg p-8">
            <p className="text-gray-700 mb-4">"I love how customizable this app is. I can really make it work for me, no matter what project I'm working on."</p>
            <p className="text-gray-700 font-medium">- Bob Johnson, Developer</p>
        </div>
        </div>
    </div>
  )
}
