import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Login from './components/Login.jsx'
import Error from './components/Error.jsx'

const appRouter=createBrowserRouter([{
  path:"/",
  element:<Login/>,
  errorElement:<Error/>,
},
  {
    path:"/home",
    element:<App/>,
    errorElement:<Error/>,
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter}>
    
    </RouterProvider>
  </StrictMode>,
)
