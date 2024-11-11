import { FormBody } from '@/components/form/body/main';
import { AstralTextAreaInput } from '@/components/input/area/main';
import { AstralTextLineInput } from '@/components/input/line/main';
import { useContext } from 'react';
import { ContextForHomePersonalCreateFromSource } from '../../controller/main';
import { HomePersonalCreateFromSourceMembers } from './members/main';

export function HomePersonalCreateFromSourceModalPageOne() {
  const createFromSourceController = useContext(
    ContextForHomePersonalCreateFromSource,
  );

  return (
    <FormBody>
      <AstralTextLineInput
        title='Title'
        placeholder='A title for your source'
        defaultValue={createFromSourceController.pageOne.title}
        onChange={(e) =>
          createFromSourceController.pageOne.updateTitle(e.target.value)
        }
      />
      <AstralTextAreaInput
        title='Source'
        placeholder='Enter your source text here'
        rows={8}
        defaultValue={createFromSourceController.pageOne.source}
        onChange={(e) =>
          createFromSourceController.pageOne.updateSource(e.target.value)
        }
        style={{ resize: 'none' }}
      />
      <HomePersonalCreateFromSourceMembers />
    </FormBody>
  );
}
