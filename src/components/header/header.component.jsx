import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    // header
    <div className="w-full h-16 shadow-md flex justify-between items-center mx-auto px-5">
      <div className="logo flex gap-2 font-semibold">
        <img src="/vite.svg" alt="logo" />
        <h2 className="text-violet-500 text-xl">Employee Management</h2>
      </div>
      <nav>
        <ul className="flex gap-5 items-center font-semibold">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "shadow-sm p-2 rounded-md bg-slate-300"
                  : "hover:shadow-sm p-2 rounded-md hover:bg-slate-100"
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/employers"
              className={({ isActive }) =>
                isActive
                  ? "shadow-sm p-2 rounded-md bg-slate-300"
                  : "hover:shadow-sm p-2 rounded-md hover:bg-slate-100"
              }
            >
              Employers
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/addEmployee"
              className={({ isActive }) =>
                isActive
                  ? "shadow-sm p-2 rounded-md bg-slate-300"
                  : "hover:shadow-sm p-2 rounded-md hover:bg-slate-100"
              }
            >
              Add Employee
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
