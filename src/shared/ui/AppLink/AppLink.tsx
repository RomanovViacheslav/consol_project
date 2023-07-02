import React, { FC } from "react";
import cls from "./AppLink.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Link, LinkProps } from "react-router-dom";


export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
  className?: string;
  children: React.ReactNode;
  theme?: AppLinkTheme;
}

export const AppLink = ({ className, children, to, theme= AppLinkTheme.PRIMARY, ...otherProps }: AppLinkProps) => {
  return <Link to={to} className={classNames(cls.AppLink, {}, [className, cls[theme]])} {...otherProps}>{children}</Link>;
};
