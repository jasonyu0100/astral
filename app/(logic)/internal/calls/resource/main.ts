import { amplifyClient } from '@/(logic)/external/aws/graphql/main';
import { FileObj } from '@/(logic)/internal/data/infra/model/resource/file/main';
import { ResourceObj } from '@/(logic)/internal/data/infra/model/resource/main';
import { updateResourceObj } from '@/graphql/mutations';
import { cleanGql } from '@/(logic)/utils/clean';

export async function callUpdateResource(
  resourceId: string,
  title: string,
  description: string,
  file: FileObj,
) {
  const payload = await amplifyClient.graphql({
    query: updateResourceObj,
    variables: {
      input: {
        id: resourceId,
        title: title,
        description: description,
        file: cleanGql(file),
      },
    },
  });

  return payload.data.updateResourceObj as ResourceObj;
}
