import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';  // Import Provider from react-redux
import { store } from './store';     // Import the store you created

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>             {/* Wrap your App component in the Provider */}
      <App />
    </Provider>
  </React.StrictMode>
);

