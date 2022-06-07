import { FC, useState } from "react";
import { BsTrash } from "react-icons/bs";
import { ImBubble2 } from "react-icons/im";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";

import { Record as RecordType } from "@/helpers/interfaces";
import { index } from "@/helpers/algolia";

import "./Record.sass";
import Modal from "@/components/Modals";
import DeleteModal from "@/components/Modals/DeleteModal";

const Record: FC<RecordType> = ({ hit }: RecordType) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  function deleteRecord(): void {
    index.deleteObject(hit.objectID).then(() => {
      console.log(`${hit.name} a bien été supprimée`);
      window.location.reload();
    });
  }

  return (
    <div className="record">
      <div className="record-picture">
        <img src={hit.image_url} alt={hit.name} />
      </div>
      <div className="record-details">
        <div className="record-details-type-remove">
          <span>{hit.food_type.toLocaleUpperCase()}</span>
          <div
            className="record-details-type-remove-bin"
            onClick={() => setIsModalOpen(true)}
          >
            <BsTrash />
          </div>
        </div>
        <div className="record-details-name-stars">
          <h2>{hit.name}</h2>
          <div className="record-details-name-stars-mark">
            <span>{hit.stars_count}</span>
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
        <div className="record-details-price">
          {Array.from(Array(hit.price)).map(() => "$")}
        </div>
      </div>

      <DeleteModal
        open={isModalOpen}
        confirm={deleteRecord}
        cancel={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Record;
