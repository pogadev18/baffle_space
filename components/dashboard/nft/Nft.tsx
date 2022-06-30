import { useEffect } from 'react';
import { useNFTBalances } from 'react-moralis';
import Moralis from 'moralis';

import TabsWrapper from '../tabsWrapper';

const Nft = ({ user }: { user: Moralis.User<Moralis.Attributes> | null }) => {
  const { getNFTBalances } = useNFTBalances();

  useEffect(() => {
    const getNFTs = async () => {
      await getNFTBalances({
        params: {
          chain: 'rinkeby',
          address: user?.get('ethAddress'),
        },
      });
    };

    getNFTs();
  }, []);

  return (
    <TabsWrapper>
      <p>NFTS</p>
    </TabsWrapper>
  );
};

export default Nft;
