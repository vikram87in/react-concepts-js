import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.jsx'
import './index.css';
// import IncorrectApproach from '../src/concepts/vanillajs-in-react/IncorrectApproach';  
// import CorrectApproach from '../src/concepts/vanillajs-in-react/CorrectApproach';  
// import IncorrectApproach from '../src/concepts/nesting-components/IncorrectApproach';
// import CorrectApproach from '../src/concepts/nesting-components/CorrectApproach';
// import FlushSyncExample from '../src/concepts/flush-sync-example/FlushSyncExample';
// import Parent from '../src/concepts/sending-jsx-to-child/Parent1';
// import Tracker from './concepts/render-props/Tracker';
// import ParentComponent from './concepts/hoc/ParentComponent';
// import DemoComponent from './concepts/accessibility/DemoComponent';
// import Form from './concepts/form-elements/Form';
// import ReactMemoComponent from './concepts/rendering-optimizations/ReactMemoComponent';
// import BreakingReactMemo from './concepts/rendering-optimizations/BreakingReactMemo';
// import StaleValues from './concepts/use-effect-scenarios/StaleValues';
import StaleValuesFix from './concepts/use-effect-scenarios/StaleValuesFix';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <StaleValuesFix />
  </React.StrictMode>,
);
