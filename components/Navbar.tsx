import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav>
      <Link href='/' className='flex items-center gap-2'>
        <Image src='./logo.svg' alt='Logo' width={50} height={50}/>
        <h2 className='text-xl'>JobFluent</h2>
      </Link>
    </nav>
  )
}

export default Navbar