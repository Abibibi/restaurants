import { FC } from "react";
import { SearchBox } from "react-instantsearch-hooks-web";

import "./Banner.sass";

const Banner: FC = () => (
  <div className="banner-search">
    <h1>Experience food.</h1>
    <SearchBox placeholder="Search by restaurant name, cuisine, city..." />
  </div>
);

export default Banner;
