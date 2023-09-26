import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div>
        <ul className='flex justify-center'>
            <li className='p-3'>
                <Link href="/">Home</Link>
            </li>
            <li className='p-3'>
                <Link href="/about">About</Link>
            </li>
            <li className='p-3'>
                <Link href="/projects">Projects</Link>
            </li>
            <li className='p-3'>
                <Link href="/contact">Contact</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar