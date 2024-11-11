import { AppBackgroundLabel } from '@/components/background/main';
import { AstralRoundedActionButton } from '@/components/button/action/main';
import { AstralSelectInput } from '@/components/input/select/main';
import { AstralModalBodyContents } from '@/components/modal/astral/body/action/main';
import { AstralModalBodyAction } from '@/components/modal/astral/body/contents/main';
import { AstralModalBody } from '@/components/modal/astral/body/main';
import { AstralModal } from '@/components/modal/astral/main';
import { AstralModalTitle } from '@/components/modal/astral/title/main';
import { AstralModalBodyWrapper } from '@/components/modal/astral/wrapper/main';
import { AstralCheckIcon } from '@/icons/check/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { useContext } from 'react';

export function UserThemeModal() {
  const loggedInUser = useGlobalUser((state) => state.user);
  const updateUser = useGlobalUser((state) => state.update);
  const openableController = useContext(ContextForOpenable);

  return (
    <ContextForOpenable.Provider value={openableController}>
      <AstralModal>
        <AstralModalBodyWrapper>
          <AstralModalBody>
            <AstralModalBodyContents>
              <AstralModalTitle>Theme</AstralModalTitle>
              <AstralSelectInput
                value={loggedInUser.theme}
                onChange={(e) =>
                  updateUser({
                    ...loggedInUser,
                    theme: e.target.value as AppBackgroundLabel,
                  })
                }
              >
                {Object.keys(AppBackgroundLabel).map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </AstralSelectInput>
            </AstralModalBodyContents>
            <AstralModalBodyAction>
              <AstralRoundedActionButton
                onClick={() => {
                  openableController.close();
                }}
              >
                <AstralCheckIcon />
              </AstralRoundedActionButton>
            </AstralModalBodyAction>
          </AstralModalBody>
        </AstralModalBodyWrapper>
      </AstralModal>
    </ContextForOpenable.Provider>
  );
}
