
import Login from './pages/login'
import AddEvents from './pages/addEvents'
import Header from './components/header'
import Footer from './components/footer'


import { ReactDOM } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Router>

      <Header/>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/addEvents' element={<AddEvents/>}></Route>
      </Routes>
      <Footer />
      
   </Router>
  )
}

export default App
