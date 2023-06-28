import React from 'react'
import ReactDOM from 'react-dom/client'
import { Login } from './Login.tsx'
import { Register } from './Register.tsx'
import { Base } from './Base.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import { Details } from './Details.tsx'
import { Settings } from './Settings.tsx'
import { About } from './About.tsx'
import { Admin } from './Admin.tsx'
import { Add } from './Add.tsx'
import { Subscription } from './Subscription.tsx'

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
    path: '/details/:id', // Update the path to include a dynamic parameter
    element: <Details />,
  },
  {
    path: '/subscribe',
    element: null
  },
  {
    path: '/settings',
    element: <Settings/>
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/admin",
    element: <Admin/>
  },
  {
    path: "/admin/add",
    element: <Add/>
  },
  {
    path: "/sub",
    element: <Subscription/>
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
