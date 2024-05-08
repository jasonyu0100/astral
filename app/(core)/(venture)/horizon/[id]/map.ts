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
      arc: {
        link: (id: string) => `${baseUrl}/${id}/arc`,
      },
      point: {
        link: (id: string) => `${baseUrl}/${id}/point`,
      },
    },
    link: baseUrl,
  },
};
