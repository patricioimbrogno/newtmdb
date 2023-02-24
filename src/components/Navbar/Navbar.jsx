import React from "react";
import logo from "../../assets/images/logo.png";
import { useSelector } from "react-redux";


export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const users = useSelector((state) => state.users);
 console.log(users.loggedInUser)
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-black">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="/"
            >
              <img src={logo} alt="logo" style={{ height: "35px" }}></img>
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
         
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="/login"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                  {users.loggedInUser ? ( <span className="ml-2">{users.user.data.username}</span>) : ( <span className="ml-2">Log In</span>)}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="/register"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                  {users.loggedInUser  ? ( <span className="ml-2">Log Out</span>) : ( <span className="ml-2">Register</span>)}
  
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
