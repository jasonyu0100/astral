import { amplifyClient } from '@/(api)/aws/graphql/main';
import { SceneIdeaObj } from '@/(model)/space/chapter/scene/idea/main';
import { gqlArgs } from '@/(utils)/clean';
import {
  deleteIdeaObj,
  updateIdeaObj,
} from '@/graphql/mutations';
import { listIdeaObjs } from '@/graphql/queries';
import { IdeasCreateGqlHelperType, ideasCreateGqlHelper } from './create/main';

export interface IdeasGqlHelper {
  listFromScene: (partId: string) => Promise<SceneIdeaObj[]>;
  create: IdeasCreateGqlHelperType;
  updateMany: (updatedIdeaObjs: SceneIdeaObj[]) => Promise<SceneIdeaObj[]>;
  update: (ideaId: string, updatedIdeaObj: SceneIdeaObj) => Promise<SceneIdeaObj>;
  delete: (ideaId: string) => Promise<SceneIdeaObj>;
}

export const ideasGqlHelper: IdeasGqlHelper = {
  create: ideasCreateGqlHelper,
  listFromScene: async (partId: string) => {
    const payload = await amplifyClient.graphql({
      query: listIdeaObjs,
      variables: {
        filter: {
          partId: {
            eq: partId,
          },
        },
      },
    });
    const ideaObjs = (payload?.data.listIdeaObjs?.items as SceneIdeaObj[]) || [];
    return ideaObjs;
  },
  updateMany: async (ideas: SceneIdeaObj[]) => {
    const updatedIdeaObjs = await Promise.all(
      ideas.map(async (idea: SceneIdeaObj) => {
        console.log(idea, gqlArgs(idea));
        const payload = await amplifyClient.graphql({
          query: updateIdeaObj,
          variables: {
            input: gqlArgs(idea),
          },
        });
        const updatedIdea = payload.data?.updateIdeaObj as SceneIdeaObj;
        return updatedIdea;
      }),
    );
    return updatedIdeaObjs;
  },
  delete: async (ideaId: string) => {
    const payload = await amplifyClient.graphql({
      query: deleteIdeaObj,
      variables: {
        input: {
          id: ideaId,
        },
      },
    });
    const ideaObj = payload?.data?.deleteIdeaObj as SceneIdeaObj;
    return ideaObj;
  },
  update: async (ideaId: string, updatedIdeaObj: SceneIdeaObj) => {
    const payload = await amplifyClient.graphql({
      query: updateIdeaObj,
      variables: {
        input: gqlArgs({
          id: ideaId,
          title: updatedIdeaObj.title,
          description: updatedIdeaObj.description,
          x: updatedIdeaObj.x,
          y: updatedIdeaObj.y,
          variant: updatedIdeaObj.variant,
          file: updatedIdeaObj.file,
          log: updatedIdeaObj.log,
          link: updatedIdeaObj.link,
          note: updatedIdeaObj.note,
        }),
      },
    });
    const updatedIdea = payload?.data?.updateIdeaObj as SceneIdeaObj;
    return updatedIdea;
  },
};
