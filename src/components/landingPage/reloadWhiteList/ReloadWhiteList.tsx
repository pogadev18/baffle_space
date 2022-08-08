import { IconButton, Text } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

import { useWhitelistSlots } from '@/root/hooks/useWhitelistSlots';
import { FaSync } from 'react-icons/fa';

const LoadingSpinner = dynamic(() => import('@/root/components/LoadingSpinner'));

const ReloadButton = ({ onClick }: { onClick: () => void }) => (
  <IconButton
    onClick={onClick}
    _hover={{ background: 'yellow.300' }}
    variant="ghost"
    aria-label="Search database"
    icon={<FaSync />}
  />
);

interface IReloadWhiteListProps {
  fontSize: string;
}

const refreshTextStyles = {
  color: 'black',
  fontWeight: '900',
};

const ReloadWhiteList = ({ fontSize }: IReloadWhiteListProps) => {
  const { whitePaperSlots, fetchSlots, isFetching } = useWhitelistSlots();

  return (
    <Text
      display="flex"
      alignItems="center"
      gap={2}
      color="black"
      fontWeight="900"
      textTransform="uppercase"
      fontSize={fontSize}
    >
      {isFetching ? (
        <LoadingSpinner spinnerColor="black" />
      ) : whitePaperSlots ? (
        <>
          {whitePaperSlots} spots remaining
          <ReloadButton onClick={fetchSlots} />
        </>
      ) : (
        <>
          <button style={refreshTextStyles} type="button" onClick={fetchSlots}>
            Refresh for availability
          </button>
          <ReloadButton onClick={fetchSlots} />
        </>
      )}
    </Text>
  );
};

export default ReloadWhiteList;
