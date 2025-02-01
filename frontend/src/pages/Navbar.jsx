import { useState } from "react";
import { Link } from "react-router-dom";
import profile_img from "../assets/images/profile-img.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full flex justify-center mt-5 r">
      <nav className="bg-black border-white py-4 fixed top-0 left-0 right-0 z-50 w-[100%] rounded-3xl items-center border">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={profile_img}
              className="h-8 mr-3 sm:h-10"
              alt="Profile Logo"
            />
            <span className="self-center whitespace-nowrap text-white text-3xl">
              SANJAY<span className="font-bold">GAWAI</span>
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-white rounded-lg lg:hidden"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            {!isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            )}
          </button>

          {/* Navigation Menu */}
          <div
            className={`lg:flex lg:w-auto lg:order-1 ${
              isMenuOpen ? "block" : "hidden"
            } absolute top-full left-0 right-0 bg-black lg:bg-transparent lg:relative z-50 p-5 lg:p-0`}
            id="mobile-menu"
          >
            <ul className="flex flex-col lg:flex-row lg:space-x-8 text-xl">
              {/* <li>
                <Link
                  to="/"
                  className="block py-2 text-white hover:text-blue-700"
                >
                  Home
                </Link>
              </li> */}
              {/* <li>
                <Link
                  to="/work-with"
                  className="block py-2 text-white hover:text-blue-700"
                >
                  Work with
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="block py-2 text-white hover:text-blue-700"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="block py-2 text-white hover:text-blue-700"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/certificates"
                  className="block py-2 text-white hover:text-blue-700"
                >
                  Certificates
                </Link>
              </li> */}
              {/* <li>
                <Link
                  to="/blog"
                  className="block py-2 text-white hover:text-blue-700"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/roadmap"
                  className="block py-2 text-white hover:text-blue-700"
                >
                  Roadmap
                </Link>
              </li> */}
              {/* <li>
                <Link
                  to="/contact"
                  className="block py-2 text-white hover:text-blue-700"
                >
                  Contact
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;



// import { useState } from 'react';
// import profile_img from '../assets/images/profile-img.png';
// import { useNavigate } from 'react-router-dom';

// const Navbar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const navigate = useNavigate();

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     const handleNavigation = (path: string) => {
//         navigate(path);
//     };

//     return (
//         <nav className="bg-white border-white py-2.5 sticky top-0">
//             <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
//                 <a href="#" className="flex items-center">
//                     <img
//                         src={profile_img}
//                         className="h-6 mr-3 sm:h-9"
//                         alt="Landwind Logo"
//                     />
//                     <span className="self-center text-xl font-semibold whitespace-nowrap ">
//                         Sanjay Gawai
//                     </span>
//                 </a>
//                 <div className="flex items-center lg:order-2">
//                     <a
//                         href="https://themesberg.com/product/tailwind-css/landing-page"
//                         className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                     >
//                         Download Resume
//                     </a>
//                     <button
//                         onClick={toggleMenu}
//                         type="button"
//                         className="inline-flex items-center p-2 ml-1 text-sm text-white rounded-lg lg:hidden hover:bg-white focus:outline-none focus:ring-2 focus:ring-white dark:text-white dark:hover:bg-white dark:focus:ring-white"
//                         aria-controls="mobile-menu-2"
//                         aria-expanded={isMenuOpen ? "true" : "false"}
//                     >
//                         <span className="sr-only">Open main menu</span>
//                         <svg
//                             className={`w-6 h-6 ${isMenuOpen ? 'hidden' : ''}`}
//                             fill="currentColor"
//                             viewBox="0 0 20 20"
//                             xmlns="http://www.w3.org/2000/svg"
//                         >
//                             <path
//                                 fillRule="evenodd"
//                                 d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
//                                 clipRule="evenodd"
//                             ></path>
//                         </svg>
//                         <svg
//                             className={`w-6 h-6 ${!isMenuOpen ? 'hidden' : ''}`}
//                             fill="currentColor"
//                             viewBox="0 0 20 20"
//                             xmlns="http://www.w3.org/2000/svg"
//                         >
//                             <path
//                                 fillRule="evenodd"
//                                 d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                                 clipRule="evenodd"
//                             ></path>
//                         </svg>
//                     </button>
//                 </div>
//                 <div
//                     className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${isMenuOpen ? 'block' : 'hidden'}`}
//                     id="mobile-menu-2"
//                 >
//                     <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
//                         <li>
//                             <button
//                                 onClick={() => handleNavigation('/')}
//                                 className="block py-2 pl-3 pr-4 text-white hover:text-blue-700 lg:p-0 dark:text-white dark:hover:text-blue-500"
//                             >
//                                 Home
//                             </button>
//                         </li>
//                         <li>
//                             <button
//                                 onClick={() => handleNavigation('/work-with')}
//                                 className="block py-2 pl-3 pr-4 text-white hover:text-blue-700 lg:p-0 dark:text-white dark:hover:text-blue-500"
//                             >
//                                 Work with
//                             </button>
//                         </li>
//                         <li>
//                             <button
//                                 onClick={() => handleNavigation('/services')}
//                                 className="block py-2 pl-3 pr-4 text-white hover:text-blue-700 lg:p-0 dark:text-white dark:hover:text-blue-500"
//                             >
//                                 Services
//                             </button>
//                         </li>
//                         <li>
//                             <button
//                                 onClick={() => handleNavigation('/projects')}
//                                 className="block py-2 pl-3 pr-4 text-white hover:text-blue-700 lg:p-0 dark:text-white dark:hover:text-blue-500"
//                             >
//                                 Projects
//                             </button>
//                         </li>
//                         <li>
//                             <button
//                                 onClick={() => handleNavigation('/certificates')}
//                                 className="block py-2 pl-3 pr-4 text-white hover:text-blue-700 lg:p-0 dark:text-white dark:hover:text-blue-500"
//                             >
//                                 Certificates
//                             </button>
//                         </li>
//                         <li>
//                             <button
//                                 onClick={() => handleNavigation('/blog')}
//                                 className="block py-2 pl-3 pr-4 text-white hover:text-blue-700 lg:p-0 dark:text-white dark:hover:text-blue-500"
//                             >
//                                 Blog
//                             </button>
//                         </li>
//                         <li>
//                             <button
//                                 onClick={() => handleNavigation('/roadmap')}
//                                 className="block py-2 pl-3 pr-4 text-white hover:text-blue-700 lg:p-0 dark:text-white dark:hover:text-blue-500"
//                             >
//                                 Roadmap
//                             </button>
//                         </li>
//                         <li>
//                             <button
//                                 onClick={() => handleNavigation('/contact')}
//                                 className="block py-2 pl-3 pr-4 text-white hover:text-blue-700 lg:p-0 dark:text-white dark:hover:text-blue-500"
//                             >
//                                 Contact
//                             </button>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;
