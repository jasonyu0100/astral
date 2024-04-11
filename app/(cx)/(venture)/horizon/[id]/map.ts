const baseUrl = '/horizon';

export const horizonMap = {
  horizon: {
    id: {
      link: {
        link: (id: string) => `${baseUrl}/${id}/link`,
      },
      map: {
        link: (id: string) => `${baseUrl}/${id}/map`,
      },
      rank: {
        link: (id: string) => `${baseUrl}/${id}/rank`,
      },
      origin: {
        link: (id: string) => `${baseUrl}/${id}/origin`,
      },
    },
    link: baseUrl,
  },
};
