import { Routes, Route, Outlet } from "react-router-dom";
import { Suspense, lazy } from "react";
const EventDetails = lazy(() => import("./eventDetails"));
const EventList = lazy(() => import("../components/eventList"));

const Events = () => {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Suspense><EventList /></Suspense>} />
        <Route path="details" element={<Suspense><EventDetails /></Suspense>} />
      </Route>
    </Routes>
  );
};

function Layout() {
  return (
    <Outlet />
  );
}

export default Events;
