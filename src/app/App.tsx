import React, { Suspense, useContext, useState } from "react";
import "./styles/index.scss";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter, useTheme } from "./providers";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

export function App() {
  const { theme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
}
