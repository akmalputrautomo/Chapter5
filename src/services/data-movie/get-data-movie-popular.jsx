import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/api-endpoint";
import http3 from "../../utils/http3";

const fetchDataMoviePopular = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await http3.get(`${API_ENDPOINT.POPULAR}`);
  return data;
};

const useMovieDataPopularQuery = (options) => {
  return useQuery([API_ENDPOINT.POPULAR, options], fetchDataMoviePopular);
};

export { fetchDataMoviePopular, useMovieDataPopularQuery };