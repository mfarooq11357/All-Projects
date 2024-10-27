import { useState, useEffect } from 'react'
import { Home } from 'lucide-react'
import Second from './parts/second'
import Third from './parts/third'
import Fourth from './parts/Fourth'
import Middle from './parts/middle'
function App() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const Links = [
    'https://cyberspara.com/wp-content/uploads/NYSED-Logo-160.png',
    'https://cyberspara.com/wp-content/uploads/NYSED-Logo-160.png',
    'https://cyberspara.com/wp-content/uploads/NYSED-Logo-160.png',
    'https://cyberspara.com/wp-content/uploads/NYSED-Logo-160.png',
    'https://cyberspara.com/wp-content/uploads/NYSED-Logo-160.png',
    'https://cyberspara.com/wp-content/uploads/NYSED-Logo-160.png',
    'https://cyberspara.com/wp-content/uploads/NYSED-Logo-160.png',
    'https://cyberspara.com/wp-content/uploads/NYSED-Logo-160.png',
    'https://cyberspara.com/wp-content/uploads/NYSED-Logo-160.png',
    'https://cyberspara.com/wp-content/uploads/NYSED-Logo-160.png'
  ]

  const partners = [  
    'https://cyberspara.com/wp-content/uploads/NYSED-Logo-160.png',
    'https://cyberspara.com/wp-content/uploads/NSF-iCorps-Logo.png',
    'https://cyberspara.com/wp-content/uploads/SBIR-STTR-Logo.png',
    'https://cyberspara.com/wp-content/uploads/SUNY-Canton-Tech-Logo-140.png',
    'https://cyberspara.com/wp-content/uploads/SUNY-RF-Logo.png',
    'https://cyberspara.com/wp-content/uploads/ASP-Logo.png']


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % partners.length)
    }, 100000)
    return () => clearInterval(timer)
  }, [])
  return (
    <div className="  with-full-bg  bg-gradient-to-b  text-white">
      <header className="with-full-bg backgrount-main  mx-auto px-8 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img
            src="https://cyberspara.com/wp-content/uploads/CyberSpara-Horizontal-Logo-Light-4C.png"
            alt="CyberSpara Logo"
            width={230}
            height={100}
          />
        </div>
        <nav className="hidden md:flex space-x-6">
          <a className="hover:text-blue-300" href="/">
            <Home className="w-6 h-6" />
          </a>
          <a className="hover:text-blue-300" href="/about">
            About
          </a>
          <a className="hover:text-blue-300" href="/solutions">
            Solutions
          </a>
          <a className="hover:text-blue-300" href="/contact">
            Contact Us
          </a>
        </nav>
        <button className="green-bg-color text-white px-4 py-2 rounded-md hover:bg-teal-600 transition-colors">
          Sign Up for a FREE Trial
        </button>
      </header>

      <main className="backgrount-main mx-auto px-6 py-2 pb-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-4xl font-bold mb-6 pr-8">
              AI Powered Cybersecurity Training
            </h1>
            <p className="mb-6">
              CyberSpara's flagship platform, DigitalPASS, aims to aid employers,
              teachers, and parents in educating cybersecurity and privacy
              awareness. Our AI-driven platform uses gamification to make the
              learning experience more engaging.
            </p>
            <p className="mb-6">
              To experience the features and advantages of DigitalPASS, sign up for
              our free trial today. Join us in becoming more cyber aware.
            </p>
            <div className="">
              <button className=" green-bg-color mx-2  text-white px-6 py-3 rounded-md hover:bg-teal-600 transition-colors">
                Sign Up for a Free Trial
              </button>
              <button className="borderrr  border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-blue-900 transition-colors">
                Talk with our Team Today
              </button>
            </div>
          </div>
          <div className="relative aspect-video">
          <iframe
        className="absolute top-0 left-0 w-full h-full"
        src="https://www.youtube.com/embed/hL7T8u9CK6c?si=qrMLkCCjw-uBfhlp"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
          </div>
        </div>
      </main>
      <section className='py-10' >
          <h2 className="text-2xl font-semibold mb-8 text-center tex2-color">Who we've worked with</h2>
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {[...Array(2)].map((_, groupIndex) => (
                <div key={groupIndex} className="flex min-w-full">
                  {partners.map((partner, index) => (
                    <div key={index} className="w-1/6 px-2">
                      <div className="bg-white p-4 rounded-lg flex items-center justify-center h-24">
                        <img src={partner} alt={""} width={120} height={60} className="w-full" />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
        <Middle />



       
     
    <Second />
    <Third/>
    <Fourth/>
    </div>
  )
}
export default App;