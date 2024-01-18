import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./vanLife.css";
import Layout from "./components/Layout";
import Home from "./components/Home";
import LayoutHost from "./components/Host/LayoutHost";
import Dashboard from "./components/Host/Dashboard";
import Income from "./components/Host/Income";
import HostVans from "./components/Host/HostVans";
import HostVanDetails from "./components/Host/HostVanDetails";
import HostVanInfo from "./components/Host/HostVanInfo";
import HostVanPricing from "./components/Host/HostVanPricing";
import HostVanPhotos from "./components/Host/HostVanPhotos";
import Reviews from "./components/Host/Reviews";
import About from "./components/About";
import Vans, { loader as vansLoader } from "./components/Vans";
import VanDetail from "./components/VanDetail";
import NotFound from "./components/NotFound";
import Error from "./components/Error";

import "./server";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="vans"
        element={<Vans />}
        loader={vansLoader}
        errorElement={<Error />}
      />
      <Route path="vans/:id" element={<VanDetail />} />

      <Route path="/host" element={<LayoutHost />}>
        <Route index element={<Dashboard />} />
        <Route path="income" element={<Income />} />
        <Route path="vans" element={<HostVans />} />
        <Route path="vans/:id" element={<HostVanDetails />}>
          <Route index element={<HostVanInfo />} />
          <Route path="pricing" element={<HostVanPricing />} />
          <Route path="photos" element={<HostVanPhotos />} />
        </Route>
        <Route path="reviews" element={<Reviews />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
