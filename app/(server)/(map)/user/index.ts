import { userBackerDbWrapper } from '@/(server)/(db)/user/backer/main';
import { userConnectionDbWrapper } from '@/(server)/(db)/user/connection/main';
import { userDbWrapper } from '@/(server)/(db)/user/main';
import { userReservationDbWrapper } from '@/(server)/(db)/user/reservation/main';
import { userBackerModel } from '@/(server)/(model)/user/backer/main';
import { userConnectionModel } from '@/(server)/(model)/user/connection/main';
import { userModel } from '../../(model)/user/main';
import { userReservationModel } from '../../(model)/user/reservation/main';

export const userMap = {
  model: userModel,
  db: userDbWrapper,
  connection: {
    model: userConnectionModel,
    db: userConnectionDbWrapper,
  },
  backer: {
    model: userBackerModel,
    db: userBackerDbWrapper,
  },
  reservation: {
    model: userReservationModel,
    db: userReservationDbWrapper,
  },
};
