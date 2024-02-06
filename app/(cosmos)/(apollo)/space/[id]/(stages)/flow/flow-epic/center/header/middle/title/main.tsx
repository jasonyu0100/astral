import { useContext } from 'react';
import { FlowContext } from '../../../../../page';

export default function FlowHeaderTitle() {
  const { chapter, moment } = useContext(FlowContext);
  const headerTitle =
    chapter && moment ? `${chapter.title} - ${moment.title}` : 'None';

  return <div className='text-md font-bold text-slate-300'>{headerTitle}</div>;
}
