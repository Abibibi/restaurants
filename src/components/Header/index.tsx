import { FC } from "react";
import Logo from "@/ui/logo.svg?component";

import "./Header.sass";
import { Link } from "react-router-dom";

const Header: FC = () => (
  <header className="header">
    <div className="header-logo">
      <Link to="/">
        <Logo />
      </Link>
    </div>
    <Link to="/add">Add a new restaurant</Link>
  </header>
);

export default Header;
