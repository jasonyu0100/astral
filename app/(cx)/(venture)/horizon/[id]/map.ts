const baseUrl = "/horizon"

export const horizonMap = {
  horizon: {
    id: {
      one: {
        link: (id: string) => `${baseUrl}/${id}/one`,
      },
      two: {
        link: (id: string) => `${baseUrl}/${id}/two`,
      },
      three: {
        link: (id: string) => `${baseUrl}/${id}/three`,
      },
      four: {
        link: (id: string) => `${baseUrl}/${id}/four`,
      },
      link: (id: string) => `${baseUrl}/${id}`,
    },
    link: baseUrl,
  },
};
