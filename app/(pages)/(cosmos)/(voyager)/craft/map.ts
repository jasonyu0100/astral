export const craftMap = {
  craft: {
    search: {
      link: "/craft/search",
    },
    manage: {
      link: "/craft/manage",
      gallery: {
        id: {
          link: (id: string) => `/craft/manage/gallery/${id}`,
        },
      },
      collection: {
        id: {
          link: (id: string) => `/craft/manage/collection/${id}`,
        },
      },
    },
    explore: {
      link: "/craft/explore",
    },
    link: "/craft",
  },
};
