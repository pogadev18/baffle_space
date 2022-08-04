import { Heading } from '@chakra-ui/react';

const WhitelistAndMint = () => {
  return (
    <>
      <Heading
        as="h3"
        fontSize={{ base: '11vw', sm: '25px' }}
        fontWeight="900"
        color="white"
        marginBottom="20px"
      >
        Whitelist & Mint
      </Heading>
      <p>
        While we work intensely on designing the NFTs, we opened a whitelist with 500 spots
        available for people who want to be among the first to own a business on the blockchain
        within the Baffle Space Ecosystem and get 25% off when minting will begin.
      </p>
      <p>
        Whitelisted wallets will have 24h to mint their NFTs before the minting goes public. This
        way you will have a head start to share your referral link.
      </p>
      <p>
        The Baffle Space Genesis NFT Collection is capped at 10.000 and will never increase. Being
        one of the 500 whitelisters, you will have the power to earn 5% off of every NFT minted
        using your referral link. With this percentage you will be able to earn up to 95 ETH by the
        time the Baffle Space Genesis NFT Collection gets sold out.
      </p>
    </>
  );
};

export default WhitelistAndMint;
