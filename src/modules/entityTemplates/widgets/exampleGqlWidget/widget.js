import Component from './Component';

const widget = {
  name: 'ExampleGqlWidget',
  displayName: 'Example GQL Widget',
  description: 'An example gql widget',
  view: Component,
  gql: {
    valuePath: 'data.entity.metric.allDimensions',
    defaultValue: [{ detail: 'GQL Data', latestValue: 100 }],
    query: `
      query($id: Guid!) {
        entity(id: $id) {
          entityType
          metric(name: "accuracy") {
            allDimensions {
              detail
              latestValue
            }
          }
        }
      }
    `
   }
};

export default widget;
