import { FC } from "react";
import { Hits, Pagination, InfiniteHits } from "react-instantsearch-hooks-web";

import { Mobile, TabletOrDesktop } from "@/helpers/media";
import Record from "@/components/Records/Record";

import "./Records.sass";

const Records: FC = () => (
  <div className="records">
    <Mobile>
      <InfiniteHits hitComponent={Record} showPrevious={false} />
    </Mobile>

    <TabletOrDesktop>
      <Hits hitComponent={Record} />
      <Pagination showFirst={false} showLast={false} />
    </TabletOrDesktop>
  </div>
);

export default Records;
