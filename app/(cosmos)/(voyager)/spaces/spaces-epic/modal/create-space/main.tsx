import { ButtonVariant, FormButton } from '@/(common)/form/button/main';
import { FormFooter } from '@/(common)/form/footer/main';
import { FormContainer } from '@/(common)/form/main';
import { FormTitle } from '@/(common)/form/title/main';
import { Modal } from '@/(common)/modal/main';
import { createContext, useContext, useEffect, useState } from 'react';
import { SpacesContext } from '../../../(stages)/now/page';
import { SpacesModalContext } from '../main';
import { FileObj } from '@/tables/file/main';
import { SpaceVariant } from '@/tables/space/main';
import { ChapterTemplate, spaceTemplates } from '@/tables/space/templates/main';
import { PageOne } from './page-1/main';
import { PageTwo } from './page-2/main';

export interface CreateSpaceModalContextObj {
    pageOne: PageOneProps;
    pageTwo: PageTwoProps;
}

export interface PageOneProps {
    title: string;
    updateTitle: (title: string) => void;
    description: string;
    updateDescription: (description: string) => void;
    thumbnail: FileObj;
    updateThumbnail: (thumbnail: FileObj) => void;
}

export interface PageTwoProps {
    variant: string;
    updateVariant: (variant: string) => void;
    chapterTemplates: ChapterTemplate[];
    updateChapterTemplates: (templates: ChapterTemplate[]) => void;
}

export const CreateSpaceModalContext = createContext({} as CreateSpaceModalContextObj)

function Pages({ page } : { page: number}) {
  switch (page) {
    case 0: return <PageOne/>
    case 1: return <PageTwo/>
  }
}

export function CreateSpaceModal() {
  const { spacesHandler } = useContext(SpacesContext);
  const { createSpace } = useContext(SpacesModalContext);
  const [title, changeTitle] = useState('');
  const [description, changeDescription] = useState('');
  const [thumbnail, changeThumbnail] = useState({} as FileObj);
  const [variant, changeVariant] = useState<string>(SpaceVariant.SONG)
  const [chapterTemplates, changeChapterTemplates] = useState([] as ChapterTemplate[])

  useEffect(() => {
    if (variant in spaceTemplates) {
      changeChapterTemplates(spaceTemplates[variant])
    }
  }, [variant])

  const pageOne: PageOneProps = {
    title, 
    updateTitle: (title: string) => changeTitle(title),
    description, 
    updateDescription: (description: string) => changeDescription(description),
    thumbnail, 
    updateThumbnail: (thumbnail: FileObj) => changeThumbnail(thumbnail),
  }

  const pageTwo : PageTwoProps = {
    variant, 
    updateVariant: (variant: string) => changeVariant(variant),
    chapterTemplates, 
    updateChapterTemplates: (templates: ChapterTemplate[]) => changeChapterTemplates(templates),
  }

  function ModalFooter() {
    switch (createSpace.page) {
      case 0: return <FormFooter>
          <FormButton
            onClick={() => {
              createSpace.updatePage(1)
            }}
          >
            Next
          </FormButton>
        </FormFooter>
      case 1: return <FormFooter>
          <FormButton
            variant={ButtonVariant.SECONDARY}
            onClick={() => {
              createSpace.updatePage(0)
            }}
          >
            Prev
          </FormButton>
          <FormButton
            onClick={() => {
              spacesHandler.queryCreateSpace(title, description, thumbnail, variant, chapterTemplates);
              createSpace.close();
            }}
          >
            Create
          </FormButton>
        </FormFooter>
    }
  }

  const context = {
    pageOne,
    pageTwo
  }

  return (
    <CreateSpaceModalContext.Provider value={context}>
    <Modal isOpen={createSpace.opened} onClose={() => createSpace.close()}>
      <FormContainer>
        <FormTitle>Create Space</FormTitle>
        <Pages page={createSpace.page}/>
        <ModalFooter/>
      </FormContainer>
    </Modal>
    </CreateSpaceModalContext.Provider>
  );
}
