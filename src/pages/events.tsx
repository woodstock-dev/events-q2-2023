// Copyright 2023 YOUR NAME HERE
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
import { Routes, Route, Outlet } from "react-router-dom"
import { lazy, Suspense } from 'react'

const Events = () => {
  const Add = lazy(() => import('./add'))
  const EventPage = lazy(() => import('./eventPage'))
  const PageNotFound = lazy(() => import('./notFound'))
  const Edit = lazy(() => import('./edit'))

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
