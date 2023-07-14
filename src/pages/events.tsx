import EventListItem from "../components/eventListItem";
import EventDetails from "./eventDetails";
import { Routes, Route, Outlet } from "react-router-dom";

const Events = () => {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<EventListItem />} />
        <Route path="details" element={<EventDetails />} />
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
