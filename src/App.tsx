import { Routes, Route, Outlet } from "react-router-dom";
import './app.css';
import Login from './pages/login';
import Header from './components/header';
import Footer from './components/footer';
import Events from './pages/events';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Login />} />
        <Route path="events/*" element={<Events />} />
      </Route>
    </Routes>             
  )
}

function Layout() {
  return (
      <div className="wrapper">
        <Header />
        <div className="main-content">
          <Outlet />
        </div>
        <Footer />
      </div>
  )
}

export default App
