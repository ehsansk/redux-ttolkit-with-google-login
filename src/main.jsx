import React from 'react'
import { createRoot } from 'react-dom/client';
import './index.css'
import App from './App'
import { store } from './store'
import { Provider } from 'react-redux'
import { createClient } from '@supabase/supabase-js';
import { SessionContextProvider } from '@supabase/auth-helpers-react';

const supabase = createClient(
  "https://cjpcdptavgjfgrwbvqdr.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqcGNkcHRhdmdqZmdyd2J2cWRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUyNDk0NzksImV4cCI6MjAzMDgyNTQ3OX0.-b0Oqd_T0lkSckDeEIrALj4PUF_urUhGf6067TQs9PA" 
);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <SessionContextProvider supabaseClient={supabase}>
      <App />
    </SessionContextProvider>
  </Provider>
);