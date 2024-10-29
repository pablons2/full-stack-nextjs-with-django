
import { signIn } from 'next-auth/react';
import { useState } from 'react';
export default function Home() {
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
      setLoading(true);
      await signIn('keycloak');
      setLoading(false);
  };
  return (
    <div className="flex justify-center items-center h-screen">
    <button
        onClick={handleLogin}
        className="p-2 bg-blue-600 text-white rounded"
    >
        {loading ? 'Logging in...' : 'Login with Keycloak'}
    </button>
</div>
  );
}
