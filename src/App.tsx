import { Routes, Route, Outlet } from "react-router-dom"
import { lazy, Suspense } from 'react'
import { Stack } from "@mui/material"

const Footer = lazy(() => import('./components/footer'))
const Header = lazy(() => import('./components/header'))
const EventPage = lazy(() => import('./pages/eventPage'))
const Add = lazy(() => import('./components/add'))
const Edit = lazy(() => import('./components/edit'))
// const View = lazy(() => import('./components/view'))
const Login = lazy(() => import('./pages/login'))

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Login />} />
        <Route path="/eventPage" >
          <Route index element={<EventPage />} />
          <Route path="/eventPage/add" element={<Add />} />
          <Route path="/eventPage/:id" element={<Edit />} />
        </Route>
      </Route>
    </Routes>
  )
}

function Layout() {
  return (
    <Suspense>
        <Stack direction="column"
          sx={{
            minHeight: '100vh',
          }}>
          <Header />
          <Outlet />
          <Footer />
        </Stack>
    </Suspense>
  );
}

export default App
