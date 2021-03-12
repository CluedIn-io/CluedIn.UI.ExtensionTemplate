import routes from './routes';

const exampleModule = {
  pillar: 'example-pillar',
  name: 'example-module',
  displayName: 'Dashboard',
  path: '/dashboard',
  extendPillarDashboard: {
    actions: [
      {
        icon: 'report',
        name: 'Example Module',
        link: '/example-pillar/dashboard',
      },
    ],
  },
  routes,
};

export default exampleModule;
