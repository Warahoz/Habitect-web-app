import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-amber-600">
          HABITECT
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-amber-600" : "text-gray-700 hover:text-amber-600"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-amber-600" : "text-gray-700 hover:text-amber-600"
            }
          >
            About
          </NavLink>
          
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-amber-600" : "text-gray-700 hover:text-amber-600"
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Login Button */}
        <Link
          to="/login"
          className="bg-amber-600 text-white px-5 py-2 rounded hover:bg-amber-700 transition"
        >
          Login
        </Link>

      </div>
    </header>
  );
};

export default Navbar;