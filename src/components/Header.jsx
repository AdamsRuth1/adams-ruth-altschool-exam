import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../assets/Logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


  return (
    <>
      <header
        style={{
          height: "10%",
          width: "100vw",
          position: "fixed",
          top: 0,
          left: 0,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 40px",
          backgroundColor: "#ffffff",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          zIndex: 999,
        }}
      >
        <div>
          <NavLink to="/">
            <img
              src={Logo}
              alt="Github Logo"
              className="d-block"
              style={{ height: "40px" }}
            />
          </NavLink>
        </div>
        <div className="d-none d-lg-flex">
          <button className="btn-sample" style={{ marginRight: "25px" }}>
            <NavLink
              className={`transparent-btn ${
                location.pathname === "/" ? "active" : ""
              }`}
              to="/"
            >
              My Repos
            </NavLink>
          </button>
          <button className="btn-sample" style={{ marginRight: "30px" }}>
            <NavLink
              className={`transparent-btn ${
                location.pathname === "/404" ? "active" : ""
              }`}
              to="/404"
            >
              404
            </NavLink>
          </button>
        </div>
        <div className="d-lg-none">
          {isMobileMenuOpen ? (
            <>
              <FiX
                onClick={toggleMobileMenu}
                style={{ fontSize: "24px", cursor: "pointer" }}
              />
              <div
                style={{
                  position: "fixed",
                  top: "10%",
                  left: 0,
                  width: "100vw",
                  height: "90vh",
                  backgroundColor: "#ffffff",
                  zIndex: 999,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingLeft: "30px",
                  paddingRight: "30px",
                }}
              >
                <button className="btn-sample" style={{ marginBottom: "30px" }}>
                  <NavLink className="transparent-btn" to="/">
                    My Repos
                  </NavLink>
                </button>
                <button className="btn-sample" style={{ marginBottom: "35px" }}>
                  <NavLink className="transparent-btn" to="/404">
                    404
                  </NavLink>
                </button>
              </div>
            </>
          ) : (
            <FiMenu
              onClick={toggleMobileMenu}
              style={{ fontSize: "24px", cursor: "pointer" }}
            />
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
