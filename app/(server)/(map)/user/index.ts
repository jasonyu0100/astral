import { userBackerDbWrapper } from '@/(server)/(db)/user/backer/main';
import { userBackerTermsDbWrapper } from '@/(server)/(db)/user/backer/terms/main';
import { userConnectionDbWrapper } from '@/(server)/(db)/user/connection/main';
import { userConnectionTermsDbWrapper } from '@/(server)/(db)/user/connection/terms/main';
import { userDbWrapper } from '@/(server)/(db)/user/main';
import { userReservationDbWrapper } from '@/(server)/(db)/user/reservation/main';
import { userBackerModel } from '@/(server)/(model)/user/backer/main';
import { userBackerTermsModel } from '@/(server)/(model)/user/backer/term/main';
import { userConnectionModel } from '@/(server)/(model)/user/connection/main';
import { userConnectionTermsModel } from '@/(server)/(model)/user/connection/term/main';
import { userModel } from '../../(model)/user/main';
import { userReservationModel } from '../../(model)/user/reservation/main';

export const userMap = {
  model: userModel,
  db: userDbWrapper,
  connection: {
    model: userConnectionModel,
    db: userConnectionDbWrapper,
    terms: {
      model: userConnectionTermsModel,
      db: userConnectionTermsDbWrapper,
    },
  },
  backer: {
    model: userBackerModel,
    db: userBackerDbWrapper,
    terms: {
      model: userBackerTermsModel,
      db: userBackerTermsDbWrapper,
    },
  },
  reservation: {
    model: userReservationModel,
    db: userReservationDbWrapper,
  },
};
