'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAdmin } from '@/contexts/AdminContext';
import { 
  EyeIcon, 
  EyeSlashIcon,
  LockClosedIcon,
  UserIcon,
} from '@heroicons/react/24/outline';

export default function AdminLoginPage() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const { login, loading, isAuthenticated } = useAdmin();
  const router = useRouter();

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      router.push('/admin/dashboard');
    }
  }, [isAuthenticated, router]);

  // Show loading or return null while redirecting
  if (isAuthenticated) {
    return (
      <div className="admin-container">
        <div className="text-center">
          <p className="text-white">Redirecting to dashboard...</p>
        </div>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!credentials.username || !credentials.password) {
      setError('Please enter both username and password');
      return;
    }

    const success = await login(credentials);
    
    if (success) {
      router.push('/admin/dashboard');
    } else {
      setError('Invalid username or password');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    if (error) setError('');
  };

  return (
    <div className="admin-container">
      <div className="admin-form">
        <div className="admin-header">
          <div className="admin-icon">
            <LockClosedIcon />
          </div>
          <h2 className="admin-title">
            Admin Panel Access
          </h2>
          <p className="admin-subtitle">
            SAS IT Services - Content Management System
          </p>
        </div>

        <div className="card">
          <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
            {error && (
              <div className="error-message">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <div className="input-with-icon">
                <UserIcon className="input-icon-left" />
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  value={credentials.username}
                  onChange={handleInputChange}
                  className="form-input input-with-left-icon"
                  placeholder="Enter your username"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <div className="input-with-icon">
                <LockClosedIcon className="input-icon-left" />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={credentials.password}
                  onChange={handleInputChange}
                  className="form-input input-with-left-icon input-with-right-icon"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="input-icon-right"
                >
                  {showPassword ? (
                    <EyeSlashIcon style={{height: '1.25rem', width: '1.25rem'}} />
                  ) : (
                    <EyeIcon style={{height: '1.25rem', width: '1.25rem'}} />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary btn-full btn-large"
              style={{opacity: loading ? 0.5 : 1, cursor: loading ? 'not-allowed' : 'pointer'}}
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>

          <div style={{marginTop: '1.5rem', textAlign: 'center'}}>
            <p style={{color: '#9ca3af', fontSize: '0.875rem'}}>
              Need access? Contact{' '}
              <a href="mailto:admin@sasitservices.com" className="contact-link" style={{color: '#4a9eff'}}>
                admin@sasitservices.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
