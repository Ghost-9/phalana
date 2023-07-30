import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Outlet, RouterProvider,createBrowserRouter } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Home from './Pages/Home/Home'
import RegistrationForm from './Components/Form/Registration'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  const Layout = () => { 
    return (
      <div className='app'>
        <Navbar/>
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
          element: <Home />,
        },
        {
          path: '/registration',
          element: <RegistrationForm />,
        }
      ]
    },
  ])


  return (
    <RouterProvider router={router}/>
  )
}

export default App
