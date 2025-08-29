 import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <header>
            <nav>
                <ul>
                    <li>Home
                      <Link href="/">Home</Link>
                    </li>
                    <li>About
                      <Link href="/about">About</Link>
                    </li>
                    <li>client component
                      <Link href="/clientcomp">client component</Link>
                    </li>
                    <li>Server Components
                      <Link href="/servercomponent">Server Components</Link>
                    </li>
                    <li>Contact
                      <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Navbar