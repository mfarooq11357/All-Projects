import { Button } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { FormLabel as Label } from "@chakra-ui/react";
import { Facebook, Instagram, Twitter } from "lucide-react";


export default function Fourth() {
  return (
    <div className="min-h-screen flex flex-col bg-[#000033]">
      <div className="flex-grow flex">
        <div className="w-1/2 p-8 flex flex-col mt-20">
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-8 h-8 text-[#000033]"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">CyberSpara</h1>
                <p className="text-[#00FFFF]">Reimagine Cybersafety</p>
              </div>
            </div>
          </div>
          <nav className="mb-8">
            <ul className="flex  text-white justify-evenly">
              <li href="/" className=" text-white my-2  ">Home</li>
              <li href="/about" className=" text-white my-2  ">About</li>
              <li href="/contact" className=" text-white my-2    ">Contact Us</li>
              <li href="/solutions" className=" text-white my-2  ">Solutions</li>
              <li href="/news" className=" text-white my-2  ">In the News</li>
              <li href="/faq" className=" text-white my-2  ">FAQ's</li>
            </ul>
          </nav>
          <div className="flex space-x-4">
            <a href="#" className="text-white">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-white">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-white">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="w-1/2 p-8">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#000033]">Get on the List!</h2>
            <form className="space-y-4">
              <div>
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email Address <span className="text-red-500">*</span>
                </Label>
                <Input id="email" type="email" required className="mt-1" />
              </div>
              <div>
                <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                  First Name
                </Label>
                <Input id="name" type="text" className="mt-1" />
              </div>
              <div>
                <Label className="text-sm font-medium text-gray-700">
                  Email Consent <span className="text-red-500">*</span>
                </Label>
                <div className="mt-1">
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2">I consent to receive marketing emails</span>
                  </label>
                </div>
              </div>
              <Button type="submit" className="w-full bg-gray-400 hover:bg-gray-500 text-white">
                Subscribe
              </Button>
            </form>
            <p className="mt-4 text-sm text-gray-600">
              When you sign up for CyberSpara marketing emails, you'll receive tips and tricks about cybersecurity & cyber awareness as well as updates on the DigitalPASS platform.
            </p>
          </div>
        </div>
      </div>
      <footer className="bg-[#1a1a4d] text-white p-4 text-center">
        <p>
          Copyright CyberSpara 2024 - All Rights Reserved | <a href="/terms">Terms of Service</a> | <a href="/privacy">Privacy Policy</a>
        </p>
      </footer>
    </div>
  );
}
