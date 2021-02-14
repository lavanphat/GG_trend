import { Box, H2, Illustration, Text } from '@admin-bro/design-system';
import React from 'react';

const pageHeaderHeight: number = 284;
const pageHeaderPaddingY: number = 74;
const pageHeaderPaddingX: number = 250;

// tslint:disable-next-line:typedef
function dashboard() {
  return (
    <Box position="relative" overflow="hidden">
      <Box
        position="absolute"
        top={50}
        left={-10}
        opacity={[0.2, 0.4, 1]}
        animate
      >
        <Illustration variant="Rocket" children="" />
      </Box>
      <Box
        position="absolute"
        top={-70}
        right={-15}
        opacity={[0.2, 0.4, 1]}
        animate
      >
        <Illustration variant="Moon" children="" />
      </Box>
      <Box
        bg="grey100"
        height={pageHeaderHeight}
        py={pageHeaderPaddingY}
        px={['default', 'lg', pageHeaderPaddingX]}
      >
        <Text textAlign="center" color="white">
          <H2>{'Welcome on Board!'}</H2>
          <Text opacity={0.8}>
            {'Now you are one of us! We prepared a few tips for you to start:'}
          </Text>
        </Text>
      </Box>
    </Box>
  );
}

export default dashboard;
