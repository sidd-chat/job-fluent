"use client"

import React from 'react'

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import Image from 'next/image';
import Link from 'next/link';
import { toast } from 'sonner';
import FormField from './FormField';
import { useRouter } from 'next/navigation';

const authFormSchema = ( type: FormType) => {
  return z.object({
    username: type === 'sign-up' ? z.string().min(3, "Username is required") : z.string().optional(),
    email: z.string().email(),
    password: z.string().min(3)
  })
}

const AuthForm = ({ type } : { type: FormType }) => {

  const router = useRouter();

  const formSchema = authFormSchema(type);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if(type === 'sign-up') {
        toast.success('Account Created Successfully!');
        router.push('/');
      } else {
        toast.success('Logged In Successfully!');
        router.push('/');
      }
    } catch (err) {
      console.log(err);
      toast.error(`Error! ${err}`);
    }
  }

  const isLogin = type === 'log-in';

  return (
    <div className='card-border lg:min-w-[566px]'>
      <div className='flex flex-col gap-6 card py-14 px-10'>
        <div className='flex flex-row gap-2 justify-center'>
          <Image src='/logo.svg' alt='logo' height={32} width={38}/>

          <h2 className='text-primary-100'>Job Fluent</h2>
        </div>

        <h3>
          Master your Resume and Job Interviews with AI
        </h3>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 mt-4 form">
            {!isLogin && (
              <FormField
                control={form.control}
                name="username"
                label='username'
                placeholder='Enter Username'
              />
            )}

            <FormField
              control={form.control}
              name="email"
              label='email'
              placeholder='Enter Email'
              type='email'
            />

            <FormField
              control={form.control}
              name="password"
              label='password'
              placeholder='Enter Password'
              type='password'
            />

            <Button className='btn uppercase' type="submit">
              {isLogin ? "Login" : "Signup"}
            </Button>
          </form>
        </Form>

        <p className='text-center'>
          {isLogin ? 'No Account Yet?' : 'Already Have an Account?'}

          <Link
            href={!isLogin ? '/log-in' : '/sign-up'}
            className='font-bold text-user-primary ml-1 cursor-pointer'
          >
            {!isLogin ? 'Login ->' : 'Signup to Boost Your Intervew Skills ->'}
          </Link>
        </p>
      </div>
    </div>
  )
}

export default AuthForm
