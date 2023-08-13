import React, { Suspense, useContext, useState } from 'react';
import './styles/index.scss';
import { Route, Routes, Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useTranslation } from 'react-i18next';
import { AppRouter, useTheme } from './providers';

export function App() {
  const { theme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
      <Navbar />
    </div>
  );
}
