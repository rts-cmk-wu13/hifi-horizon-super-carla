import { Outlet } from "react-router";
import Navigation from "./Naviagtion"
import { GlobalProvider } from "./context/GlobalContext";

export default function Layout() {
  return (
    <GlobalProvider>
      <div className="main-wrapper">
        <header>
          <Navigation />
        </header>
        <main>
          <Outlet />
        </main>
        <footer>
          <p>Footer</p>
        </footer>
      </div>
    </GlobalProvider>
  );
}
