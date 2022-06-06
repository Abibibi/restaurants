import { FC } from "react";
import { SearchBox } from "react-instantsearch-hooks-web";
import Logo from "@/ui/logo.svg?component";

import "./Header.sass";

const Header: FC = () => (
  <header className="header">
    <div className="header-logo">
      <Logo />
    </div>
    <div className="header-search">
      <h1>Experience food.</h1>
      <SearchBox placeholder="Search by restaurant name, cuisine, city..." />
    </div>
  </header>
);

export default Header;
