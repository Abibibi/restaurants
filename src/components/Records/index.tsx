import { FC, useEffect, useState } from "react";
import {
  Hits,
  Pagination,
  useHits,
  UseHitsProps,
  useInfiniteHits,
  UseInfiniteHitsProps,
} from "react-instantsearch-hooks-web";

import { Mobile, TabletOrDesktop } from "@/helpers/media";
import Record from "@/components/Records/Record";

import "./Records.sass";
import { Hit } from "@/helpers/interfaces";

const CustomInfiniteHits: FC<UseInfiniteHitsProps> = (
  props: UseInfiniteHitsProps
) => {
  const { hits, showMore, isLastPage } = useInfiniteHits(props);
  const [displayedHits, setDisplayedHits] = useState<Hit[]>([]);

  function setHitsAfterDeletion(hitId: string): void {
    setDisplayedHits(displayedHits.filter((hit) => hit.objectID !== hitId));
  }

  useEffect(() => {
    setDisplayedHits(hits as any);
  }, [hits]);

  return (
    <>
      {displayedHits.map((hit) => (
        <Record hit={hit} key={hit.objectID} resetHits={setHitsAfterDeletion} />
      ))}
      {!isLastPage && (
        <button
          className="submit-button records-show-more"
          type="button"
          onClick={showMore}
        >
          Show more
        </button>
      )}
    </>
  );
};

const CustomHits: FC<UseHitsProps> = (props: UseHitsProps) => {
  const { hits } = useHits(props);
  const [displayedHits, setDisplayedHits] = useState<Hit[]>([]);

  function setHitsAfterDeletion(hitId: string): void {
    setDisplayedHits(displayedHits.filter((hit) => hit.objectID !== hitId));
  }

  useEffect(() => {
    setDisplayedHits(hits as any);
  }, [hits]);

  return (
    <>
      {displayedHits.map((hit) => (
        <Record hit={hit} key={hit.objectID} resetHits={setHitsAfterDeletion} />
      ))}
    </>
  );
};

const Records: FC = () => (
  <div className="records">
    <Mobile>
      <CustomInfiniteHits />
    </Mobile>

    <TabletOrDesktop>
      <CustomHits />
      <Pagination showFirst={false} showLast={false} />
    </TabletOrDesktop>
  </div>
);

export default Records;
