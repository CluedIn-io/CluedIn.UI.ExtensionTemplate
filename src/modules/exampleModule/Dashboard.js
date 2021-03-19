import React from 'react';
import { Dashboard as DashboardComponent } from '@cluedin/ui';

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
    "displayName": "Users Overview",
    "code": "users",
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
  "category": "users",
},];

const Dashboard = ({
  match,
}) => {
  return (
    <DashboardComponent
      match={match}
      displayName="Dashboard"
      categories={widgetCategories}
      widgets={widgets}
    />
  );
};

export default Dashboard;
