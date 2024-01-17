import { Request, Response, Router } from "express";
import { amplifyClient } from "../../../graphql/main";

export const stormRouter = Router();

stormRouter.post("/", async (req: Request, res: Response) => {

});