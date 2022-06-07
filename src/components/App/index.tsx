import { FC } from "react";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch } from "react-instantsearch-hooks-web";

import Layout from "@/layout";
import Header from "@/components/Header";
import Records from "@/components/Records";

const searchClient = algoliasearch(
  import.meta.env.VITE_APP_ID,
  import.meta.env.VITE_API_KEY
);

const App: FC = () => {
  const [isFilter, setIsFilter] = useState<boolean>(false);
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={import.meta.env.VITE_INDEX_NAME}
    >
      <Layout>
        <Header />
        <Records />
      </Layout>
    </InstantSearch>
  );
};

export default App;
