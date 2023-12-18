import React from 'react';
import { Models } from 'appwrite';
import { GridPostList, Loader } from '.';

type SearchResultsProps = {
  isSearchFetching: boolean;
  searchedPosts: Models.Document[] | null; // Ensure `searchedPosts` can be null
};

const SearchResults: React.FC<SearchResultsProps> = ({ isSearchFetching, searchedPosts }) => {
  if (isSearchFetching) return <Loader />;

  if (searchedPosts && searchedPosts.length > 0) {
    return <GridPostList posts={searchedPosts} />;
  }

  return <p className='text-light-4 mt-10 text-center'>No results found</p>;
};

export default SearchResults;
