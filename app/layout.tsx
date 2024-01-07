// @ts-nocheck
"use client";
import clsx from "clsx";
import "./globals.css";
import { fontVariables } from "./fonts";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function Layout({ children }: { children: React.ReactNode }) {
  const isMaintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true";

  return (
    <html lang="en">
      <head>
        <meta name="referrer" content="origin" />
      </head>
      <body className={clsx([...fontVariables])}>
        <GoogleOAuthProvider clientId="1030462157669-c6fsghjhc8pbrqotqhgm7elj5k9mbdof.apps.googleusercontent.com">
          {!isMaintenanceMode && <>{children}</>}
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
