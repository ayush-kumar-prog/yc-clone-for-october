import { useState } from 'react';

export default function SignupForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    companySize: '1-10',
    referralSource: '',
    useCase: ''
  });

  const handleStep1Submit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Create account with email and password
    // After successful account creation, move to step 2
    setStep(2);
  };

  const handleStep2Submit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Submit profile details
    // Redirect to dashboard
  };

  const handleSkip = () => {
    // Skip profile details and go to dashboard
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (step === 1) {
    return (
      <form className="space-y-4 max-w-md mx-auto" onSubmit={handleStep1Submit}>
        <div className="text-sm text-gray-600 mb-4">Step 1 of 2</div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input 
            type="email" 
            name="email"
            className="w-full px-3 py-2 border rounded" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input 
            type="password" 
            name="password"
            className="w-full px-3 py-2 border rounded" 
            value={formData.password}
            onChange={handleChange}
            required 
          />
        </div>
        
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded font-medium">Create account</button>
      </form>
    );
  }

  return (
    <form className="space-y-4 max-w-md mx-auto" onSubmit={handleStep2Submit}>
      <div className="text-sm text-gray-600 mb-4">Step 2 of 2</div>
      <h2 className="text-xl font-semibold mb-2">Help us personalize your experience (optional)</h2>
      
      <div>
        <label className="block text-sm font-medium mb-1">Full name</label>
        <input 
          type="text" 
          name="fullName"
          className="w-full px-3 py-2 border rounded" 
          value={formData.fullName}
          onChange={handleChange}
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1">Company size</label>
        <select 
          name="companySize"
          className="w-full px-3 py-2 border rounded"
          value={formData.companySize}
          onChange={handleChange}
        >
          <option>1-10</option>
          <option>11-50</option>
          <option>51-200</option>
          <option>201+</option>
        </select>
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1">How did you hear about us?</label>
        <input 
          type="text" 
          name="referralSource"
          className="w-full px-3 py-2 border rounded" 
          value={formData.referralSource}
          onChange={handleChange}
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1">Primary use case</label>
        <textarea 
          name="useCase"
          className="w-full px-3 py-2 border rounded" 
          rows={3}
          value={formData.useCase}
          onChange={handleChange}
        ></textarea>
      </div>
      
      <div className="flex gap-3">
        <button type="submit" className="flex-1 bg-blue-600 text-white py-2 rounded font-medium">Continue</button>
        <button type="button" onClick={handleSkip} className="flex-1 border py-2 rounded font-medium">Skip for now</button>
      </div>
    </form>
  );
}