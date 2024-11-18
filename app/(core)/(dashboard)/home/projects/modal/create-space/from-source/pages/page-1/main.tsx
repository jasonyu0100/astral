import { FormBody } from '@/components/form/body/main';
import { AstralTextAreaInput } from '@/components/input/area/main';
import { AstralTextLineInput } from '@/components/input/line/main';
import { useContext } from 'react';
import { ContextForHomeProjectsCreateSpace } from '../../../controller/main';
import { HomeProjectsCreateFromSourceMembers } from './members/main';

export function HomeProjectsCreateFromSourceModalPageOne() {
  const createFromSourceController = useContext(
    ContextForHomeProjectsCreateSpace,
  );

  return (
    <FormBody>
      <AstralTextLineInput
        title='Title'
        placeholder='A title for your source'
        defaultValue={createFromSourceController.state.title}
        onChange={(e) =>
          createFromSourceController.actions.updateTitle(e.target.value)
        }
      />
      <AstralTextAreaInput
        title='Source'
        placeholder={`Enter your source text here
E.g. a script, a paragraph, a quote, etc.
          
          `}
        rows={8}
        defaultValue={createFromSourceController.state.source}
        onChange={(e) =>
          createFromSourceController.actions.updateSource(e.target.value)
        }
        style={{ resize: 'none' }}
      />
      <HomeProjectsCreateFromSourceMembers />
    </FormBody>
  );
}
