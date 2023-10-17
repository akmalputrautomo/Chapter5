export const API_ENDPOINT = {
  // NOW_PLAYING: "3/movie/now_playing",
  POPULAR: "/api/v1/movie/popular",
  NOW_DETAIL: (id) => `/api/v1/movie/${id}`,
  Search: "/api/v1/search/movie",
  Register_User: "/api/v1/auth/register",
  Login_User: "/api/v1/auth/login",
  Get_User: "/api/v1/auth/me",
};
