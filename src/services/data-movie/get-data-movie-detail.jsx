import { API_ENDPOINT } from "../../utils/api-endpoint";
import http3 from "../../utils/http3";

const fetchDataMovieDetail = async (token, movieId) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await http3.get(API_ENDPOINT.DETAIL_MOVIE(movieId.movieId));
  return response.data;
};

export { fetchDataMovieDetail };
