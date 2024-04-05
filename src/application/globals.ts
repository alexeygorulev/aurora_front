export const paths = {
  home: '/',
  notFound: '/*',
  auth: '/authentication',
};

export const userAuthorities = {
  admin: 'admin',
  user: 'user',
  moderator: 'moderator',
};

export const captions = {
  pages: {
    home: 'Главная',
    notFound: 'Страница не найдена',
    auth: 'Страница авторизации',
  },
  errors: {
    default: 'Возникла ошибка. Мы, скорее всего, уже работаем над исправлением. Можете уточнить у службы поддержки.',
    404: 'Искомый ресурс не найден',
  },
};

export const pages = {
  home: {
    id: 'home',
    path: paths.home,
    title: captions.pages.home,
    authorities: [userAuthorities.admin, userAuthorities.user, userAuthorities.moderator],
  },
  notFound: {
    id: 'notFound',
    path: paths.notFound,
    title: captions.pages.notFound,
    authorities: [userAuthorities.admin, userAuthorities.user, userAuthorities.moderator],
  },
  auth: {
    id: 'auth',
    path: paths.auth,
    title: captions.pages.auth,
  },
};

export default {
  paths,
  captions,
  pages,
};
