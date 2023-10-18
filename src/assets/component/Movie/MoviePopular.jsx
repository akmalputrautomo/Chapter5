import React, { useEffect, useState } from "react";
import { RenderMovie } from "./RenderMovie";
import { fetchDataMoviePopular, useMovieDataPopularQuery } from "../../../services/data-movie/get-data-movie-popular";
import { IoMdArrowForward, IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { CookieKeys, CookieStorage } from "../../../utils/cookies";

export const MoviePopular = () => {
  const token = CookieStorage.get(CookieKeys.AuthToken);
  const [data, setdata] = useState([]);
  const [PageNow, setPageNow] = useState(1);
  const navigate = useNavigate();

  const getmovie = async () => {
    const datapopular = await fetchDataMoviePopular(token);
    setdata(datapopular.data);
  };

  useEffect(() => {
    if (token) {
      getmovie();
    }
  }, [token]);

  return (
    <div className="bg-black pt-5">
      <div className="text-center px-20 border-b-2 pb-4 border-red-500">
        <h1 className="text-white text-5xl font-bold mb-4"> Popular Movie </h1>
      </div>

      {/* Prev dan Next Page */}
      <div className="text-center text-white text-2xl flex items-center justify-center gap-2">
        <span
          className={`pt-6 pb-6 cursor-pointer ${PageNow === 1 ? "pointer-events-none text-gray-500" : ""}`}
          onClick={() => {
            if (PageNow > 1) setPageNow(PageNow - 1);
          }}
        >
          <IoMdArrowBack size={40} />
        </span>
        <h1 className="pt-6 pb-6">Movie Page {PageNow}</h1>
        <span
          className="pt-6 pb-6 cursor-pointer flex items-center"
          onClick={() => {
            setPageNow(PageNow + 1);
          }}
        >
          <IoMdArrowForward size={40} />
        </span>
      </div>

      {/* Card Movie Popular */}
      <div className="flex flex-wrap justify-center items-center pb-6">
        {data?.map((value, index) => {
          return (
            <div
              key={value.id}
              onClick={() => {
                navigate(`/detail/${value.id}`);
              }}
            >
              <RenderMovie dataMovie={value} DataAll={data.results} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
