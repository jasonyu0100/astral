const baseUrl = '/horizon';

export const horizonMap = {
  horizon: {
    id: {
      forum: {
        link: (id: string) => `${baseUrl}/${id}/forum`,
      },
      story: {
        link: (id: string) => `${baseUrl}/${id}/story`,
      },
      cluster: {
        link: (id: string) => `${baseUrl}/${id}/cluster`,
      },
      point: {
        link: (id: string) => `${baseUrl}/${id}/point`,
      },
    },
    link: baseUrl,
  },
};
