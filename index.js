import UICore from '@cluedin/ui';
import { Audio } from 'uxi/Icons';
import extensionModules from './modules';

const root = document.getElementById('app');

UICore.bootstrap(root, {
  pillars: [{
    requiredAdmin: false,
    hideFromMenu: false,
    name: 'extension',
    Icon: Audio,
    displayName: 'My extension',
    path: '/admin/extension',
  }],
  modules: extensionModules,
});
