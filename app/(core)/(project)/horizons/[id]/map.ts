const baseUrl = '/horizons';

export const horizonsMap = {
  horizons: {
    id: {
      horizon: {
        link: (id: string) => `${baseUrl}/${id}/horizon`,
      },
      arc: {
        link: (id: string) => `${baseUrl}/${id}/arc`,
      },
      field: {
        link: (id: string) => `${baseUrl}/${id}/field`,
      },
      point: {
        link: (id: string) => `${baseUrl}/${id}/point`,
      },
    },
    link: baseUrl,
  },
};
