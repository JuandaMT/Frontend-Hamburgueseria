import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";

const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  return (
    <nav>
      <div>
        {user ? (
          <>
            <span onClick={onLogout}>Logout</span>
            <span>
              <Link to="/profile">{user.name}</Link>
            </span>
          </>
        ) : (
          <>
            <span>
              <Link to={"/login"}>Login</Link>
              <Link to={"/register"}>Register</Link>
            </span>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
