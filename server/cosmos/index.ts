import { Router } from "express";
import { chapterRouter } from "./chapter/main";
import { galleryRouter } from "./gallery/main";
import { resourceRouter } from "./resource/main";
import { collectionRouter } from "./gallery/collection/main";
import { draftRouter } from "./chapter/draft/main";
import { flowRouter } from "./chapter/flow/main";
import { stormRouter } from "./chapter/storm/main";


export const cosmosRouter = Router();

// Drive routers
cosmosRouter.use("/gallery", galleryRouter)
cosmosRouter.use("/collection", collectionRouter)
cosmosRouter.use("/resource", resourceRouter)

// Chapter routers

cosmosRouter.use("/chapter", chapterRouter);

// Chapter subrouters
cosmosRouter.use("/draft", draftRouter)
cosmosRouter.use("/flow", flowRouter)
cosmosRouter.use("/storm", stormRouter)

