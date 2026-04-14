// Variant B: Simplified signup form

import React, { useState } from 'react';

const SignupFormVariantB = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Basic validation
    if (!email || !password || !fullName) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters');
      setLoading(false);
      return;
    }

    try {
      // Track signup_started event
      if (window.posthog) {
        window.posthog.capture('signup_started', {
          variant: 'B',
          fields_shown: 3
        });
      }

      // Your actual signup API call here
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, fullName })
      });

      if (response.ok) {
        // Track signup_completed event
        if (window.posthog) {
          window.posthog.capture('signup_completed', {
            variant: 'B'
          });
        }
        // Redirect to welcome/onboarding step
        window.location.href = '/welcome';
      } else {
        const data = await response.json();
        setError(data.message || 'Signup failed. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container" style={{ maxWidth: '440px', margin: '0 auto', padding: '40px 20px' }}>
      <div className="progress-indicator" style={{ marginBottom: '32px', textAlign: 'center' }}>
        <span style={{ fontSize: '14px', color: '#666', fontWeight: '500' }}>Step 1 of 2</span>
      </div>
      
      <h1 style={{ fontSize: '28px', fontWeight: '600', marginBottom: '8px', textAlign: 'center' }}>
        Create your account
      </h1>
      <p style={{ fontSize: '16px', color: '#666', marginBottom: '32px', textAlign: 'center' }}>
        Get started in less than a minute
      </p>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="fullName" style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>
            Full name
          </label>
          <input
            id="fullName"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Jane Smith"
            style={{
              width: '100%',
              padding: '12px 16px',
              fontSize: '16px',
              border: '1px solid #ddd',
              borderRadius: '6px',
              boxSizing: 'border-box'
            }}
            required
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            style={{
              width: '100%',
              padding: '12px 16px',
              fontSize: '16px',
              border: '1px solid #ddd',
              borderRadius: '6px',
              boxSizing: 'border-box'
            }}
            required
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <label htmlFor="password" style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="At least 8 characters"
            style={{
              width: '100%',
              padding: '12px 16px',
              fontSize: '16px',
              border: '1px solid #ddd',
              borderRadius: '6px',
              boxSizing: 'border-box'
            }}
            required
          />
        </div>

        {error && (
          <div style={{ marginBottom: '20px', padding: '12px', backgroundColor: '#fee', border: '1px solid #fcc', borderRadius: '6px', color: '#c33', fontSize: '14px' }}>
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          style={{
            width: '100%',
            padding: '14px',
            fontSize: '16px',
            fontWeight: '600',
            color: '#fff',
            backgroundColor: loading ? '#999' : '#0066ff',
            border: 'none',
            borderRadius: '6px',
            cursor: loading ? 'not-allowed' : 'pointer',
            transition: 'background-color 0.2s'
          }}
        >
          {loading ? 'Creating account...' : 'Continue'}
        </button>
      </form>

      <p style={{ marginTop: '24px', fontSize: '14px', color: '#666', textAlign: 'center' }}>
        Already have an account? <a href="/login" style={{ color: '#0066ff', textDecoration: 'none' }}>Sign in</a>
      </p>
    </div>
  );
};

export default SignupFormVariantB;