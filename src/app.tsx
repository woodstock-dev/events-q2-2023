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
import './app.css';
import Header from './components/header';
import Footer from './components/footer';
import { Suspense, lazy } from "react";
import RequireAuth from "./components/requireAuth";
const Login = lazy(() => import('./pages/login'));
const Index = lazy(() => import('./pages/plans/index'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Suspense><Login /></Suspense>} />
        <Route path="plans/*" element={<Suspense><RequireAuth><Index /></RequireAuth></Suspense>} />
      </Route>
    </Routes>             
  )
}

function Layout() {
  return (
      <div className="wrapper">
        <Header />
        <div className="main-content">
          <Outlet />
        </div>
        <Footer />
      </div>
  )
}

export default App
