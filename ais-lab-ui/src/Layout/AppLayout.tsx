import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function AppLayout() {
  return (
    <div className="relative">
      <Header />
      <main className="mt-30 flex-1">
        <Outlet />
      </main>
    </div>
  );
}
