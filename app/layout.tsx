"use client";
import clsx from "clsx";
import "./globals.css";
import { fontVariables } from "./fonts";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";

export default function Layout({ children }: { children: React.ReactNode }) {
  const isMaintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true";
  console.log(process.env)
  const temp = "1030462157669-c6fsghjhc8pbrqotqhgm7elj5k9mbdof.apps.googleusercontent.com" 

  const responseMessage = () => {};
  const errorMessage = () => {};

  return (
    <html lang="en">
      <head>
        <meta name="referrer" content="origin" />
      </head>
      <body className={clsx([...fontVariables])}>
        <GoogleOAuthProvider
          clientId={temp || ""}
        >
          {!isMaintenanceMode && (
            <>
              <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
            </>
          )}
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
