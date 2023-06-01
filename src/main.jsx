import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.jsx'
import './index.css';
// import IncorrectApproach from '../src/concepts/vanillajs-in-react/IncorrectApproach';  
// import CorrectApproach from '../src/concepts/vanillajs-in-react/CorrectApproach';  
import IncorrectApproach from '../src/concepts/nesting-components/IncorrectApproach';  
import CorrectApproach from '../src/concepts/nesting-components/CorrectApproach';  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <IncorrectApproach />
    <br /><br /><br />
    <CorrectApproach />
  </React.StrictMode>,
);
