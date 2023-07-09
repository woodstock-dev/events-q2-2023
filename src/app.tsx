import { Outlet, Route, Routes } from "react-router-dom";
import "./app.css";
import Login from "./pages/login";
import Events from "./pages/events";
import RequireAuth from "./components/requireAuth";
import Header from "./components/header";
import Footer from "./components/footer";
import React from "react";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Login />} />
        <Route
          path="events"
          element={
            <RequireAuth>
              <Events />
            </RequireAuth>
          }
        />
      </Route>
    </Routes>
  );
}

const Layout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

export default App;
