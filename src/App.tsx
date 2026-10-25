import { HashRouter, Route, Routes } from "react-router-dom";

import Layout from "@/components/Layout";
import About from "@/pages/About";
import Beaches from "@/pages/Beaches";
import Home from "@/pages/Home";
import Safety from "@/pages/Safety";

/**
 * Root component. HashRouter is used (rather than BrowserRouter) because
 * GitHub Pages is a static host and can't serve deep links on refresh.
 */
export default function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Every page renders inside Layout (navbar + footer) */}
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="beaches" element={<Beaches />} />
          <Route path="safety" element={<Safety />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}