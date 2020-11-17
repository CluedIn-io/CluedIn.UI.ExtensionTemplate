import UICore from '@cluedin/ui';
import { Datamart } from 'uxi/Icons';
import extensionModules from './modules';

const root = document.getElementById('app');

UICore.bootstrap(root, {
  pillars: [{
    requiredAdmin: false,
    hideFromMenu: false,
    name: 'extension',
    Icon: Datamart,
    displayName: 'My extension',
    path: '/admin/extension',
  }],
  modules: extensionModules,
});
