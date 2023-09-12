import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { ThemeProvider } from '@emotion/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider
      theme={{
        colors: {
          neutral: '#e3e0cf',
          good: 'green',
          bad: 'red',
        },
        spacing: value => {
          return `${value * 4}px`;
        },
      }}
    >
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
