import React from 'react';
import styled from 'styled-components'
import { WidgetWrapper } from '../shared';

const Table = styled.table`
  width: 100%;
  & th {
    text-align: left;
  }
`;

const Component = ({ entity }) => {
  return (
    <WidgetWrapper>
      <p>As widgets get given the entity object, they get access to all vocab values.</p>
      <p>These are given in <i>entity.data.properties</i> property. The keys are pre-fixed with "property-"</p>
      <p>This entity has the following vocabs:</p>
      <Table>
        <tr>
          <th>Vocab key</th>
          <th>Vocab value</th>
        </tr>
        <tr>
          <td>Organisation.Name</td>
          <td>{entity.data.properties['property-organization.name']}</td>
        </tr>
        <tr>
          <td>User.Email</td>
          <td>{entity.data.properties['property-user.email']}</td>
        </tr>
      </Table>
    </WidgetWrapper>
  );
};

export default Component;
