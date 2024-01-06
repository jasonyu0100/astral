import clsx from "clsx";
import "./globals.css";
import { fontVariables } from "./fonts";

export default function Layout({ children }: { children: React.ReactNode }) {
  const isDeveloperMode = process.env.NEXT_PUBLIC_DEVELOPER_MODE === "true";

  return (
    <html lang="en">
      <head>
        <meta name="referrer" content="origin" />
      </head>
      <body className={clsx([...fontVariables])}>
        {isDeveloperMode ? <>{children}</> : <div>Under maintenance</div>}
      </body>
    </html>
  );
}
