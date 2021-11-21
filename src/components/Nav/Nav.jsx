import "./Nav.css";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LogOutButton from "../LogOutButton/LogOutButton";

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">From the Apple Tree</h2>
      </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {user.id === null && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="navLink" to="/user">
              Home
            </Link>

            <Link className="navLink" to="/choose">
              Browse
            </Link>

            <Link className="navLink" to="/compare">
              Compare Products
            </Link>

            {user.clearance_level > 1 && (
              <Link className="navLink" to="/admin">
                Admin
              </Link>
            )}
            <LogOutButton className="navLink" />
          </>
        )}

        <Link className="navLink" to="/about">
          About
        </Link>
      </div>
    </div>
  );
}

export default Nav;
