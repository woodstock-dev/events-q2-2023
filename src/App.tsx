import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import Login from './pages/login'
import EventPage from './pages/eventPage'
import AddEvents from './pages/addEvents'
import {Routes, Route, Outlet} from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Login />} />
        <Route path='eventPage' element={<EventPage/>}/>
        <Route path='addEvents' element={<AddEvents/>} />
      </Route>
    </Routes>
  )
}

function Layout() {
  return(
    <div className='temp'>
      <Header/>
        <div className='grow'>
          <Outlet/>
        </div>
      <Footer/>
    </div>
  )
}

export default App
