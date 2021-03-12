import React from 'react';
import styled from 'styled-components';
import { WidgetWrapper } from '../shared';

const NameHeader = styled.h1`
  margin: 0;
`;

const CreatedDate = styled.div`
  font-weight: lighter;
  font-style: italic;
  font-size: 14px;
`;

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

export default Component;
