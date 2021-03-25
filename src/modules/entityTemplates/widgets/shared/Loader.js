import React from 'react';
import styled from 'styled-components';
import { Loader as Spinner } from 'uxi/Indicator';
import { Flex } from 'uxi/Layout';

const Wrapper = styled(Flex)`
  min-height: 100px;
`;

const Loader = () => <Wrapper><Spinner /></Wrapper>;

export default Loader;
