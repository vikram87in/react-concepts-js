import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import VanillaJSInReact from '../src/concepts/vanillajs-in-react/VanillaJSInReact';  
import CorrectReact from '../src/concepts/vanillajs-in-react/CorrectReact';  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <VanillaJSInReact />
    <CorrectReact />
  </React.StrictMode>,
)
