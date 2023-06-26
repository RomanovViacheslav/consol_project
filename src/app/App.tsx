import React, { Suspense, useContext, useState } from "react";
import "./styles/index.scss";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter, useTheme } from "./providers";


export function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>

      <AppRouter />
    </div>
  );
}
