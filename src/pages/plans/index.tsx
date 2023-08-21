import { Routes, Route, Outlet } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Plans } from "../../components/plans";
const Details = lazy(() => import("./details"));
const PlanList = lazy(() => import("../../components/planList"));

const Index = () => {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Suspense><PlanList /></Suspense>} />
        <Route path="details" element={<Suspense><Details writable={false} /></Suspense>} />
        <Route path="add"  element={<Details writable={true} />} />
        <Route path="update" element={<Suspense><Details writable={false} /></Suspense>} />
      </Route>
    </Routes>
  );
};

function Layout() {
  return (
    <Plans>
      <Outlet />
    </Plans>
  );
}

export default Index;
