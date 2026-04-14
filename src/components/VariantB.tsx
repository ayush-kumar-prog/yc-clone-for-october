import { useState } from 'react';

export default function SignupForm() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accountCreated, setAccountCreated] = useState(false);

  const handleStep1Submit = async (e: React.FormEvent) => {
    e.preventDefault();
    // API call to create account with email and password only
    try {
      // await createAccount({ email, password });
      setAccountCreated(true);
      setStep(2);
    } catch (error) {
      console.error('Account creation failed:', error);
    }
  };

  const handleStep2Submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    // API call to update profile details
    try {
      // await updateProfile({ 
      //   fullName: formData.get('fullName'),
      //   companySize: formData.get('companySize'),
      //   referralSource: formData.get('referralSource'),
      //   useCase: formData.get('useCase')
      // });
      // Redirect to dashboard
      window.location.href = '/dashboard';
    } catch (error) {
      console.error('Profile update failed:', error);
    }
  };

  const handleSkip = () => {
    // Redirect to dashboard without completing step 2
    window.location.href = '/dashboard';
  };

  if (step === 1) {
    return (
      <div className="space-y-6 max-w-md mx-auto">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-medium">1</div>
            <span className="ml-2 text-sm font-medium text-gray-900">Create account</span>
          </div>
          <div className="w-12 h-0.5 bg-gray-300"></div>
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center text-sm font-medium">2</div>
            <span className="ml-2 text-sm font-medium text-gray-500">Profile details</span>
          </div>
        </div>

        <form onSubmit={handleStep1Submit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input 
              id="email"
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded" 
              required 
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
            <input 
              id="password"
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded" 
              required 
            />
            <p className="text-xs text-gray-500 mt-1">Minimum 8 characters</p>
          </div>
          
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded font-medium hover:bg-blue-700 transition-colors">
            Create account
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-md mx-auto">
      <div className="flex items-center justify-center gap-2 mb-6">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-medium">✓</div>
          <span className="ml-2 text-sm font-medium text-gray-500">Create account</span>
        </div>
        <div className="w-12 h-0.5 bg-blue-600"></div>
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-medium">2</div>
          <span className="ml-2 text-sm font-medium text-gray-900">Profile details</span>
        </div>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-green-800">Account created successfully!</h3>
            <p className="mt-1 text-sm text-green-700">Welcome aboard! Your dashboard is ready. Help us personalize your experience or skip to start exploring.</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleStep2Submit} className="space-y-4">
        <h2 className="text-xl font-semibold mb-2">Help us personalize your experience</h2>
        <p className="text-sm text-gray-600 mb-4">Optional - you can complete this later from your settings</p>
        
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium mb-1">Full name</label>
          <input 
            id="fullName"
            name="fullName"
            type="text" 
            className="w-full px-3 py-2 border rounded" 
          />
        </div>
        
        <div>
          <label htmlFor="companySize" className="block text-sm font-medium mb-1">Company size</label>
          <select id="companySize" name="companySize" className="w-full px-3 py-2 border rounded">
            <option value="">Select...</option>
            <option>1-10</option>
            <option>11-50</option>
            <option>51-200</option>
            <option>201+</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="referralSource" className="block text-sm font-medium mb-1">How did you hear about us?</label>
          <input 
            id="referralSource"
            name="referralSource"
            type="text" 
            className="w-full px-3 py-2 border rounded" 
          />
        </div>
        
        <div>
          <label htmlFor="useCase" className="block text-sm font-medium mb-1">Primary use case</label>
          <textarea 
            id="useCase"
            name="useCase"
            className="w-full px-3 py-2 border rounded" 
            rows={3}
          ></textarea>
        </div>
        
        <div className="flex gap-3 pt-2">
          <button type="submit" className="flex-1 bg-blue-600 text-white py-2 rounded font-medium hover:bg-blue-700 transition-colors">
            Continue to dashboard
          </button>
          <button 
            type="button" 
            onClick={handleSkip}
            className="flex-1 border border-gray-300 py-2 rounded font-medium hover:bg-gray-50 transition-colors"
          >
            Complete later
          </button>
        </div>
      </form>
    </div>
  );
}