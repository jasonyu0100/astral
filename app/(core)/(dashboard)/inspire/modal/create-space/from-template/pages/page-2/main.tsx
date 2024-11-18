import { FormBody } from '@/components/form/body/main';
import { AstralTextAreaInput } from '@/components/input/area/main';
import { AstralTextLineInput } from '@/components/input/line/main';
import { useContext } from 'react';
import { ContextForHomeCreateCreateSpace } from '../../../controller/main';
import { HomeCreateCreateSpaceMembers } from './members/main';

export function HomeCreateCreateSpaceModalPageTwo() {
  const createSpaceController = useContext(ContextForHomeCreateCreateSpace);

  return (
    <FormBody>
      {/* {createSpaceController.state.category !== SpaceTemplate.Blank && (
        <FormSelect
          title='Project Type'
          value={createSpaceController.state.category}
          onChange={(e) => {
            createSpaceController.actions.updateCategory(
              e.target.value as SpaceTemplate,
            );
          }}
        >
          {Object.entries(SpaceTemplateMap).map(([template, obj]) => (
            <option key={template} value={template}>
              {obj?.title}
            </option>
          ))}
        </FormSelect>
      )} */}
      <AstralTextLineInput
        title='Title'
        placeholder='A title for the space'
        defaultValue={createSpaceController.state.title}
        onChange={(e) =>
          createSpaceController.actions.updateTitle(e.target.value)
        }
      />
      <AstralTextAreaInput
        title='Description'
        placeholder='A description for the space'
        rows={5}
        defaultValue={createSpaceController.state.description}
        onChange={(e) =>
          createSpaceController.actions.updateDescription(e.target.value)
        }
        style={{ resize: 'none' }}
      />
      <HomeCreateCreateSpaceMembers />
    </FormBody>
  );
}
