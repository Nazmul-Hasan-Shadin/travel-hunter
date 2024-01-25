import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Routes.jsx'
import Home from './pages/Home/Home/Home.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <div className='max-w-[1990px] mx-auto'>
   <RouterProvider router={router}>
        <Home></Home>
   </RouterProvider>
   </div>
  </React.StrictMode>,
)
