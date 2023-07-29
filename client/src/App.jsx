import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Outlet, RouterProvider,createBrowserRouter } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  const Layout = () => { 
    return (
      <div className='main'>
        <h1>Layout</h1>
        <Outlet />
      </div>
    )
  }


  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <h1>Home</h1>
        },
      ]
    },
  ])


  return (
    <RouterProvider router={router}/>
  )
}

export default App
