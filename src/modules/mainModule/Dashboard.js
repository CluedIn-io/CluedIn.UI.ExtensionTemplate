import React from 'react';
import { Dashboard } from '@cluedin/ui';

const allUsers = `
  query {
    search(query:"*") {
      totalResults
      entries {
        id
        name
      }
    }
  }
`;

const widgetCategories = [
  {
    "displayName": "Sales Overview",
    "code": "sales",
  },
  {
    "displayName": "Marketing Overview",
    "code": "marketing",
  },
];

const widgets = [{
  "title": "All users in total",
  "icon": "user",
  "kpiType": "success",
  "type": "actionkpi",
  "gql": {
    query: allUsers,
    valuePath: 'search.totalResults',
    defaultValue: 0,
  },
  // "to": {
  //   pathname: '/admin/gn/partner',
  // },
  "category": "sales",
},];

const DashboardDemo = ({
  match,
}) => {
  return (
    <Dashboard
      match={match}
      displayName="Dashboard"
      categories={widgetCategories}
      widgets={widgets}
    />
  );
};

export default DashboardDemo;
