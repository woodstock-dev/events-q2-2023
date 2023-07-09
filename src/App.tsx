import { Routes, Route, Outlet } from "react-router-dom";
import './app.css';
import Login from './pages/login';
import Header from './components/header';
import Footer from './components/footer';
import EventList from './pages/eventList';
import AddEvents from './pages/addEvents';
import { Box, Container } from "@mui/material";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Login />} />
        <Route path="eventList" element={<EventList />} />
        <Route path="addEvents" element={<AddEvents />} />
      </Route>
    </Routes>             
  )
}

function Layout() {
  return (
    <div>
      <Header />
      <div className="main-content">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
