import { FaBarsStaggered, FaAnglesRight } from "react-icons/fa6";
import { useState, useCallback, memo } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

// !Memoized NavLink component for better performance
const NavItem = memo(({ to, label, onClick, className, icon }) => (
  <NavLink to={to} className={className} onClick={onClick}>
    {label}
    {icon && icon}
  </NavLink>
));

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  const getNavLinkClass = useCallback(
    ({ isActive }) => `
    block py-2 ${
      isActive ? "text-black" : "hover:text-gray-700 duration-200 ease-in-out"
    }
  `,
    []
  );

  return (
    <div className="fixed top-0 left-0 z-50 bg-[#2a2a2a] shadow-md w-full py-4">
      <div className="md:container md:mx-auto mx-4 flex justify-between items-center">
        <div className="flex text-stone-200">
          <img className="h-9 mr-3" src={logo} alt="Logo" />

          <NavLink
            to="/"
            style={{
              fontWeight: 500,
              fontSize: "24px",
              letterSpacing: "0.5px",
            }}
          >
            <span className="hidden xs:inline">Authentication</span>
            <span className="xs:hidden">Auth</span>
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="ls:hidden text-stone-200 outline-none border-none text-2xl"
        >
          {isMenuOpen ? <FaAnglesRight /> : <FaBarsStaggered />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`
            fixed top-16 right-0 h-[calc(100vh-4rem)] xs:w-[450px] w-[80%] bg-[#2a2a2a] shadow-lg 
            transform transition-transform duration-300 ease-in-out
            ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
            ls:hidden flex flex-col p-4
          `}
          style={{ color: "#999", fontWeight: 500, fontSize: "17px" }}
        >
          <NavItem
            to="/logout"
            label="Logout"
            className={getNavLinkClass}
            onClick={closeMenu}
          />
        </div>

        {/* Desktop Menu */}
        <div
          className="ls:flex ls:space-x-4 hidden"
          style={{ color: "#999", fontWeight: 500, fontSize: "17px" }}
        >
          <NavItem to="/logout" label="Logout" className={getNavLinkClass} />
        </div>
      </div>
    </div>
  );
}

export default memo(Navbar);
