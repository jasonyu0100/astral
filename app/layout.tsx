// @ts-nocheck
"use client";
import clsx from "clsx";
import "./globals.css";
import { fontVariables } from "./fonts";

export default function Layout({ children }: { children: React.ReactNode }) {
  const isMaintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true";

  return (
    <html lang="en">
      <head>
        <meta name="referrer" content="origin" />
      </head>
      <body className={clsx([...fontVariables])}>
        {!isMaintenanceMode && <>{children}</>}
      </body>
    </html>
  );
}
