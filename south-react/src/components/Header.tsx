import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="flex w-full items-center justify-between bg-white">
      <Link to={"/"} className="w-60 max-w-full px-4">
        <img
          src="https://southsystem.com.br/wp-content/themes/southsystem/assets/img/logo-southsystem.svg"
          alt="logo"
          className="w-full block w-full py-8"
        />
      </Link>
      <div className="flex items-center px-4 text-base font-medium">
        <Link to={"/"} className="text-dark hover:text-primary py-3 px-7">
          Login
        </Link>
        <Link
          to={"/saved"}
          className="bg-blue-500 rounded-lg py-3 px-7 text-white hover:bg-opacity-90"
        >
          Salvos
        </Link>
      </div>
    </header>
  );
};

export default Header;
