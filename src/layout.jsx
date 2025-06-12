import { Outlet } from "react-router";
import Navigation from "./Naviagtion"

export default function Layout() {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}
