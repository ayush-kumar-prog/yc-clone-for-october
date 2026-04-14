// Variant B: Simplified signup form
import React, { useState } from 'react';

const SignupFormVariantB = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Track signup_started event
      if (window.posthog) {
        window.posthog.capture('signup_started');
      }

      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        // Track signup_completed event
        if (window.posthog) {
          window.posthog.capture('signup_completed');
        }
        // Redirect to optional profile completion
        window.location.href = '/welcome';
      } else {
        const data = await response.json();
        setError(data.message || 'Signup failed. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <div className="progress-indicator">
        <div className="step active">1. Create account</div>
        <div className="step">2. Complete profile (optional)</div>
      </div>

      <form onSubmit={handleSubmit} className="signup-form">
        <h1>Create your account</h1>
        <p className="subtitle">Get started in seconds. Complete your profile later.</p>

        {error && <div className="error-message">{error}</div>}

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            required
            autoFocus
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="At least 8 characters"
            minLength={8}
            required
          />
        </div>

        <button type="submit" disabled={loading} className="submit-button">
          {loading ? 'Creating account...' : 'Create account'}
        </button>

        <p className="terms">
          By signing up, you agree to our Terms of Service and Privacy Policy.
        </p>
      </form>

      <style jsx>{`
        .signup-container {
          max-width: 440px;
          margin: 60px auto;
          padding: 0 20px;
        }

        .progress-indicator {
          display: flex;
          gap: 12px;
          margin-bottom: 32px;
          font-size: 14px;
        }

        .step {
          color: #999;
          padding: 8px 16px;
          border-radius: 6px;
          background: #f5f5f5;
        }

        .step.active {
          color: #000;
          background: #e3f2fd;
          font-weight: 500;
        }

        .signup-form {
          background: white;
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        }

        h1 {
          margin: 0 0 8px 0;
          font-size: 28px;
          font-weight: 600;
        }

        .subtitle {
          margin: 0 0 32px 0;
          color: #666;
          font-size: 15px;
        }

        .error-message {
          background: #fee;
          color: #c33;
          padding: 12px 16px;
          border-radius: 6px;
          margin-bottom: 20px;
          font-size: 14px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        label {
          display: block;
          margin-bottom: 6px;
          font-weight: 500;
          font-size: 14px;
        }

        input {
          width: 100%;
          padding: 12px 16px;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 15px;
          transition: border-color 0.2s;
        }

        input:focus {
          outline: none;
          border-color: #2196f3;
        }

        .submit-button {
          width: 100%;
          padding: 14px;
          background: #2196f3;
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s;
        }

        .submit-button:hover:not(:disabled) {
          background: #1976d2;
        }

        .submit-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .terms {
          margin-top: 20px;
          font-size: 13px;
          color: #666;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default SignupFormVariantB;