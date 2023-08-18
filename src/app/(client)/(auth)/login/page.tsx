'use client';
import { config } from '@/config';
import { useLoginForm } from './useLoginForm';

import { Spinner, Input, Button } from '@/components';

export default function Login() {
  const { BASE_API_URL } = config;
  const { 
    emailValue, 
    passwordValue,
    error,
    loading,
    handlePasswordValue,
    handleEmailValue,
    handleSubmit,
  } = useLoginForm();

  return (
    <form className="flex flex-col" onSubmit={ handleSubmit }>
      <Input 
        label="Enter email"
        placeholder="Enter your email..."
        type="email"
        name="email"
        value={ emailValue }
        onChange={ (e: React.ChangeEvent<HTMLInputElement>) => handleEmailValue(e.target.value) }
      />
      <Input 
        label="Password"
        placeholder="Enter your password..."
        type="password"
        name="password"
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
            ? <Spinner width="w-6" />
            : 'Log in' }
        </Button>
        {/* <Button
          type="link"
          style="ALT"
          height="h-[42px]"
          href={ `${BASE_API_URL}/auth/provider/google/callback` }
        >
          Log in with Google
        </Button> */}
      </div>
    </form>
  );
}
