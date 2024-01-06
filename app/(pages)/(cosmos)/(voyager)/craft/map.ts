export const craftMap = {
  craft: {
    search: {
      link: "/craft/search",
    },
    manage: {
      link: "/craft/manage",
      section: {
        id: {
          link: (id: string) => `/craft/manage/section/${id}`,
        },
      },
      folder: {
        id: {
          link: (id: string) => `/craft/manage/folder/${id}`,
        },
      },
    },
    explore: {
      link: "/craft/explore",
    },
    link: "/craft",
  },
};
