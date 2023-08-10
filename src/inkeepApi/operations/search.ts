import { gql } from '@urql/core';
import createInkeepClient from '../createInkeepClient';
import type { SearchInput, SearchQuery, SearchResult } from '../generated/graphql'; // Make sure to import the generated types

const client = createInkeepClient();

const SEARCH_QUERY = gql`
  query Search($searchInput: SearchInput!) {
    search(searchInput: $searchInput) {
      searchHits {
        id
        url
        title
      }
      searchQuery
    }
  }
`;

export const search = async (searchInput: SearchInput): Promise<SearchQuery['search']['searchHits']> => {
  const result = await client.query<SearchQuery, { searchInput: SearchInput }>(SEARCH_QUERY, { searchInput }).toPromise();

  if (result.error || !result.data) {
    console.error('Error in receiving the response:', result.error?.message);
    throw new Error('Error in receiving the response');
  }

  return result.data.search.searchHits;
};
