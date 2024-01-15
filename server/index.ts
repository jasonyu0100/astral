import express, { Request, Response } from "express";
import next from "next";
import { portalRouter } from "./portal";
import { loadEnvConfig } from "@next/env";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;
loadEnvConfig("./", dev);
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";

const config : any = {
    API: {
        GraphQL: {
          endpoint: process.env.GRAPHQL_ENDPOINT || "",
          region: 'ap-southeast-2',
          defaultAuthMode: 'apiKey',
          apiKey: process.env.GRAPHQL_APIKEY || ""
        }
    }
}

Amplify.configure(config);

export const amplifyClient = generateClient({ authMode: "apiKey"});

(async () => {
  try {
    await app.prepare();
    const server = express();

    server.use(express.json());

    server.use("/api/portal", portalRouter);

    server.all("*", (req: Request, res: Response) => {
      try {
        // console.log("Request received:", req.method, req.url);
        return handle(req, res);
      } catch {
        return res.status(500).send("Internal Server Error");
      }
    });

    server.listen(port, (err?: any) => {
      if (err) throw err;
      console.log(`> Ready on localhost:${port} - env ${process.env.NODE_ENV}`);
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
