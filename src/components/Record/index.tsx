import { FC } from "react";
import { BsTrash } from "react-icons/bs";
import { ImBubble2 } from "react-icons/im";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";

import { Record as RecordType } from "@/helpers/interfaces";

import "./Record.sass";

const Record: FC<RecordType> = ({ hit }: RecordType) => (
  <div className="record">
    <div className="record-picture">
      <img src={hit.image_url} alt={hit.name} />
    </div>
    <div className="record-details">
      <div className="record-details-type-remove">
        <span>{hit.food_type.toLocaleUpperCase()}</span>
        <div className="record-details-type-remove-bin">
          <BsTrash />
        </div>
      </div>
      <div className="record-details-name-stars">
        <h2>{hit.name}</h2>
        <div className="record-details-name-stars-mark">
          {hit.stars_count}{" "}
          <Rater total={5} rating={hit.stars_count} interactive={false} />
        </div>
      </div>
      <div className="record-details-address-reviews">
        <div className="record-details-address-reviews-localization">
          {`${hit.address}, ${hit.city}, ${hit.state}, ${hit.postal_code}`}
        </div>
        <div className="record-details-address-reviews-count">
          <ImBubble2 /> {hit.reviews_count}
        </div>
      </div>
      <div className="price">{hit.price}</div>
    </div>
  </div>
);

export default Record;