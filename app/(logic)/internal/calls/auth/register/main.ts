import { amplifyClient } from '@/(api)/aws/graphql/main';
import { FileElem } from '@/(model)/elements/file/main';
import { UserObj } from '@/(model)/user/main';
import { createUserObj } from '@/graphql/mutations';
import { listUserObjs } from '@/graphql/queries';
import bcrypt from 'bcryptjs';

async function checkEmail(email: string) {
  const payload = await amplifyClient.graphql({
    query: listUserObjs,
    variables: {
      filter: {
        email: {
          eq: email,
        },
      },
    },
  });
  const users = (payload?.data?.listUserObjs?.items as UserObj[]) || [];

  if (users.length === 0) {
    return { status: true, data: null };
  } else {
    return { status: false, data: users[0] };
  }
}

export async function emailRegisterUser(
  fname: string,
  lname: string,
  email: string,
  password: string,
) {
  if (process.env.PRERELEASE_MODE) {
    return { status: false, error: 'PRERELEASE ONLY' };
  }
  const emailCheck = await checkEmail(email);
  if (emailCheck.status === false) {
    return { status: false, error: 'Email is already in use' };
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const payload = await amplifyClient.graphql({
    query: createUserObj,
    variables: {
      input: {
        fname: fname,
        lname: lname,
        email: email,
        passwordHash: passwordHash,
        created: new Date().toISOString(),
      },
    },
  });

  const user = payload?.data?.createUserObj as UserObj;

  return { status: true, data: user };
}

export async function googleRegisterUser(
  fname: string,
  lname: string,
  email: string,
  googleId: string,
  profilePicture: FileElem,
) {
  if (process.env.PRERELEASE_MODE) {
    return { status: false, error: 'PRERELEASE ONLY' };
  }
  const emailCheck = await checkEmail(email);
  if (emailCheck.status === false) {
    return { status: false, error: 'Email is already in use' };
  }

  const payload = await amplifyClient.graphql({
    query: createUserObj,
    variables: {
      input: {
        fname: fname,
        lname: lname,
        email: email,
        googleId: googleId,
        profilePicture: profilePicture,
        created: new Date().toISOString(),
      },
    },
  });

  const user = payload?.data?.createUserObj as UserObj;

  return { status: true, data: user };
}
