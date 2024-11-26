import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header  from './components/Header'
import Footer from './components/Footer'
import SignUpForm from './components/SignUpForm'
import SignInForm from './components/SignInForm'

function App() {
  
  return (
    <div className="bg-[#f6fbfc] min-h-screen">
    <Header />
    <main className="container mx-auto px-4 py-8">
      <SignUpForm />
      <SignInForm />
    </main>
    <Footer />
  </div>
  );
}

export default App
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import SignInForm from './components/SignInForm';
// import SignUpForm from './components/SignUpForm';
// import Header from './components/Header';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <Router>
//       <div>
//         <h1>Test Application</h1>
//       <Routes>
//         <Route path="/" element={<Header />} />
//         <Route path="/signin" element={<SignInForm />} />
//         <Route path="/signup" element={<SignUpForm />} />
//         <Route path="/footer" element={<Footer />} />
//       </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
