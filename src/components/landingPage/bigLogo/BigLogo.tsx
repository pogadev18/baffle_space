import { Heading, Text, Box } from '@chakra-ui/react';

import Logo from '@/root/components/logo';

import styles from './BigLogo.module.scss';

const BigLogo = () => (
  <div className={styles.bigLogoWrapper}>
    <Logo />
    <Box marginTop="30px">
      <Heading
        as="h2"
        fontSize={{ base: '8vw', sm: '34px' }}
        fontWeight="900"
        color="#fff"
        textTransform="uppercase"
      >
        baffle space
      </Heading>
      <Text color="#fff" fontSize="16px" margin="auto" width={{ base: 'auto', md: '520px' }}>
        Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative
        approaches to corporate strategy foster collaborative thinking.
      </Text>
    </Box>
  </div>
);

export default BigLogo;
