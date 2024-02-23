import { amplifyClient } from '@/(logic)/aws/graphql/main';
import { FileObj } from '@/(logic)/model/resource/file/main';
import { ResourceObj } from '@/(logic)/model/resource/main';
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
