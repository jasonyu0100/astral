const baseUrl = '/horizon';

export const horizonMap = {
  horizon: {
    id: {
      story: {
        link: (id: string) => `${baseUrl}/${id}/story`,
      },
      field: {
        link: (id: string) => `${baseUrl}/${id}/field`,
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
