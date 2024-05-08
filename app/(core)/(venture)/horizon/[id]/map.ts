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
      dual: {
        link: (id: string) => `${baseUrl}/${id}/dual`,
      },
      point: {
        link: (id: string) => `${baseUrl}/${id}/point`,
      },
    },
    link: baseUrl,
  },
};
