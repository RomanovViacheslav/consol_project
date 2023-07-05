import React, { ButtonHTMLAttributes } from "react";
import cls from './Button.module.scss';
import { classNames } from "shared/lib/classNames/classNames";


export enum ThemeButton {
    CLEAR = 'clear',

}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
  theme?: ThemeButton;
}

export function Button({ className, children, theme, ...props }: ButtonProps) {

  return (
    <button className={classNames((cls.Button), {}, [className, cls[theme]])} {...props}>
        {children}
    </button>
  );
}