import { userDbWrapper } from '@/(server)/(db)/user/main';
import { userModel } from '../../(model)/user/main';
import { userReservationModel } from '../../(model)/user/reservation/main';
import { userCollaboratorModel } from '@/(server)/(model)/user/collaborator/main';
import { userSupporterModel } from '@/(server)/(model)/user/supporter/main';
import { userCollaboratorDbWrapper } from '@/(server)/(db)/user/collaborator/main';
import { userSupporterDbWrapper } from '@/(server)/(db)/user/supporter/main';
import { userReservationDbWrapper } from '@/(server)/(db)/user/reservation/main';

export const userMap = {
  model: userModel,
  db: userDbWrapper,
  collaborator: {
    model: userCollaboratorModel,
    db: userCollaboratorDbWrapper,
  },
  supporter: {
    model: userSupporterModel,
    db: userSupporterDbWrapper,
  },
  reservation: {
    model: userReservationModel,
    db: userReservationDbWrapper,
  },
};
