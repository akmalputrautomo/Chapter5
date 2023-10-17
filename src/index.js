import React from "react";
import ReactDOM from "react-dom/client";
import "../src/assets/css/index.css";
import { RouterMovie } from "./routes/RouterMovie";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { GoogleOAuthProvider } from "@react-oauth/google";

const queryMovie = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={process.env.REACT_APP_OAUTH_GOOGLE_ID}>
      <QueryClientProvider client={queryMovie}>
        <ToastContainer />
        <RouterMovie />
      </QueryClientProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
