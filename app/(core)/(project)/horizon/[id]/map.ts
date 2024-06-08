const baseUrl = '/horizon';

export const horizonMap = {
  horizon: {
    id: {
      story: {
        link: (id: string) => `${baseUrl}/${id}/story`,
      },
      flow: {
        link: (id: string) => `${baseUrl}/${id}/flow`,
      },
      map: {
        link: (id: string) => `${baseUrl}/${id}/map`,
      },
      point: {
        link: (id: string) => `${baseUrl}/${id}/point`,
      },
    },
    link: baseUrl,
  },
};
