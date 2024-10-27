import { useState } from "react";
import { Shield, Users, Eye, Fingerprint } from 'lucide-react'

export default function Middle() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-navy-900 text-white py-4 text-center bggggg">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-teal-400 font-semibold mb-2">What We Do</h2>
          <h1 className="text-4xl font-bold mb-4 tex2-color">We are on a mission</h1>
        </div>
      </div>
      
      <div className="flex-grow bggggg">
        <div className="max-w-6xl mx-auto px-4 py-12">
  <div className="flex">
          <div className="classs">

 
      
            
            </div>
          <div className="grid md:grid-cols-2 gap-12 p-4 ">
            <div className="flex flex-col ">
              <div className="mr-6 fffit-content">
                <div className=" bg-teal-500 text-white p-3 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="text-teal-400 font-semibold font-semibold mb-2 tex-color">Raise Security Awareness</h4>
                <p className="tex2-color">
                  Hackers are increasingly targeting individuals to collect sensitive information rather than attacking web
                  servers or databases that are heavily protected.
                </p>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="mr-6 fffit-content">
                <div className="bg-teal-500 text-white p-3 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="text-teal-400 font-semibold font-semibold mb-2 tex-color">Develop a Platform for All</h4>
                <p className="tex2-color">
                  The AI-powered solution, DigitalPASS, is a web-based platform that can be used for any individual or organization, from defense to education.
                </p>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="mr-6 fffit-content">
                <div className="bg-teal-500 text-white p-3 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="text-teal-400 font-semibold font-semibold mb-2 tex-color">Protect Critical Information</h4>
                <p className="tex2-color">
                  To protect privacy, businesses need to safeguard employee and customer personal information and report any breach attempts.
                </p>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="mr-6 fffit-content">
                <div className="bg-teal-500 text-white p-3 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c.637 0 1.275-.048 1.911-.142A4.002 4.002 0 0112 2c-1.133 0-2.217.472-3 1.236C8.036 4.634 7.164 6.278 6 6.49A10.026 10.026 0 012 8c0 5.376 3.84 9.831 9 10.832 5.16-1.001 9-5.456 9-10.832a9.97 9.97 0 01-6-1.51M9 12l2 2 4-4"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="text-teal-400 font-semibold font-semibold mb-2 tex-color">Ensure System Resilience</h4>
                <p className="tex2-color">
                  Defending critical infrastructure from cyberattacks is a priority for governments and corporations, so we develop defenses to ensure system resilience.
                </p>
              </div>
            </div>
          </div>
          </div>
          </div>
        </div>
      </div>
    
  )
}