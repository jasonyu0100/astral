const baseUrl = '/horizon';

export const horizonMap = {
  horizon: {
    id: {
      base: {
        link: (id: string) => `${baseUrl}/${id}/base`,
      },
      map: {
        link: (id: string) => `${baseUrl}/${id}/map`,
      },
      log: {
        link: (id: string) => `${baseUrl}/${id}/log`,
      },
      share: {
        link: (id: string) => `${baseUrl}/${id}/share`,
      },
      link: (id: string) => `${baseUrl}/${id}`,
    },
    link: baseUrl,
  },
};
