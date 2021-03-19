# Building templates for displaying entities

## Checkout the examples
This extension comes with some pre-packed examples for you to learn from. In order to see the examples in action just do the following:

1. Navigate to Administration >> Entity Types.
2. Find the _User_ entity type and click on it to go it's detail page.
3. Change the drop-down at the bottom to "_Example Entity Template_" and save.
4. Click the search button at the top of the page.
5. On the left, filter by _User_.
6. Select a user to go to their entity page.

The entity page is a bespoke view of the use entity type. It's using a template constructed from examples that you can use as reference.
## Layouts, Widgets and Templates
In order to create a bespoke view for an entity type you will need to build three things - a layout, some widgets and a template.

### Layouts
Layouts are JavaScript objects you define to describe the layout of the page. Any layouts you create need to be exported from `src/modules/entityTemplates/layouts/index.js` before you can use them.

In your layout you define rows for your page, and each row has up to 12 columns. It's probably easier to understand by example:

```js
const exampleLayout = {
  code: 'ExampleOrganizationLayout',
  children: [
    {
      type: 'row',
      columns: [
        {
          size: 12,
          name: 'header',
        },
      ],
    },
    {
      type: 'row',
      columns: [
        {
          size: 8,
          name: 'body',
        },
        {
          size: 4,
          name: 'bodyRight',
        },
      ],
    },
  ],
};
```

First thing to notice is the `code`. This is a unique reference/name you give the layout so you can use it in a template.

Following the code is an array of children and each child is a row. The first row above has one column taking up the full width of the page. We can see this because the `size` of the column is 12 - meaning all the width.

The second row has 2 two columns. The first column takes up `8/12` (2/3) of the width, and the second column `4/12` (1/3)of the row's width.

Each column in the layout has a unique name property. We use this name to place widgets into the layout.

### Widgets
Widgets are made up of a React component, and some metdata to describe them. You can checkout the examples in `src/modules/entityTemplates/widgets/`.

You need to ensure you export your widgets from `src/modules/entityTemplates/widgets/index.js` in order to use them.

Let's take a look at a simple example:

```js
import Component from './Component';

const widget = {
  name: 'ExampleHeaderWidget',
  displayName: 'Example Header Widget',
  description: 'An example entity widget in the header',
  view: Component,
}

export default widget;
```

You can see a widget has a unique name. You will need this to use the widget in a template. It also has a display name that is used in the title of a widget (check the user entity page we visited earlier). The description is for readers of the code to know what this widget is for.

The view is just a react component. The one used above can be seen here:

```jsx
const Component = ({ entity }) => {
  return (
    <WidgetWrapper>
      <NameHeader>{entity.name}</NameHeader>
      <CreatedDate>Created {entity.data.createdDateFormatted}</CreatedDate>
      <p>
        Widgets get thew whole entity object passed to them, so
        if you want render anything like the name or created date
        (seen above), then you can.
      </p>
    </WidgetWrapper>
  );
};
```

As you can see the component gets passed the entity object as a prop so you can use it's properties in the view.

As well as the entity object, many other props are passed to your widget. Check the other examples and set breakpoints or console logs to see exactly what data you have access to.

### Templates
Templates are what bring your layout and widgets together. It's where you say what layout to use, and what widgets to put where in the layout. Templates must be exported from `src/modules/entityTemplates/templates/index.js` in order to be available.

Here's an example of a template:

```js
const exampleTemplate = {
  name: 'example template from extension',
  displayName: 'Example Entity Template',
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
```

The above example has a unique name and a displayName. The displayName is what you see in the drop-down when selecting a template for an entity type (like we did in the steps above).

The template then describes the layout it would like to use, referencing the layout's `code` in the `name` property of the object.

The template must define a widgets array. The objects in the array reference the widget to use by it's `name`. The object also has a `place` property which is a reference to the layout column `name` in which to place the widget.

### What next?
If you have a look at the example layouts, widgets and templates, along with how they appear on the page (from the steps above) you will be empowered to build your own entity templates!
