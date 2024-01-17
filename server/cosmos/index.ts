import { Router } from "express";
import { chapterRouter } from "./space/chapter/main";
import { galleryRouter } from "./gallery/main";
import { resourceRouter } from "./resource/main";
import { collectionRouter } from "./gallery/collection/main";
import { draftRouter } from "./draft/main";
import { flowRouter } from "./flow/main";
import { stormRouter } from "./storm/main";
import { spaceRouter } from "./space/main";
import { chatRouter } from "./storm/chat/main";
import { momentRouter } from "./flow/moment/main";
import { constellationRouter } from "./draft/constellation/main";


export const cosmosRouter = Router();

// Drive routers
cosmosRouter.use("/gallery", galleryRouter)
cosmosRouter.use("/collection", collectionRouter)
cosmosRouter.use("/resource", resourceRouter)

// Chapter routers
cosmosRouter.use("/space", spaceRouter)
cosmosRouter.use("/chapter", chapterRouter);

// Storm routers
cosmosRouter.use("/storm", stormRouter)
cosmosRouter.use("/chat", chatRouter)

// Draft routers
cosmosRouter.use("/draft", draftRouter)
cosmosRouter.use("/constellation", constellationRouter)

// Flow routers
cosmosRouter.use("/flow", flowRouter)
cosmosRouter.use("/moment", momentRouter)

// Sea routers
// cosmosRouter.use("/flow", flowRouter)
// cosmosRouter.use("/moment", momentRouter)