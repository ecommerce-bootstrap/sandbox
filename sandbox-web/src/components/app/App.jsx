import React from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { verifyToken } from '../../utils';
import Home from '../Home';

export default function App() {
  async function responseGoogle(response) {
    const verify = await verifyToken(response);
    
    console.log(response);
  }
  
  return (
    <>
      <Home />
      <h1>Welcome!</h1>
      <GoogleLogin
        clientId="780582464161-06hdton6je6o0uu485f0rtbdej7rnvf5.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />

      <GoogleLogout
        clientId="780582464161-06hdton6je6o0uu485f0rtbdej7rnvf5.apps.googleusercontent.com"
        buttonText="Logout"
        onLogoutSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
    </>
  );
}
