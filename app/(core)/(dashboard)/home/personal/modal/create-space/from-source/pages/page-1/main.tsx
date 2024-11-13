import { FormBody } from '@/components/form/body/main';
import { AstralTextAreaInput } from '@/components/input/area/main';
import { AstralTextLineInput } from '@/components/input/line/main';
import { useContext } from 'react';
import { ContextForHomePersonalCreateSpace } from '../../../controller/main';
import { HomePersonalCreateFromSourceMembers } from './members/main';

export function HomePersonalCreateFromSourceModalPageOne() {
  const createFromSourceController = useContext(
    ContextForHomePersonalCreateSpace,
  );

  return (
    <FormBody>
      <AstralTextLineInput
        title='Title'
        placeholder='A title for your source'
        defaultValue={createFromSourceController.actions.title}
        onChange={(e) =>
          createFromSourceController.actions.updateTitle(e.target.value)
        }
      />
      <AstralTextAreaInput
        title='Source'
        placeholder='Enter your source text here'
        rows={8}
        defaultValue={createFromSourceController.actions.source}
        onChange={(e) =>
          createFromSourceController.actions.updateSource(e.target.value)
        }
        style={{ resize: 'none' }}
      />
      <HomePersonalCreateFromSourceMembers />
    </FormBody>
  );
}
