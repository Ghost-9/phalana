import {Outlet, RouterProvider,createBrowserRouter } from 'react-router-dom'
import './scss/app.scss'

// Routes
import Header from './Header/Header'
import Home from './Pages/Home/Home'
import RegistrationForm from './components/Form/Registration'
import Footer from './Footer/Footer'


function App() {

  const Layout = () => { 
    return (
      <div className='app'>
        <Header/>
        <Outlet />
        <Footer/>
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
        },
      ]
    },
        {
          path: '*',
          element: <RegistrationForm/>,
        }
   
  ])


  return (
    <RouterProvider router={router}/>
  )
}

export default App
