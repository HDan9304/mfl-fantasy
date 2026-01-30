import React, { useState } from 'react';
import { Input } from '../components/common/Input';
import { Button } from '../components/common/Button';
import { useLogin } from '../hooks/useLogin';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, loading } = useLogin();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">MFL Fantasy Login</h2>
        
        <form onSubmit={handleSubmit}>
          <Input 
            label="Email" 
            type="email" 
            placeholder="Enter your email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input 
            label="Password" 
            type="password" 
            placeholder="••••••••" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          
          <Button type="submit" loading={loading}>
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
