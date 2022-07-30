import { useState, useCallback } from 'react';
import { useMoralisCloudFunction } from 'react-moralis';
import { WHITELIST_AVAILABLE_SLOTS } from '@/root/constants';

export const useWhitelistSlots = () => {
  const [whitePaperSlots, setWhitePaperSlots] = useState<null | number>(null);
  const { fetch, isFetching, error } = useMoralisCloudFunction(
    'getAllUsers',
    {},
    { autoFetch: false },
  );

  const fetchSlots = useCallback(async () => {
    try {
      const res: any = await fetch();

      if (res) {
        const whitelistedUsers: any = res
          ?.map((data: any) => data.attributes)
          .filter((user: any) => user.whiteList);

        setWhitePaperSlots(WHITELIST_AVAILABLE_SLOTS - whitelistedUsers.length);
      }
    } catch (e) {
      throw new Error('we could not calculate the availability of the slots left');
    }
  }, [fetch]);

  return { whitePaperSlots, fetchSlots, isFetching, error };
};
