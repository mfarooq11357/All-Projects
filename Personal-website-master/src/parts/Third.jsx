import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    quote: "...excited to learn of CyberSpara's ongoing efforts to develop simulations to educate children on how to manage risks to cybersecurity.",
    author: "Jerry Griffin",
    affiliation: "Malone Central School District"
  },
  {
    quote: "The cybersecurity training provided by CyberSpara has been invaluable for our team. It's both comprehensive and engaging.",
    author: "Sarah Johnson",
    affiliation: "Tech Innovations Inc."
  },
  {
    quote: "CyberSpara's approach to teaching digital safety is revolutionary. It's making a real difference in how we protect our online presence.",
    author: "Michael Chen",
    affiliation: "Global Security Solutions"
  }
]

export default function Third() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial()
    }, 5000) // Change quote every 5 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-teal-400 p-4">
      <div className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-white md:w-1/3">
          <h2 className="text-xl mb-2 opacity-80">Testimonials</h2>
          <h1 className="text-4xl font-bold">What People are Saying</h1>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8 md:w-2/3 relative overflow-hidden">
          <div className="text-4xl text-purple-600 absolute top-4 left-4">"</div>
          <div className="relative h-48">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full transition-all duration-500 ease-in-out ${
                  index === currentIndex
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-full'
                }`}
              >
                <blockquote className="text-gray-800 mb-4 mt-6">
                  {testimonial.quote}
                </blockquote>
                <cite className="text-gray-600 block">
                  {testimonial.author}
                </cite>
                <div className="text-gray-500">
                  {testimonial.affiliation}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mt-6">
            <button onClick={prevTestimonial} className="text-purple-600 hover:text-purple-800">
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <span
                  key={index}
                  className={`h-2 w-2 rounded-full ${
                    index === currentIndex ? 'bg-teal-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <button onClick={nextTestimonial} className="text-purple-600 hover:text-purple-800">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
      
    </div>
    <header className="bg-gradient-to-r from-blue-100 to-teal-200 p-16">
    <div className="container mx-auto flex justify-between items-center">
        <div className="container mx-auto ">
      <h1 className="text-1xl font-bold text-[#000033]">We Can Help Make Online a Safer Place</h1>
      <p className="text-sm text-[#000033] max-w-md">Our mission is to make you and your organization a safer place. Let us show you how it works</p>
      </div><button className="bg-teal-500 text-white px-4 py-2 rounded text-sm w-72">
        Learn More about DigitalPASS
      </button>
    </div>
  </header>
  </>
  )
}
