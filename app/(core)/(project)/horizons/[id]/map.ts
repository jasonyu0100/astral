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
      board: {
        link: (id: string) => `${baseUrl}/${id}/board`,
      },
      point: {
        link: (id: string) => `${baseUrl}/${id}/point`,
      },
    },
    link: baseUrl,
  },
};
