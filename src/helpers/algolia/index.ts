import algoliasearch from "algoliasearch";

export const searchClient = algoliasearch(
  import.meta.env.VITE_APP_ID,
  import.meta.env.VITE_API_KEY
);

export const index = searchClient.initIndex(import.meta.env.VITE_INDEX_NAME);
