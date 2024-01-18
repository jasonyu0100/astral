import { useContext } from 'react';
import { StormContext } from '../../../../page';

export default function HeaderTitle() {
  const { chapter, chat } = useContext(StormContext);
  const headerTitle =
    chapter && chat ? `${chapter.title} - ${chat.title}` : 'None';
  return <p className='text-slate-300 text-md font-bold'>{headerTitle}</p>;
}
