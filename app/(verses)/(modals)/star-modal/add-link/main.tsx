import { FormBody } from '@/(common)/form/body/main';
import { FormButton } from '@/(common)/form/button/main';
import { FormFooter } from '@/(common)/form/footer/main';
import { FormContainer } from '@/(common)/form/main';
import { FormTitle } from '@/(common)/form/title/main';
import { Modal } from '@/(common)/modal/main';
import { useContext, useState } from 'react';
import { StarModalContext } from '../main';
import { DraftContext } from '@/(verses)/(apollo)/space/[id]/(stages)/draft/page';
import { LinkObj, LinkVariant } from '@/(ouros)/(model)/resource/link/main';
import { FormSelect } from '@/(common)/form/select/main';
import { FormInput } from '@/(common)/form/input/main';

export function AddLinkStarModal() {
  const modalContext = useContext(StarModalContext);
  const { opened, close } = modalContext.addLinkStarModal;
  const { starHandler } = useContext(DraftContext);
  const [variant, changeVariant] = useState<string>(LinkVariant.YOUTUBE);
  const [title, changeTitle] = useState("")

  return (
    <Modal isOpen={opened} onClose={() => close()}>
      <FormContainer>
        <FormTitle>Link Element</FormTitle>
        <FormBody>
          <FormSelect
            title='Variant'
            value={variant}
            onChange={(e) => changeVariant(e.target.value)}
          >
            <option value={LinkVariant.YOUTUBE}>YouTube</option>
            <option value={LinkVariant.SPOTIFY}>Spotify</option>
          </FormSelect>
          <FormInput placeholder="Title" title="Title" value={title} onChange={(e) => changeTitle(e.target.value)} />
        </FormBody>
        <FormFooter>
          <FormButton
            onClick={() => {
              if (variant === LinkVariant.YOUTUBE) {
                starHandler.queryCreateLinkStar(title, 0, 0, {
                  id: '0',
                  title: 'passion.png',
                  url: 'https://www.youtube.com/embed/A6XUVjK9W4o',
                  variant: LinkVariant.YOUTUBE,
                } as LinkObj);
              } else if (variant === LinkVariant.SPOTIFY) {
                starHandler.queryCreateLinkStar(title, 0, 0, {
                  id: '0',
                  title: 'passion.png',
                  url: 'https://open.spotify.com/embed/track/14I47nVJiJt9NCzt7YmnWz?utm_source=generator',
                  variant: LinkVariant.SPOTIFY,
                } as LinkObj);
              }
              close();
            }}
          >
            Add
          </FormButton>
        </FormFooter>
      </FormContainer>
    </Modal>
  );
}
