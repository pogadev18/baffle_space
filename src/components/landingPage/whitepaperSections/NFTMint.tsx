import { Heading } from '@chakra-ui/react';

const NFTMint = () => {
  return (
    <>
      <Heading
        as="h3"
        fontSize={{ base: '11vw', sm: '25px' }}
        fontWeight="900"
        color="white"
        marginBottom="20px"
      >
        NFT Mint
      </Heading>
      <p>
        NFT owners who successfully onboard others to mint Baffle Space NFTs using their referral
        link are entitled to 5% of the price paid to mint. The counter in their dashboard shows how
        many NFTs were minted using their referral link. Such payments are carried out weekly on
        Mondays at 00:00 UTC.
      </p>
    </>
  );
};

export default NFTMint;
