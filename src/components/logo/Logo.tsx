import { Text } from '@chakra-ui/react';
import Link from 'next/link';

const Logo = () => {
  return (
    <Text fontWeight="bold" color="gray.300" fontSize="25px">
      <Link href="/">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a>
          <strong>BAFFLE</strong>
        </a>
      </Link>
    </Text>
  );
};

export default Logo;
