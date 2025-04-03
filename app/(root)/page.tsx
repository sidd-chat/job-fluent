import InterviewCard from '@/components/InterviewCard'
import { Button } from '@/components/ui/button'
import { dummyInterviews } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  return (
    <>
      <section className='card-cta flex items-center py-12 max-xl:flex-col-reverse gap-6'>
        <div className='flex flex-col gap-4 max-w-lg'>
          <h2>
            Get Shortlisted Easier and Breeze Through Interviews with the Power of AI
          </h2>

          <ul className='text-lg text-neutral-400'>
            <li>Get a full ATS appliant resume report for FREE</li>
            <li>Practice on real interview questions</li>
            <li>Get instant feedback</li>
          </ul>

          <div className='flex items-center mt-5 gap-3 max-sm:w-full overflow-hidden'>
            <Button asChild className='btn-primary'>
              <Link href='/interview'>
                Start Live Interview
              </Link>
            </Button>

            <Button asChild className='btn-secondary'>
              <Link href='/resume'>
                Get FREE Resume Report & Improvements
              </Link>
            </Button>
          </div>
        </div>

        <Image src='/robot.png' alt='robo-image' width={400} height={400} className=''/>
      </section>

      <section className='flex flex-col gap-6 mt-8'>
        <h2>Your Interviews</h2>

        <div className='interviews-section'>
          {dummyInterviews.map((interview) => (
            <InterviewCard key={interview.id} {...interview} />
          ))}

          {/* <p>You haven't taken any interviews yet</p> */}
        </div>
      </section>

      <section className='flex flex-col gap-6 mt-8'>
        <h2>Take an Interview</h2>

        <div className='interviews-section'>
          {dummyInterviews.map((interview) => (
            <InterviewCard key={interview.id} {...interview} />
          ))}

          {/* <p>No interviews available yet!</p> */}
        </div>
      </section>
    </>
  )
}

export default HomePage