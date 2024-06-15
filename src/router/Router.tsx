import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { LoggedUser } from "../layouts/LoggedUser/LoggedUser";
import { useAuthentication } from "../contexts/Authentication/useAuthentication";
import { useEffect, useState } from "react";
import { SignIn } from "../pages/SignIn/SignIn";
import { LoggedOut } from "../pages/LoggedOut/LoggedOut";
import { NotFound } from "../pages/NotFound/NotFound";
import { Logged } from "../pages/Logged/Logged";

export const Router = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<LoggedUser />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/overview" element={<LoggedOut />} />
      <Route path="/logged" element={<Logged />} />
    </Routes>
  );
};
