import React from 'react';
import styled from 'styled-components';
import { WidgetWrapper } from '../shared';

const Bold = styled.span`
  font-weight: bold;
`;

const Component = ({ displayName, description }) => {
  return (
    <WidgetWrapper>
      <p>Widgets components get given their displayName and description as props.</p>
      <p>The displayName prop of this widget is <Bold>{displayName}</Bold> (also seen in the heading of the widget).</p>
      <p>The displayName prop of this widget is <Bold>{description}</Bold>.</p>
    </WidgetWrapper>
  );
};

export default Component;
