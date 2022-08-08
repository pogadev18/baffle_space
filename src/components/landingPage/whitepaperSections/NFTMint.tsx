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
        Payouts
      </Heading>
      <ol>
        <li>
          <strong>NFT Mint</strong>
          <p>
            NFT owners who successfully onboard others to mint Baffle Space NFTs using their
            referral link are entitled to 5% of the price paid to mint. The counter in their
            dashboard shows how many NFTs were minted using their referral link. Such payments are
            carried out weekly on Mondays at 00:00 UTC.
          </p>
        </li>
        <li>
          <strong> Baffle Space Games Payouts</strong>
          <p>
            Dream Prize payouts, if chosen as the way of claiming the win, will be sent to the
            winning ticket address.
          </p>
          <p>
            Secondary draw prizes will be sent to the winning tickets addresses after the draw
            within a timeframe that will not exceed 24 hours.
          </p>
          <p>
            Rewards of NFT owning players will be sent to the address they used for purchasing
            tickets after the draw within a timeframe that will not exceed 24 hours.
          </p>
          <p>
            If within the timeframe set for the accumulation phase, the validation amount is not
            reached, the chances (tickets) purchased by players will automatically pass on to next
            game for the same Dream Prize for which the accumulation phase will begin the next day
            at 00:00 UTC. Players will have the option to remove their chances and have the
            ticket(s) value sent back to their wallet (minus the transaction fee) after the next
            accumulation phase begins.
          </p>
        </li>
      </ol>
    </>
  );
};

export default NFTMint;
