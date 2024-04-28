import logo from './logo.svg';
import './App.css';
import SearchBooks from './SearchBooks';
import { GoogleLogin } from '@react-oauth/google';
import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { AiOutlineLogin } from 'react-icons/ai';
import { FaSignInAlt } from 'react-icons/fa';
function App() {
  const [user, setUser] = useState(null); // Initialize user state as null
  const [profile, setProfile] = useState(null); // Initialize profile state as null

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log('Login Failed:', error)
  });

  useEffect(() => {
    if (user) {
      axios
        .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: 'application/json'
          }
        })
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  const logOut = () => {
    googleLogout();
    setUser(null); // Reset user state to null
    setProfile(null); // Reset profile state to null
  };

  return (
    <div className="App">
      <header className="w-full mb-10 text-center p-8 bg-gradient-to-b from-rose-300 via-pink-200 to-blue-200">
        <a className="text-6xl text-black hover:text-gray-600" to="/">Search Books</a>
        <p>    Sign In</p>
      </header>
      {user ? (
        <div>
          {profile && profile.picture && ( // Add additional null checks
            <img src={profile.picture} alt="user image" />
          )}
          <h3>User Logged in</h3>
          {profile && (
            <>
              <p>Name: {profile.name}</p>
              <p>Email Address: {profile.email}</p>
            </>
          )}
          <br />
          <br />
          <button onClick={logOut}>
          <AiOutlineLogin/>
            Log out</button>
        </div>
      ) : (
        <button onClick={() => login()}><FaSignInAlt/> Sign in with Google 🚀 </button>
      )}
      <SearchBooks />
    </div>
  );
  
}

export default App;
