import { NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();
  return (
    <nav className="border-[--my-purple] border-b-2 max-w-[90%] min-h-[10vh] mx-auto flex items-center justify-between flex-wrap gap-5">
      <h1 className="font-Pacifico italic text-[--my-purple] text-[2rem]">
        Quotie Pockets
      </h1>
      <ul className="text-white flex items-center gap-5">
        <li className={`${pathname === "/" ? "border-b-4 border-[--my-purple]" : "hover:border-b-4 border-[--my-purple]"}`}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className={`${pathname === "/about" ? "border-b-4 border-[--my-purple]" : "hover:border-b-4 border-[--my-purple]"}`}>
          <NavLink to="/about">About</NavLink>
        </li>
        <li className={`${pathname === "/contact" ? "border-b-4 border-[--my-purple]" : "hover:border-b-4 border-[--my-purple]"}`}>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li className={`${pathname === "/privacy" ? "border-b-4 border-[--my-purple]" : "hover:border-b-4 border-[--my-purple]"}`}>
          <NavLink to="/privacy">Privacy</NavLink>
        </li>
        <li className={`${pathname === "/terms" ? "border-b-4 border-[--my-purple]" : "hover:border-b-4 border-[--my-purple]"}`}>
          <NavLink to="/terms">Terms</NavLink>
        </li>
      </ul>
      <div className="sm:mb-0 mb-5">
        <button
          type="button"
          className="border-4 rounded text-[1.2rem] border-[--my-purple] text-white font-semibold px-4 py-2"
        >
          Login
        </button>
      </div>
    </nav>
  );
}
