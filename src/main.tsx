import React from 'react';
import ReactDOM from 'react-dom/client';
import { ReactQueryDevtools } from 'react-query/devtools';
import axios from 'axios';

//
import App from '@src/App';
import { QueryClientProvider, queryClient } from '@src/react-query/queryClient';
import '@src/index.css';

axios.defaults.baseURL = 'http://localhost:3000';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
