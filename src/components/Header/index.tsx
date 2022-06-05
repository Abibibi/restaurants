import { FC } from "react";
import { SearchBox } from "react-instantsearch-hooks-web";
import Logo from "@/ui/logo.svg?component";

import "./Header.sass";

const Header: FC = () => (
  <header>
    <Logo />
    <SearchBox placeholder="Restaurant name, food type, city..." />
  </header>
);

export default Header;
