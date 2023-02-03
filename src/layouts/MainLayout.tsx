import { Link, NavLink, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <div id="sidebar">
        <h1>Johansen Dev</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/tools/bin2dec"
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
              >
                Binary to Decimals
              </NavLink>
            </li>
            <li>
              <Link to="/tools/bin2dec">Coming soon...</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
