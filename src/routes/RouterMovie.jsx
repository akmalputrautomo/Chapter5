import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/movie/Home";
import { SearchMovie } from "../pages/movie/SearchMovie";
import { DetailMovie } from "../pages/movie/DetailMovie";
import { Register } from "../pages/auth/Register";
import { Login } from "../pages/auth/Login";

export const RouterMovie = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Search/:namemovie" element={<SearchMovie />} />
        <Route path="/Detail/:movieId" element={<DetailMovie />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
