// singele comment
/* 
JS multiple comment
*/

import React from 'react';
import ReactDOM from 'react-dom/client';

// external css
import './index.css';

// external
import App from './App';
import reportWebVitals from './reportWebVitals';
import Counter from './app/Counter';
import { BrowserRouter } from 'react-router-dom';
import ResuabilityToast from './reusability/ReusabilityToast';

// Root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <ResuabilityToast></ResuabilityToast> */}
      <ResuabilityToast />
      {/* <App /> */}
      {/* <Counter /> */}
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
