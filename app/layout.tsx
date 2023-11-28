"use client";
import clsx from "clsx";
import "./globals.css";
import {
  fontVariables
} from "./fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx([...fontVariables])}>
        {children}
      </body>
    </html>
  );
}
