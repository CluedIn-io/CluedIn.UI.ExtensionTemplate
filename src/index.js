import { bootstrap } from '@cluedin/ui';
import * as pillars from './pillars';
import * as modules from './modules';

const root = document.getElementById('app');

bootstrap(root, {
  pillars: Object.values(pillars),
  modules: Object.values(modules),
});
