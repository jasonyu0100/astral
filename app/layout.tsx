"use client";
import clsx from "clsx";
import "./globals.css";
import {
  fontVariables
} from "./fonts";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="referrer" content="origin"/>
      </head>
      <body className={clsx([...fontVariables])}>
        {children}
      </body>
    </html>
  );
}
