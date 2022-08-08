import { Heading } from '@chakra-ui/react';

const BaffleSpaceGames = () => {
  return (
    <>
      <Heading
        as="h3"
        fontSize={{ base: '11vw', sm: '25px' }}
        fontWeight="900"
        color="white"
        marginBottom="20px"
      >
        Baffle Space Games *
      </Heading>
      <p>
        Dream Prize payouts, if chosen as the way of claiming the win, will be sent to the winning
        ticket address.
      </p>
      <p>
        Secondary draw prizes will be sent to the winning tickets addresses after the draw within a
        timeframe that will not exceed 24 hours.
      </p>
      <p>
        Rewards of NFT owning players will be sent to the address they used for purchasing tickets
        after the draw within a timeframe that will not exceed 24 hours.
      </p>
      <p>
        *If within the timeframe set for the accumulation phase, the validation amount is not
        reached, players will have the option to have the ticket(s) value sent back to their wallet
        (minus the transaction fee) the next day at 00:00 UTC, or pass their chances (tickets) on to
        next game for the same Dream Prize for which the accumulation phase will begin the next day
        at 00:00 UTC.
      </p>
      <p>All payouts will be made using $MATIC.</p>
    </>
  );
};

export default BaffleSpaceGames;
