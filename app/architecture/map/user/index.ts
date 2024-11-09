import { userConnectionDbWrapper } from '@/architecture/client/user/connection/main';
import { userDbWrapper } from '@/architecture/client/user/main';
import { userReservationDbWrapper } from '@/architecture/client/user/reservation/main';
import { userConnectionModel } from '@/architecture/model/user/connection/main';
import { userModel } from '@/architecture/model/user/main';
import { userReservationModel } from '@/architecture/model/user/reservation/main';

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
};
