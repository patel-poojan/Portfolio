import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu;
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu;
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div className="name_style">
        Poojan<span>.</span>
      </div>
      <a
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              onClick={() => {
                closeMenu();
                navigate("/");
              }}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="heroSection"
              className={`navbar--content ${
                location.pathname === "/" ? "navbar--active-content" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                closeMenu();
                navigate("/services");
              }}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="Services"
              className={`navbar--content ${
                location.pathname === "/services"
                  ? "navbar--active-content"
                  : ""
              }`}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                closeMenu();
                navigate("/portfolio");
              }}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="MyPortfolio"
              className={`navbar--content ${
                location.pathname === "/portfolio"
                  ? "navbar--active-content"
                  : ""
              }`}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                closeMenu();
                navigate("/aboutme");
              }}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="AboutMe"
              className={`navbar--content ${
                location.pathname === "/aboutme" ? "navbar--active-content" : ""
              }`}
            >
              About Me
            </Link>
          </li>
        </ul>
      </div>
      <Link
        onClick={() => {
          closeMenu();
          navigate("/contactme");
        }}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="Contact"
        className={`btn btn-outline-primary  ${
          location.pathname === "/contactme"
            ? "navbar--active-content !bg-primary"
            : ""
        }`}
      >
        Contact Me
      </Link>
    </nav>
  );
}

export default Navbar;

// import { useState, useEffect } from "react";
// import { Link } from "react-scroll";

// function Navbar() {
//   const [navActive, setNavActive] = useState(false);

//   const toggleNav = () => {
//     setNavActive(!navActive);
//   };

//   const closeMenu = () => {
//     setNavActive(false);
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth <= 500) {
//         closeMenu;
//       }
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   useEffect(() => {
//     if (window.innerWidth <= 1200) {
//       closeMenu;
//     }
//   }, []);

//   return (
//     <nav className={`navbar ${navActive ? "active" : ""}`}>
//       <div>
//         <img src="./img/logo.svg" alt="Logoipsum" />
//       </div>
//       <a
//         className={`nav__hamburger ${navActive ? "active" : ""}`}
//         onClick={toggleNav}
//       >
//         <span className="nav__hamburger__line"></span>
//         <span className="nav__hamburger__line"></span>
//         <span className="nav__hamburger__line"></span>
//       </a>
//       <div className={`navbar--items ${navActive ? "active" : ""}`}>
//         <ul>
//           <li>
//             <Link
//               onClick={closeMenu}
//               activeClass="navbar--active-content"
//               spy={true}
//               smooth={true}
//               offset={-70}
//               duration={500}
//               to="heroSection"
//               className="navbar--content"
//             >
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link
//               onClick={closeMenu}
//               activeClass="navbar--active-content"
//               spy={true}
//               smooth={true}
//               offset={-70}
//               duration={500}
//               to="MyPortfolio"
//               className="navbar--content"
//             >
//               Portfolio
//             </Link>
//           </li>
//           <li>
//             <Link
//               onClick={closeMenu}
//               activeClass="navbar--active-content"
//               spy={true}
//               smooth={true}
//               offset={-70}
//               duration={500}
//               to="AboutMe"
//               className="navbar--content"
//             >
//               About Me
//             </Link>
//           </li>
//           <li>
//             <Link
//               onClick={closeMenu}
//               activeClass="navbar--active-content"
//               spy={true}
//               smooth={true}
//               offset={-70}
//               duration={500}
//               to="testimonial"
//               className="navbar--content"
//             >
//               Testimonials
//             </Link>
//           </li>
//         </ul>
//       </div>
//       <Link
//         onClick={closeMenu}
//         activeClass="navbar--active-content"
//         spy={true}
//         smooth={true}
//         offset={-70}
//         duration={500}
//         to="Contact"
//         className="btn btn-outline-primary"
//       >
//         Contact Me
//       </Link>
//     </nav>
//   );
// }

// export default Navbar;
