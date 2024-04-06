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
      origin: {
        link: (id: string) => `${baseUrl}/${id}/log`,
      },
    },
    link: baseUrl,
  },
};
