import { Request, Response, Router } from "express";
import { amplifyClient } from "../../graphql/main";

export const galleryRouter = Router();

galleryRouter.post("/", async (req: Request, res: Response) => {

});