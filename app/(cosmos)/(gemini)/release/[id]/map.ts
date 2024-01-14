export const releaseMap = {
  release: {
    id: {
      one: {
        link: (id: string) => `/release/${id}/one`,
      },
      two: {
        link: (id: string) => `/release/${id}/two`,
      },
      three: {
        link: (id: string) => `/release/${id}/three`,
      },
      four: {
        link: (id: string) => `/release/${id}/four`,
      },
      link: (id: string) => `/release/${id}`,
    },
    link: "/release"
  },
};
