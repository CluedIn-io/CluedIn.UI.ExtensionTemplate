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
