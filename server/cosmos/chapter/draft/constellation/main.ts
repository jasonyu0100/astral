import { Request, Response, Router } from "express";
import { amplifyClient } from "../../../../graphql/main";

export const constellationRouter = Router();

constellationRouter.post("/", async (req: Request, res: Response) => {

});