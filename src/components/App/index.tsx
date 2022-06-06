import { FC } from "react";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, Hits } from "react-instantsearch-hooks-web";

import Layout from "@/layout";
import Header from "@/components/Header";
import Record from "@/components/Record";

const searchClient = algoliasearch(
  import.meta.env.VITE_APP_ID,
  import.meta.env.VITE_API_KEY
);

const App: FC = () => {
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={import.meta.env.VITE_INDEX_NAME}
    >
      <Layout>
        <Header />
        <Hits hitComponent={Record} />
      </Layout>
    </InstantSearch>
  );
};

export default App;
