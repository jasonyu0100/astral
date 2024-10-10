import { userConnectionDbWrapper } from '@/(server)/client/user/connection/main';
import { userDbWrapper } from '@/(server)/client/user/main';
import { userReservationDbWrapper } from '@/(server)/client/user/reservation/main';
import { userConnectionModel } from '@/(server)/model/user/connection/main';
import { userModel } from '@/(server)/model/user/main';
import { userReservationModel } from '@/(server)/model/user/reservation/main';
import { userVaultModel } from '@/(server)/model/user/vault/main';

export const userMap = {
  model: userModel,
  db: userDbWrapper,
  connection: {
    model: userConnectionModel,
    db: userConnectionDbWrapper,
  },
  reservation: {
    model: userReservationModel,
    db: userReservationDbWrapper,
  },
  vault: {
    model: userVaultModel,
    db: null,
  },
};
