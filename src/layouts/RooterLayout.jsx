import { Link, Outlet } from "react-router-dom";

function RooterLayout() {
  return (
    <div>
      <header className=" bg-base-100 shadow-lg">
        <div className="align-element navbar flex justify-between items-center">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            usersAll
          </Link>
          <Link to="/create" className="btn btn-success">
            Create
          </Link>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RooterLayout;
