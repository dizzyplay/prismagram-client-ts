import * as React from "react";
import { SearchPresenter } from "./SearchPresenter";
import { withRouter } from "react-router";
import { useQuery } from "react-apollo-hooks";
import { SEARCH } from "./SearchQueries";

type Props = {
  location: {
    search: string;
  };
};

const SearchContainer = ({ location: { search } }: Props) => {
  const term = search.split("=")[1];
  const { data, loading } = useQuery(SEARCH, {
    skip: term === "" || term === undefined,
    variables: { term }
  });
  return <SearchPresenter searchTerm={term} loading={loading} data={data} />;
};

export default withRouter(SearchContainer);
