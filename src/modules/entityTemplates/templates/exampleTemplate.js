const exampleTemplate = {
  name: 'example template from extension',
  displayName: 'Example Entity Template',
  // includeSuggestedSearches: true,
  /* placeSuggestedSearches: 'main', */
  /* suggestedSearchFilter: [], */
  layout: {
    name: 'ExampleOrganizationLayout',
  },
  widgets: [
    { name: 'ExampleHeaderWidget', place: 'header' },
    { name: 'ExampleBodyWidget', place: 'body' },
    { name: 'ExampleBodyRightWidget', place: 'bodyRight' },
  ],
};

export default exampleTemplate;
