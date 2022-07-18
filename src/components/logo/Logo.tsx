import { Text, Link } from '@chakra-ui/react';

const Logo = () => {
  return (
    <Text fontWeight="bold" color="gray.300" fontSize="25px">
      <Link
        _hover={{
          textDecoration: 'none',
        }}
        href="/"
      >
        BAFFLE
      </Link>
    </Text>
  );
};

export default Logo;
