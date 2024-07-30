import React, { useState } from 'react';

const LandingPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  // Mock login function
  const handleLogin = () => {
    setUserName('Priyanshu kumar'); // Replace with actual user name after successful login
    setIsLoggedIn(true);
  };

  // Mock logout function
  const handleLogout = () => {
    setUserName('');
    setIsLoggedIn(false);
  };

  return (
    <div>
      <header>
        <h1>{isLoggedIn ? `Welcome, ${userName}` : 'Welcome, Guest'}</h1>
      </header>
      <main>
        {isLoggedIn ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <button onClick={handleLogin}>Login</button>
        )}
      </main>
    </div>
  );
};

export default LandingPage;
