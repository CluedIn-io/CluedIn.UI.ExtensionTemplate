# Adding a new Module
Modules can be thought of as a sub-section of a Pillar. They can appear on the Pillar's default dashboard, and as a submenu item of the Pillar in the main navigation.

To create a new module, add a new folder into `src/modules` - you can use the _exampleModule_ folder as a template. Amend `module.js` as appropriate, and ensure it is exported from `src/modules/index.js`.

You can create new routes, add React components, and pretty much extend as you wish with modules.
