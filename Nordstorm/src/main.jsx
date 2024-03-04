import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
  domain="dev-vzzbht1t360oamvs.us.auth0.com"
  clientId="AnfyezrzGKiCeIkmZeGq2PH01dah5xUz"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>

  <React.StrictMode>
    <App />
  </React.StrictMode>,

  </Auth0Provider>
)
