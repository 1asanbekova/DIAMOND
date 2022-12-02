import React from "react";
import Auth from "../Components/Auth/Auth";
import { useAuth } from "../Contexts/AuthContextProvider";
import HomePage from "./HomePage";

const AuthPage = () => {
  const {
    user: { email },
  } = useAuth();
  return <div>{email ? <HomePage /> : <Auth />}</div>;
};

export default AuthPage;
