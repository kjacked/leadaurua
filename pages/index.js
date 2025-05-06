import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  
  useEffect(() => {
    // Redirect to home page
    router.push('/home');
  }, []);
  
  return <div>Redirecting...</div>;
}