import { Router } from 'express';
import { loginRouter } from './login/main';
import { registerRouter } from './register/main';
import { reserveRouter } from './reserve/main';

export const portalRouter = Router();

portalRouter.use('/reserve', reserveRouter);
portalRouter.use('/register', registerRouter);
portalRouter.use('/login', loginRouter);
