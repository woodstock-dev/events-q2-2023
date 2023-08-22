import { Routes, Route, Outlet } from "react-router-dom"
import { lazy, Suspense } from 'react'

const Events = () => {
  const Add = lazy(() => import('./add'))
  const EventPage = lazy(() => import('./eventPage'))
  const PageNotFound = lazy(() => import('./notFound'))
  const Edit = lazy(() => import('./detail'))

  return(
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<EventPage />} /> 
        <Route path="add" element={<Add />} />
        <Route path="edit" element={<Edit />} />
        <Route path="/*" element={<PageNotFound />} />
      </Route>
    </Routes>
  )

  function Layout() {
    return (
    <Suspense fallback={<div>Loading...</div>}>
      <Outlet />
    </Suspense>
  )}
}

export default Events
