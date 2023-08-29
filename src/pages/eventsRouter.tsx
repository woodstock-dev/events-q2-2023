import { Routes, Route, Outlet } from "react-router-dom"
import { lazy, Suspense } from 'react'

const Events = () => {
  const Form = lazy(() => import('./form'))
  const EventPage = lazy(() => import('./eventList'))
  const PageNotFound = lazy(() => import('./notFound'))

  return(
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<EventPage />} /> 
        <Route path="add" element={<Form />} />
        <Route path="edit" element={<Form />} />
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
