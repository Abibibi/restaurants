import { FC, useState } from "react";
import { InstantSearch } from "react-instantsearch-hooks-web";
import { BsFilterSquare } from "react-icons/bs";

import Layout from "@/layout";
import Header from "@/components/Header";
import Facets from "@/components/Facets";
import Records from "@/components/Records";
import FacetsMobile from "@/components/Facets/FacetsMobile";

import { Mobile, TabletOrDesktop } from "@/helpers/media";
import "./App.sass";

import { searchClient } from "@/helpers/algolia";

const App: FC = () => {
  const [isFilter, setIsFilter] = useState<boolean>(false);

  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={import.meta.env.VITE_INDEX_NAME}
    >
      <Layout>
        <Header />

        <Mobile>
          <div className="facets-records-mobile">
            <div className="facets-records-mobile-buttons">
              <button
                className="facets-records-mobile-buttons-filters"
                type="button"
                onClick={() => setIsFilter(true)}
              >
                <BsFilterSquare />
                Filters
              </button>
            </div>
            <Records />

            <FacetsMobile
              isFilter={isFilter}
              closeFilters={() => setIsFilter(false)}
            />
          </div>
        </Mobile>

        <TabletOrDesktop>
          <div className="facets-records">
            <Facets />
            <Records />
          </div>
        </TabletOrDesktop>
      </Layout>
    </InstantSearch>
  );
};

export default App;
