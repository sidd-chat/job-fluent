import AuthForm from '@/components/AuthForm'
import { SignUp } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <main className='flex-center card pl-10 gap-10'>
      <div>
        <Image src='/robot.png' alt='robo-image' width={400} height={400} className=''/>
      </div>

      <div>
        <SignUp/>
      </div>
    </main>
  )
}

export default page