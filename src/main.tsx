import React from 'react'
import ReactDOM from 'react-dom/client'
import { Login } from './Login.tsx'
import { Register } from './Register.tsx'
import { Base } from './Base.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import { About } from './About.tsx'
import { Settings } from './Settings.tsx'
import { Admin } from './Admin.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/signup",
    element: <Register/>
  },
  {
    path: "/main",
    element: <Base/>
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/settings",
    element: <Settings/>
  },
  {
    path: "/admin",
    element: <Admin/>
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
