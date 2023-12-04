import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router/router.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<div className='max-w-[1400px] mx-auto'>
   <AuthProvider>
   <QueryClientProvider client={queryClient}>
   <HelmetProvider>
    
        <RouterProvider router={router} />
      
    </HelmetProvider>
    </QueryClientProvider>
   </AuthProvider>
   </div>
  </React.StrictMode>,
)
