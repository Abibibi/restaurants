import { FC } from "react";
import classnames from "classnames";

import Facets from "@/components/Facets";

import { CloseFilters } from "@/helpers/interfaces";

import "./FacetsMobile.sass";

const FacetsMobile: FC<CloseFilters> = ({
  isFilter,
  closeFilters,
}: CloseFilters) => {
  const classes: string = classnames({
    "facets-mobile-screen": true,
    "facets-mobile-screen--visible": isFilter,
  });

  return (
    <div className={classes}>
      <h1>Filters</h1>
      <Facets />
      <button className="facets-mobile-screen-button" onClick={closeFilters}>
        Set Filters
      </button>
    </div>
  );
};

export default FacetsMobile;
