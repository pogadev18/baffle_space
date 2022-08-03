import React from 'react';
import { Heading } from '@chakra-ui/react';

const Introduction = () => {
  return (
    <>
      <Heading
        as="h3"
        fontSize={{ base: '14vw', sm: '25px' }}
        fontWeight="900"
        color="white"
        marginBottom="20px"
      >
        Introduction to global context
      </Heading>
      <p>
        The problem of every financial system at its beginning is belief, belief that it could
        actually satisfy the need of value transfer.
      </p>
      <p>
        Cryptocurrency is no exception, its adoption depends on the trust that it can transfer value
        effectively.
      </p>
    </>
  );
};

export default Introduction;
