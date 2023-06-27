'use client';

import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";
import { signIn } from 'next-auth/react'


export const SignInForm = () => {
  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const response = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false,
    });
    if (response && !response.error) {
      router.push('/profile')
    } else {
      console.log(response);
    }
  }
  return (
    <form onSubmit={handleSubmit} className="login-form">
      <input type="email" name="email" required />
      <input type="password" name="password" required />
      <button>Sign In</button>   
    </form>
  )
}
