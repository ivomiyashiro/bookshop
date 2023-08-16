import { FormEvent, useContext, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { AuthContext } from '@/contexts/auth';

export const useSigninForm = () => {
  const { signup } = useContext(AuthContext);

  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const router = useRouter();
  const params = useSearchParams();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let error = '* All fields must be completed.';

    if (nameValue.length === 0) {
      return setError(error);
    }

    if (emailValue.length === 0) {
      return setError(error);
    }

    if (passwordValue.length < 6) {
      return setError('* Password length must be higher than 6');
    }

    setLoading(true);
    try {
      await signup({ 
        name: nameValue, 
        email: emailValue, 
        password: passwordValue 
      });

      setError('');

      if (!!!params.get('checkout')) {
        return router.push('/login');
      }
  
      router.push('/login?checkout=true');
    } catch (error) {
      setLoading(false);

      if (error instanceof Error) {
        setError('* ' + error.message);
      }
      
    }
  };

  return {
    nameValue,
    emailValue,
    passwordValue,
    loading,
    error,
    handleNameValue: setNameValue,
    handleEmailValue: setEmailValue,
    handlePasswordValue: setPasswordValue,
    handleSubmit
  };
};
