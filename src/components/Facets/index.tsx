import { FC } from "react";
import { RefinementList } from "react-instantsearch-hooks-web";
import { GiHotMeal } from "react-icons/gi";
import { MdBrunchDining, MdPayment } from "react-icons/md";
import { BiDollarCircle } from "react-icons/bi";

import "./Facets.sass";

const Facets: FC = () => (
  <div className="facets">
    <div className="facet">
      <h3>
        <GiHotMeal />
        Cuisine
      </h3>
      <RefinementList attribute="food_type" />
    </div>

    <div className="facet">
      <h3>
        <MdBrunchDining />
        Dining style
      </h3>
      <RefinementList attribute="dining_style" />
    </div>

    <div className="facet">
      <h3>
        <BiDollarCircle />
        PRICE RANGES
      </h3>
      <RefinementList attribute="price_range" />
    </div>

    <div className="facet">
      <h3>
        <MdPayment />
        Payment options
      </h3>
      <RefinementList attribute="payment_options" />
    </div>
  </div>
);

export default Facets;
