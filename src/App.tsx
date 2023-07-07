import { Routes, Route, Outlet } from "react-router-dom";
import './app.css';
import Login from './pages/login';
import Header from './components/header';
import Footer from './components/footer';
import ShowEvents from './pages/showEvents';
import AddEvents from './pages/addEvents';
import ViewEvent from './pages/viewEvent';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<ShowEvents />} />
        <Route index element={<ViewEvent />} />
        <Route path="/pages/addEvents" element={<AddEvents />} />
        <Route path="/pages/login" element={<Login />} />
      </Route>
    </Routes>
  )
}
function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App
