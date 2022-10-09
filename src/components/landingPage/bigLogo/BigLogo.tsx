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
        marginBottom="20px"
        textTransform="uppercase"
      >
        baffle space
      </Heading>
      <Text color="#fff" fontSize="16px" margin="auto" width={{ base: 'auto', md: '520px' }}>
        Home of the play to win and earn games!
        <br />
        Hybrid web3 lotteries owned by the people.
      </Text>
    </Box>
  </div>
);

export default BigLogo;
