import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/client';
import { useRouter } from 'next/router';

export const AUTH_STATES = {
  NOT_LOGGED: null,
  TOKEN: undefined,
};

export default function useAuth() {
  const [token, setToken] = useState(AUTH_STATES.TOKEN);
  const router = useRouter();

  useEffect(() => {
    !token && router.push('/auth/login');
  }, [token]);

  return;
}
