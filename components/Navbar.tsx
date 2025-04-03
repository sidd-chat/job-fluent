import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between pr-5'>
      <Link href='/' className='flex items-center gap-2'>
        <Image src='./logo.svg' alt='Logo' width={5} height={5} className='size-20 object-cover'/>
        <h2 className='text-xl'>JobFluent</h2>
      </Link>

      <SignedIn>
        <UserButton showName/>
      </SignedIn>

      <SignedOut>
        <SignInButton />
      </SignedOut>
    </nav>
  )
}

export default Navbar