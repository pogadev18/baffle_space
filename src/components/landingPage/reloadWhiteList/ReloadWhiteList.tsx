import { IconButton, Spinner, Text } from '@chakra-ui/react';

import { useWhitelistSlots } from '@/root/hooks/useWhitelistSlots';
import { FaSync } from 'react-icons/fa';

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
        <Spinner color="black" />
      ) : whitePaperSlots ? (
        <>
          {whitePaperSlots} spots remaining
          <ReloadButton onClick={fetchSlots} />
        </>
      ) : (
        <>
          Refresh for availability
          <ReloadButton onClick={fetchSlots} />
        </>
      )}
    </Text>
  );
};

export default ReloadWhiteList;
