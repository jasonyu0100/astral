import { Request, Response, Router } from 'express';
import { createUserObj } from '../../graphql/mutations';
import { amplifyClient } from '../../client';
import bcrypt from 'bcrypt';

export const registerRouter = Router();

registerRouter.post('/', async (req: Request, res: Response) => {
  const data = req.body;
  const fname = data.fname;
  const lname = data.lname;
  const email = data.email;
  const password = data.password;

  const passwordHash = await bcrypt.hash(password, 10);

  const inputPayload = {
    fname: fname,
    lname: lname,
    email: email,
    passwordHash: passwordHash,
  };

  try {
    const payload = await amplifyClient.graphql({
      query: createUserObj,
      variables: {
        input: inputPayload,
      },
    });
    res.json({ data: payload.data.createUserObj });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

registerRouter.post('/google', async (req: Request, res: Response) => {
  const data = req.body;
  const fname = data.fname;
  const lname = data.lname;
  const email = data.email;
  const googleId = data.googleId;
  const profilePicture = data.profilePicture;

  const inputPayload = {
    fname: fname,
    lname: lname,
    email: email,
    googleId: googleId,
    profilePicture: profilePicture,
  };

  try {
    const payload = await amplifyClient.graphql({
      query: createUserObj,
      variables: {
        input: inputPayload,
      },
    });
    res.json({ data: payload.data.createUserObj });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
