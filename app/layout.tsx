// @ts-nocheck
import clsx from "clsx";
import "./globals.css";
import { fontVariables } from "./fonts";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
// import { useEffect } from "react";
// import { createSpaceObj } from "./graphql/mutations";

const config = {
  API: {
    GraphQL: {
      endpoint: process.env.GRAPHQL_ENDPOINT,
      region: "ap-southeast-2",
      defaultAuthMode: "apiKey",
      apiKey: process.env.GRAPHQL_APIKEY,
    },
  },
};

Amplify.configure(config);

export const amplifyClient = generateClient();

export default function Layout({ children }: { children: React.ReactNode }) {
  const isMaintenanceMode = process.env.MAINTENANCE_MODE === "true";

  // async function fetchProjects() {
  //   let resp = await amplifyClient.graphql({
  //     query: createSpaceObj,
  //     variables: {
  //       input: {
  //         title: "Hello",
  //         description: "adsadsads",
  //         chapters: [],
  //       },
  //     },
  //   });
  //   return resp
  // };

  // useEffect(() => {
  //   fetchProjects().then(resp => console.log(resp))
  //   return () => {};
  // }, []);

  return (
    <html lang="en">
      <head>
        <meta name="referrer" content="origin" />
      </head>
      <body className={clsx([...fontVariables])}>
        <GoogleOAuthProvider clientId={process.env.GOOGLE_AUTH_APIKEY || ""}>
          {!isMaintenanceMode && <>{children}</>}
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
