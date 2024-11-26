

import React, { useState } from 'react';
import signin from '../images/signin.svg'

function SignInForm() {
    const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Regex للتحقق من صحة الإيميل
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError(true); // إظهار رسالة الخطأ
    } else {
      setEmailError(false); // إخفاء رسالة الخطأ
    }
  };
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Section - Image */}
      <div className="flex-1  flex items-center justify-center">
        <div className="text-center px-4">
          {/* Image */}
          <h2 className="text-2xl font-bold text-gray-700 mt-6">
            Mark Your Schedule According To Your Calender
          </h2>
          <p className="text-gray-500 mt-2">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <img
            src={signin} 
            width={1255}
            height={1255}  
            className="mx-auto"
          />
        </div>
      </div>

      {/* Right Section - Form */}
      <div className="flex items-center justify-center min-h-screen ">
      <div
        className="bg-white rounded-lg shadow-lg p-8 mt-17 mr-9 "
        style={{ width: '660px', height: '600px' }}
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">Sign In</h2>
        <p className="text-center text-gray-600 mb-6">Your learning awaits. Log In now!</p>
        <form>
          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2 text-left pl-1"
            >
              Email<span className="text-[#FF4D4F]">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Example@gmail.com"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                emailError ? 'border-[#FF4D4F] focus:ring-[#FF4D4F]' : 'border-gray-300 focus:ring-[#0C7489]'
              }`}
            />
            {emailError && (
              <p className="text-[#FF4D4F] text-sm mt-1">Please input valid email. This email is invalid.</p>
            )}
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2 text-left pl-1"
            >
              Password<span className="text-[#FF4D4F]">*</span>
            </label>
            <input
              type="password"
              id="password"
              placeholder="Input password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0C7489]"
            />
            <div className="text-right mt-1">
              <a href="#" className="text-[#0066D8] text-sm hover:underline">Forgot Password?</a>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-[#0C7489] text-white py-2 px-4 rounded-lg hover:bg-[#065a67] transition duration-300"
          >
            Login
          </button>

          {/* Continue with Google */}
          <div className="flex items-center justify-center mt-4">
            <div className="w-1/3 border-b border-gray-300"></div>
            <p className="text-gray-600 px-2 text-sm">Or continue with</p>
            <div className="w-1/3 border-b border-gray-300"></div>
          </div>
          <button
            type="button"
            className="w-full flex items-center justify-center mt-4 py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-100"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
              alt="Google Logo"
              className="w-5 h-5 mr-2"
            />
            Continue with Google
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="text-gray-600 text-sm text-center mt-6">
          Don't have an account?{' '}
          <a href="/signup" className="text-[#0066D8] hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
    </div>
  );
}

export default SignInForm;
