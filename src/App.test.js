import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client'
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  
  // Use createRoot from 'react-dom/client'
  const root = ReactDOM.createRoot(div);
  
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});
