/**
 * Copyright 2023 Josilyn McGuinness
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


import { Routes, Route, Outlet } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Plans } from "../../components/plans";
const Details = lazy(() => import("./details"));
const PlanList = lazy(() => import("../../components/planList"));

const Index = () => {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PlanList />} />
        <Route path="details" element={<Suspense key="details"><Details writable={false} /></Suspense>} />
        <Route path="add"  element={<Suspense key="add"><Details writable={true} /></Suspense>} />
        <Route path="update" element={<Suspense key="update"><Details writable={false} /></Suspense>} />
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
