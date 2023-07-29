import { Routes, Route, Outlet } from "react-router-dom";
import './app.css';
import Header from './components/header';
import Footer from './components/footer';
import { Suspense, lazy } from "react";
import RequireAuth from "./components/requireAuth";
const Login = lazy(() => import('./pages/login'));
const Events = lazy(() => import('./pages/events'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Suspense><Login /></Suspense>} />
        <Route path="events/*" element={<Suspense><RequireAuth><Events /></RequireAuth></Suspense>} />
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
