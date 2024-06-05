import { ButtonVariant, FormButton } from '@/(components)/(form)/button/main';
import { FormFooter } from '@/(components)/(form)/footer/main';
import { FormContainer } from '@/(components)/(form)/main';
import { FormTitle } from '@/(components)/(form)/title/main';
import { PolaroidModal } from '@/(components)/(modal)/polaroid/main';
import { createContext, useContext, useEffect, useState } from 'react';
import { SpacesModalContext } from '../main';
import { FileElem } from '@/(model)/elements/file/main';
import { SpaceVariant } from '@/(model)/space/main';
import {
  TemplateChapterObj,
  getSpaceTemplate,
} from '@/(model)/space/templates/main';
import { PageOne } from './page-1/main';
import { PageTwo } from './page-2/main';
import { SpacesHandlerContext } from '@/(controller)/spaces/main';

export interface CreateSpaceModalContextObj {
  pageOne: PageOneProps;
  pageTwo: PageTwoProps;
}

export interface PageOneProps {
  title: string;
  updateTitle: (title: string) => void;
  description: string;
  updateDescription: (description: string) => void;
  thumbnail: FileElem;
  updateThumbnail: (thumbnail: FileElem) => void;
}

export interface PageTwoProps {
  variant: string;
  updateVariant: (variant: string) => void;
  chapterTemplates: TemplateChapterObj[];
  updateChapterTemplates: (templates: TemplateChapterObj[]) => void;
}

export const CreateSpaceModalContext = createContext(
  {} as CreateSpaceModalContextObj,
);

function Pages({ page }: { page: number }) {
  switch (page) {
    case 0:
      return <PageOne />;
    case 1:
      return <PageTwo />;
  }
}

export function CreateSpaceModal() {
  const spacesHandler = useContext(SpacesHandlerContext);
  const modalContext = useContext(SpacesModalContext);
  const { opened, close, page, updatePage } = modalContext.createSpaceModal;
  const [title, changeTitle] = useState('');
  const [description, changeDescription] = useState('');
  const [thumbnail, changeThumbnail] = useState({} as FileElem);
  const [variant, changeVariant] = useState(SpaceVariant.SONG);
  const [chapterTemplates, changeChapterTemplates] = useState(
    [] as TemplateChapterObj[],
  );

  useEffect(() => {
    changeChapterTemplates(getSpaceTemplate(variant));
  }, [variant]);

  const pageOne: PageOneProps = {
    title,
    updateTitle: (title: string) => changeTitle(title),
    description,
    updateDescription: (description: string) => changeDescription(description),
    thumbnail,
    updateThumbnail: (thumbnail: FileElem) => changeThumbnail(thumbnail),
  };

  const pageTwo: PageTwoProps = {
    variant,
    updateVariant: (variant: string) => changeVariant(variant as SpaceVariant),
    chapterTemplates,
    updateChapterTemplates: (templates: TemplateChapterObj[]) =>
      changeChapterTemplates(templates),
  };

  function ModalFooter() {
    switch (page) {
      case 0:
        return (
          <FormFooter>
            <FormButton
              onClick={() => {
                updatePage(1);
              }}
            >
              Next
            </FormButton>
          </FormFooter>
        );
      case 1:
        return (
          <FormFooter>
            <FormButton
              variant={ButtonVariant.SECONDARY}
              onClick={() => {
                updatePage(0);
              }}
            >
              Prev
            </FormButton>
            <FormButton
              onClick={() => {
                spacesHandler.spaceActions.createSpace(
                  title,
                  description,
                  thumbnail,
                  variant,
                  chapterTemplates,
                );
                close();
              }}
            >
              Create
            </FormButton>
          </FormFooter>
        );
    }
  }

  const context = {
    pageOne,
    pageTwo,
  };

  return (
    <CreateSpaceModalContext.Provider value={context}>
      <PolaroidModal isOpen={opened} onClose={() => close()}>
        <FormContainer>
          <FormTitle>Create Space</FormTitle>
          <Pages page={page} />
          <ModalFooter />
        </FormContainer>
      </PolaroidModal>
    </CreateSpaceModalContext.Provider>
  );
}
