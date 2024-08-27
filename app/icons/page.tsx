import { AstralAddIcon } from './add/main';
import { AstralArrowBackIcon } from './arrow-back/main';
import { AstralArrowForwardIcon } from './arrow-forward/main';
import { AstralAttachmentIcon } from './attachment/main';
import { AstralChevronDownIcon } from './chevron-down/main';
import { AstralChevronLeftIcon } from './chevron-left/main';
import { AstralChevronRightIcon } from './chevron-right/main';
import { AstralChevronUpIcon } from './chevron-up/main';
import { AstralCloseIcon } from './close/main';
import { AstralDeleteIcon } from './delete/main';
import { AstralEqualizerIcon } from './equalizer/main';
import { AstralFileIcon } from './file/main';
import { AstralGestureIcon } from './gesture/main';
import { AstralLinkIcon } from './link/main';
import { AstralListIcon } from './list/main';
import { AstralManufacturingIcon } from './manufacturing/main';
import { AstralMoreIcon } from './more/main';
import { AstralNoteIcon } from './note/main';
import { AstralPlayIcon } from './play/main';
import { AstralSendIcon } from './send/main';
import { AstralSubjectIcon } from './subject/main';
import { AstralVoiceIcon } from './voice/main';

export default function Page() {
  return (
    <div className='flex flex-col space-y-[1rem] p-[2rem]'>
      <AstralAddIcon />
      <AstralFileIcon />
      <AstralSendIcon />
      <AstralVoiceIcon />
      <AstralChevronLeftIcon />
      <AstralChevronRightIcon />
      <AstralChevronDownIcon />
      <AstralChevronUpIcon />
      <AstralPlayIcon />
      <AstralCloseIcon />
      <AstralGestureIcon />
      <AstralMoreIcon />
      <AstralEqualizerIcon />
      <AstralSubjectIcon />
      <AstralArrowBackIcon />
      <AstralArrowForwardIcon />
      <AstralAttachmentIcon />
      <AstralDeleteIcon />
      <AstralManufacturingIcon />
      <AstralLinkIcon />
      <AstralNoteIcon />
      <AstralListIcon />
    </div>
  );
}
