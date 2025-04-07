import { cn } from '@/lib/utils';
import Image from 'next/image'
import React from 'react'

enum CallStatus {
  CONNECTING = 'CONNECTING',
  INACTIVE =  'INACTIVE',
  ACTIVE = 'ACTIVE',
  FINISHED = 'FINISHED',
}

const Agent = ({ userName, userId, type }: AgentProps) => {
  const callStatus = CallStatus.FINISHED;
  const isSpeaking = true;

  const messages = [
    'What is your name?',
    'The names John Cena, fuck-all to meet you'
  ];
  const lastMessage = messages[messages.length - 1];

  return (
    <>
      <div className='call-view'>
        <div className='card-interviewer'>
          <div className='avatar'>
            <Image src='/ai-avatar.png' alt='vapi avatar' width={65} height={54} className='object-cover'/>

            {isSpeaking && <span className='animate-speak'></span>}

          </div>

          <h3>Interviewer Mark</h3>
        </div>

        <div className='card-border'>
          <div className='card-content'>
            <Image src='/user-avatar.png' alt='user avatar' width={540} height={540} className='rounded-full object-cover size-[120px]'/>

            {isSpeaking && <span className='animate-speak'></span>}

            <h3>{userName}</h3>
          </div>
        </div>
      </div>

      {messages.length > 0 && (
        <div className='transcript-border'>
          <div className='transcript'>
            <p key={lastMessage} className={cn(
              'transition-opacity opacity-0 duration-500', 'animate-fadeIn opacity-100'
            )}>
              {lastMessage}
            </p>
          </div>
        </div>
      )}

      <div className='flex justify-center w-full'>
        {callStatus !== 'ACTIVE' ? (
          <button className='relative btn-call cursor-pointer'>
            <span className={
              cn('absolute animate-ping rounded-full opacity-75',
              callStatus !== 'CONNECTING' ? 'hidden' : '')
            }/>

            <span>
              {callStatus === 'INACTIVE' || callStatus === 'FINISHED' ? 'Call' : '. . .'}
            </span>
          </button>
        ) : (
          <button className='btn-disconnect cursor-pointer'>
            <span>End Interview</span>
          </button>
        )}
      </div>
    </>
  )
}

export default Agent