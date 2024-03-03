import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const [toggleModal, setToggleModal] = useState(false);
  const { pathname } = useLocation();

  const handleLoginClick = () => {
    setToggleModal(!toggleModal); // Toggles the state of toggleModal
  };

  return (
    <nav className="border-[--my-purple] border-b-2 max-w-[90%] min-h-[10vh] mx-auto flex items-center justify-between flex-wrap gap-5">
      <h1 className="font-Pacifico italic text-[--my-purple] text-[2rem]">
        Quotie Pockets
      </h1>
      <ul className="text-white flex items-center gap-5">
        <li
          className={`${
            pathname === "/"
              ? "border-b-4 border-[--my-purple]"
              : "hover:border-b-4 border-[--my-purple]"
          }`}
        >
          <NavLink to="/">Home</NavLink>
        </li>
        <li
          className={`${
            pathname === "/about"
              ? "border-b-4 border-[--my-purple]"
              : "hover:border-b-4 border-[--my-purple]"
          }`}
        >
          <NavLink to="/about">About</NavLink>
        </li>
        <li
          className={`${
            pathname === "/contact"
              ? "border-b-4 border-[--my-purple]"
              : "hover:border-b-4 border-[--my-purple]"
          }`}
        >
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li
          className={`${
            pathname === "/privacy"
              ? "border-b-4 border-[--my-purple]"
              : "hover:border-b-4 border-[--my-purple]"
          }`}
        >
          <NavLink to="/privacy">Privacy</NavLink>
        </li>
        <li
          className={`${
            pathname === "/terms"
              ? "border-b-4 border-[--my-purple]"
              : "hover:border-b-4 border-[--my-purple]"
          }`}
        >
          <NavLink to="/terms">Terms</NavLink>
        </li>
      </ul>
      <div className="sm:mb-0 mb-5">
        <button
          onClick={handleLoginClick} // Call the function when the button is clicked
          type="button"
          className="border-4 rounded text-[1.2rem] border-[--my-purple] text-white font-semibold px-4 py-2"
        >
          Login
        </button>
      </div>
      {toggleModal && ( // Conditional rendering for the modal
        <div className="fixed bg-gray-500/40 w-full h-full top-0 left-0 flex justify-center items-center">
          <form className="p-5 border-4 border-[--my-purple] rounded grid gap-5">
            <div className="grid gap-3">
              <label htmlFor="email" className="text-[--my-purple]">
                Email
              </label>
              <input
                className="border-4 border-[--my-purple] p-2 rounded"
                type="email"
                inputMode="email"
                placeholder="Enter email"
              />
            </div>
            <div className="grid gap-3">
              <label htmlFor="password" className="text-[--my-purple]">
                Password
              </label>
              <input
                className="border-4 border-[--my-purple] p-2 rounded"
                type="password"
                placeholder="Enter password"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                className="px-4 py-2 text-white rounded font-semibold border-4 border-[--my-purple] bg-[--my-purple]"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      )}
    </nav>
  );
}
