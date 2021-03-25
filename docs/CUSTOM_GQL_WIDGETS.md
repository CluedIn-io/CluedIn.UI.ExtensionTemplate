# Requesting data for your widgets
If the data that is passed to your entity widget isn't sufficient for your needs, you can add a bespoke request to your widget configuration.

## Example
Consider the following example:
```js
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
```

This widget has a _gql_ object added to it's configuration. You can see in the example the _query_ property, that contains a bespoke GraphQL query. In the app, you can navigate to _Consume >> GraphQL_ and use the tool there to help you construct your query.

The query will get executed, and the resulting data from the server will be passed as the _gqlData_ prop to your widget component. Also passed will be the props _gqlLoading_ and _gqlError_ to indicate different states that can occurr when communicating with the server.

The query will be passed an _$id_ variable. This is the id of the entity we are rendering.

The following component is given as the view to the widget above:
```jsx
import React from 'react';
import { Error, Loader, WidgetWrapper } from '../shared';

const Component = ({ gqlData, gqlLoading, gqlError }) => {
  if (gqlLoading) {
    return <Loader />;
  }

  if (gqlError) {
    return <Error>ERROR! - FAILED TO LOAD DATA</Error>
  }

  return (
    <WidgetWrapper>
      <table>
        {gqlData.map(d => (
          <tr>
            <td>{d.detail}</td>
            <td>{d.latestValue}</td>
          </tr>
        ))}
      </table>
    </WidgetWrapper>
  )
}

export default Component;
```

You can see it deconstructs _gqlData, gqlLoading and gqlError_ from the props. If the data is loading it will render a loader. If an error occurrs whilst getting the data an error is rendered. If the data is present it uses the data to render a table.

### The gql config
By default, your widget component will receive the data as the server sends it in the _gqlData_ prop. There are some options you have for influencing the shape of the _gqlData_ prop.

#### Default Value
You can add a _defaultValue_ to your gql config (as seen in the example above). If the data is loading, the value of _gqlData_ will be the defaultValue. Default value is also used in conjuction with _valuePath_ below.

#### Value Path
If you add a _valuePath_ string to the gql config, _gqlData_ will be the value resolved from the server response at that path. If that path is `undefined`, the default value will be used.

For example, suppose the server responded with:
```js
{
  data: {
    entity: {
      entityType: '/Person',
      metric: {
        allDimensions: [
          { detail: 'metric-detail-one', latestValue: 0.37 }
          { detail: 'metric-detail-two', latestValue: 0.82 }
          { detail: 'metric-detail-three', latestValue: 0.64 }
        ]
      }
    }
  }
}
```
If we were only really interested in the _allDimensions_ array, we could add a valuePath of `'data.entity.metric.allDimensions'`, and the gqlData prop in our component would be the array.

#### Value resolver
If none of the above satisfy your needs, you could add a _valueResolver_ function. The function will be passed the data from the server, and also the props due to be passed to your component. The return value from the valueResolver will be used as the _gqlData_ prop.

For example, consider this server response again:
```js
{
  data: {
    entity: {
      entityType: '/Person',
      metric: {
        allDimensions: [
          { detail: 'metric-detail-one', latestValue: 0.37 }
          { detail: 'metric-detail-two', latestValue: 0.82 }
          { detail: 'metric-detail-three', latestValue: 0.64 }
        ]
      }
    }
  }
}
```

Let's say you wanted the _allDimensions_ array, but you wanted to convert the latest values to percentages for ease of rendering. You could add the following function as the valueResolver:

```js
(data, props) => {
  const allDimensions = _.get(data, 'data.entity.metric.allDimensions', []);
  return allDimensions.map(d => ({
    ...d,
    percentage: d.latesValue * 100
  }));
}
```

The props are not used in the example, but I included them so you can see that they are there.

#### Option Precedence
`valuePath` and `valueResolver` are there just for convenience. You can of course do the same things in your widget component if you'd prefer.

If you do use them, use one or the other. If you define both, `valueResolver` will take precedence over `valuePath`.
