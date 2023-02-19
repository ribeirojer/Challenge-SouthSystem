import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="flex w-full items-center justify-between bg-white">
      <Link to={"/"} className="w-60 max-w-full px-4">
        <img
          src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo.svg"
          alt="logo"
          className="w-full block w-full py-5"
        />
      </Link>
      <div className="flex items-center px-4">
        <Link
          to={"/"}
          className="text-dark hover:text-primary py-3 px-7 text-base font-medium"
        >
          Login
        </Link>
        <Link
          to={"/"}
          className="bg-blue-500 rounded-lg py-3 px-7 text-base font-medium text-white hover:bg-opacity-90"
        >
          Sign Up
        </Link>
      </div>
    </header>
  );
};

export default Header;
