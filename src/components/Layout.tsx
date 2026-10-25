import { Outlet } from "react-router-dom";

import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import ScrollToTop from "@/components/ScrollToTop";

/**
 * Shared page shell. The footer is pushed to the bottom of the viewport
 * on short pages via flex + min-h-dvh.
 */
export default function Layout() {
  return (
    <div className="flex min-h-dvh flex-col">
      <ScrollToTop />
      <NavBar />
      <main className="flex-1">
        {/* The active page renders here */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}