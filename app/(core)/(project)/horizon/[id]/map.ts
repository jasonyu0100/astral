const baseUrl = '/horizon';

export const horizonMap = {
  horizon: {
    id: {
      field: {
        link: (id: string) => `${baseUrl}/${id}/field`,
      },
      map: {
        link: (id: string) => `${baseUrl}/${id}/map`,
      },
      story: {
        link: (id: string) => `${baseUrl}/${id}/story`,
      },
      point: {
        link: (id: string) => `${baseUrl}/${id}/point`,
      },
    },
    link: baseUrl,
  },
};
