import { Outlet, Route, Routes } from 'react-router-dom'
import './app.css'
import Login from './pages/login'
import Events from './pages/events'
import RequireAuth from './components/requireAuth'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Login />} />
          <Route path="events" element={
            <RequireAuth><Events /></RequireAuth>
          } />
      </Route>
    </Routes>
  )
}

const Layout = () => {
  return(<>
    <Outlet />
  </>)
}

export default App
