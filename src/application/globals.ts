export const paths = {
  home: '/',
  notFound: '/*',
  auth: '/authentication',
  resetPassword: '/authentication/reset-password',
};

export const userAuthorities = {
  admin: 'Admin',
  user: 'User',
  moderator: 'Moderator',
};

export const captions = {
  pages: {
    home: 'Главная',
    notFound: 'Страница не найдена',
    auth: 'Страница авторизации',
    resetPassword: 'Страница сброса пароля',
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
  resetPassword: {
    id: 'resetPassword',
    path: paths.resetPassword,
    title: captions.pages.resetPassword,
  },
};

export default {
  paths,
  captions,
  pages,
};
