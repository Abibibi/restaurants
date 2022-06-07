import algoliasearch from "algoliasearch/lite";

export const searchClient = algoliasearch(
  import.meta.env.VITE_APP_ID,
  import.meta.env.VITE_API_KEY
);
