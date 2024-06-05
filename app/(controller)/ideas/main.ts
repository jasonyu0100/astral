import { SceneIdeaObj } from '@/(model)/space/chapter/scene/idea/main';
import { FileElem } from '@/(model)/elements/file/main';
import { createContext, useMemo, useState } from 'react';
import { NoteElem } from '@/(model)/elements/note/main';
import { LogElem } from '@/(model)/elements/log/main';
import { LinkElem } from '@/(model)/elements/link/main';
import { toast } from 'sonner';
import { ideasGqlHelper } from '../../(db)/ideas/main';
export interface IdeaActions {
  listIdeas: () => Promise<SceneIdeaObj[]>;
  createFromFile: (
    title: string,
    description: string,
    x: number,
    y: number,
    file: FileElem,
  ) => Promise<SceneIdeaObj>;
  createFromNote: (
    title: string,
    description: string,
    x: number,
    y: number,
    note: NoteElem,
  ) => Promise<SceneIdeaObj>;
  createFromLink: (
    title: string,
    description: string,
    x: number,
    y: number,
    link: LinkElem,
  ) => Promise<SceneIdeaObj>;
  createFromLog: (
    title: string,
    description: string,
    x: number,
    y: number,
    log: LogElem,
  ) => Promise<SceneIdeaObj>;
  updateIdea: (ideaId: string, data: any) => void;
  updateIdeas: () => Promise<SceneIdeaObj[]>;
  activateIdea: (ideaId: string) => void;
  deactivateIdea: () => void;
}

interface IdeasHandler {
  idea: SceneIdeaObj | undefined;
  ideaId: string;
  ideas: SceneIdeaObj[];
  ideaActions: IdeaActions;
}

export const IdeasHandlerContext = createContext({} as IdeasHandler);

export const useIdeasHandler = (partId: string): IdeasHandler => {
  const [ideas, changeIdeas] = useState<SceneIdeaObj[]>([]);
  const [ideaId, changeIdeaId] = useState<string>('');

  const idea = ideas.filter((idea) => idea.id === ideaId).at(0);

  const ideaActions: IdeaActions = {
    listIdeas: async () => {
      const ideas = await ideasGqlHelper.listFromScene(partId);
      changeIdeas(ideas);
      changeIdeaId(ideas[0]?.id || '');
      return ideas;
    },
    createFromFile: async (
      title: string,
      description: string,
      x: number,
      y: number,
      file: FileElem,
    ) => {
      if (partId === '') {
        alert('No Scene Active');
        return {} as SceneIdeaObj;
      }
      const idea = await ideasGqlHelper.create.createFromFile(
        partId,
        title,
        description,
        x,
        y,
        file,
      );
      alert('adsads')
      changeIdeas((prev) => [...prev, idea]);
      changeIdeaId(idea.id);
      return idea;
    },
    createFromNote: async (
      name: string,
      description: string,
      x: number,
      y: number,
      note: NoteElem,
    ) => {
      if (partId === '') {
        alert('No Scene Active');
        return {} as SceneIdeaObj;
      }
      const idea = await ideasGqlHelper.create.createFromNote(
        partId,
        name,
        description,
        x,
        y,
        note,
      );
      changeIdeas((prev) => [...prev, idea]);
      changeIdeaId(idea.id);
      return idea;
    },
    createFromLink: async (
      title: string,
      description: string,
      x: number,
      y: number,
      link: LinkElem,
    ) => {
      if (partId === '') {
        alert('No Scene Active');
        return {} as SceneIdeaObj;
      }
      const idea = await ideasGqlHelper.create.createFromLink(
        partId,
        title,
        description,
        x,
        y,
        link,
      );
      changeIdeas((prev) => [...prev, idea]);
      changeIdeaId(idea.id);
      return idea;
    },
    createFromLog: async (
      title: string,
      description: string,
      x: number,
      y: number,
      log: LogElem,
    ) => {
      if (partId === '') {
        alert('No Scene Active');
        return {} as SceneIdeaObj;
      }
      const idea = await ideasGqlHelper.create.createFromLog(
        partId,
        title,
        description,
        x,
        y,
        log,
      );
      changeIdeas((prev) => [...prev, idea]);
      changeIdeaId(idea.id);
      return idea;
    },
    updateIdeas: async () => {
      const updatedIdeas = await ideasGqlHelper.updateMany(ideas);
      toast.success('Ideas Updated');
      return updatedIdeas;
    },
    activateIdea: (ideaId: string) => {
      changeIdeaId(ideaId);
    },
    deactivateIdea: () => {
      changeIdeaId('');
    },
    updateIdea: (ideaId: string, data: any) => {
      changeIdeas((prev) =>
        prev.map((idea) => (idea.id === ideaId ? { ...idea, ...data } : idea)),
      );
    },
  };

  useMemo(() => {
    if (partId == '') {
      changeIdeas([]);
      return;
    }
    ideaActions.listIdeas();
  }, [partId]);

  return {
    idea,
    ideaId,
    ideas,
    ideaActions: ideaActions,
  };
};
