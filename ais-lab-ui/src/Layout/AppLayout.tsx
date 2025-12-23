import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../components/Header";

import PageTransitions from "@/transitions/PageTransitions";

export function AppLayout() {
  const location = useLocation();

  return (
    <div className="relative">
      <Header />
      <main className="mt-30 flex-1">
        <PageTransitions key={location.pathname}>
          <Outlet />
        </PageTransitions>
      </main>
    </div>
  );
}
