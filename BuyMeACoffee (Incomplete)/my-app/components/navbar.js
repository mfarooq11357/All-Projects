import React from 'react'
import styles from "./navbar.css"
import Link from 'next/link'
import Login from '@/login/page'
import { trace } from 'next/dist/trace'
const navbar = () => {
  return (
    <nav class="nav">
      <div className="mix">
<img src="/chai.png" alt="Chai" width={22}  />
    <div class="logo">BuyMeACoffee</div>
    </div>
    <ul class="nav-items">
      <li><a href="#" className="hovering">Home</a></li>
      <li><a href="#" className="hovering">About</a></li>
      <li><a href="#" className="hovering">Services</a></li>
      <li><a href="#" className="hovering">Contact</a></li>
      <Link href="login/page.js" className="hovering">Login</Link>
    </ul>
  
  </nav>
  )
}

export default navbar
