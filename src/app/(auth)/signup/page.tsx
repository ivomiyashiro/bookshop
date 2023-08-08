'use client';
import { config } from '@/config';
import { useSigninForm } from './useSignupForm';

import { Spinner, Input, Button } from '@/components';

export default function Signup() {
  const { BASE_API_URL } = config;
  const {
    nameValue,
    emailValue, 
    passwordValue,
    error,
    loading,
    handleNameValue,
    handlePasswordValue,
    handleEmailValue,
    handleSubmit,
  } = useSigninForm();
  
  return (
    <form className="flex flex-col" onSubmit={ handleSubmit }>
      <Input 
        label="Full name"
        placeholder="Enter your name..."
        type="text"
        value={ nameValue }
        onChange={ (e: React.ChangeEvent<HTMLInputElement>) => handleNameValue(e.target.value) }
      />
      <Input 
        label="Enter email"
        placeholder="Enter your email..."
        type="email"
        value={ emailValue }
        onChange={ (e: React.ChangeEvent<HTMLInputElement>) => handleEmailValue(e.target.value) }
      />
      <Input 
        label="Password"
        placeholder="Enter your password..."
        type="password"
        value={ passwordValue }
        onChange={ (e: React.ChangeEvent<HTMLInputElement>) => handlePasswordValue(e.target.value) }
      />
      { error
        &&
        <p className="text-sm text-red-500">{ error }</p> }
      <div className="flex flex-col gap-4 mt-4">
        <Button
          type="submit"
          style="PRIMARY"
          height="h-[42px]"
        >
          { loading
            ? <Spinner />
            : 'Sign up' }
        </Button>
        <Button
          type="link"
          style="ALT"
          height="h-[42px]"
          href={ `${BASE_API_URL}/auth/provider/google/callback` }
        >
          Sign up with Google
        </Button>
      </div>
    </form>
  );
}
