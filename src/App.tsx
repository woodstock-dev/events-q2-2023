import { Routes, Route, Outlet } from "react-router-dom"
import { lazy, Suspense } from 'react'
import { Stack } from "@mui/material"
import Header from "./components/header"
import Footer from "./components/footer"

function App() {
  const Events = lazy(() => import('./pages/events'))
  const Login = lazy(() => import('./pages/login'))
  const PageNotFound = lazy(() => import('./pages/notFound'))

  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Login />} />
        <Route path="events/*" element={<Events />} />
        <Route path="/*" element={<PageNotFound />} />
      </Route>
    </Routes>
  )
}

function Layout() {
  return (
    <Stack 
      direction="column"
      sx={{
        minHeight: '100vh',
      }}>
      <Header />
        <Suspense 
          fallback={<div>Loading...</div>}
        >
          <Outlet />
        </Suspense>
      <Footer />
    </Stack>
  );
}

export default App
