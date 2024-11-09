import { FormBody } from '@/components/form/body/main';
import { FormSelect } from '@/components/form/select/main';
import { AstralTextAreaInput } from '@/components/input/area/main';
import { AstralTextLineInput } from '@/components/input/line/main';
import { SpaceTemplate, SpaceTemplateMap } from '@/templates/space/main';
import { useContext } from 'react';
import { ContextForHomePersonalCreateSpace } from '../../controller/main';
import { HomePersonalCreateSpaceMembers } from './members/main';

export function HomePersonalCreateSpaceModalPageOne() {
  const createSpaceController = useContext(ContextForHomePersonalCreateSpace);

  return (
    <FormBody>
      <FormSelect
        title='Project Type'
        value={createSpaceController.pageOne.category}
        onChange={(e) => {
          createSpaceController.pageOne.updateCategory(
            e.target.value as SpaceTemplate,
          );
        }}
      >
        {Object.entries(SpaceTemplateMap).map(([template, obj]) => (
          <option key={template} value={template}>
            {obj.title}
          </option>
        ))}
      </FormSelect>
      <AstralTextLineInput
        title='Title'
        placeholder='A title for the space'
        defaultValue={createSpaceController.pageOne.title}
        onChange={(e) =>
          createSpaceController.pageOne.updateTitle(e.target.value)
        }
      />
      <AstralTextAreaInput
        title='Description'
        placeholder='A description for the space'
        rows={5}
        defaultValue={createSpaceController.pageOne.description}
        onChange={(e) =>
          createSpaceController.pageOne.updateDescription(e.target.value)
        }
        style={{ resize: 'none' }}
      />
      <HomePersonalCreateSpaceMembers />
    </FormBody>
  );
}
