import routes from './routes';

export default {
  pillar: 'extension',
  name: 'extension-mainModule',
  displayName: 'Dashboard',
  path: '/dashboard',
  extendPillarDashboard: {
    actions: [
      {
        icon: 'report',
        name: 'Main Module',
        link: '/admin/extension/dashboard',
      },
    ],
  },
  routes,
};
