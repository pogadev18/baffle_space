import { useState, useEffect, useRef, useCallback, SetStateAction } from 'react';
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Box,
  Button,
  Text,
  Heading,
  Stack,
} from '@chakra-ui/react';

import { gameContexts } from '@/root/utils/earningsSimulator';

const Buttons = ({
  gameContext,
  userSetGameContext,
  disabledContext,
}: {
  gameContext: any;
  userSetGameContext: any;
  disabledContext: boolean;
}) => {
  return (
    <Stack justify="center" spacing={1} direction="row" align="center">
      {gameContext.map((game: any) => (
        <Button
          disabled={disabledContext}
          fontWeight="400"
          textTransform="uppercase"
          background="#00B0CA"
          _hover={{
            background: '#05899c',
          }}
          size="md"
          onClick={() => {
            userSetGameContext(game.id);
          }}
          key={game.id}
        >
          {game.contextName}
        </Button>
      ))}
    </Stack>
  );
};

const labelStyles = {
  mt: '2',
  ml: '-2.5',
  fontSize: 'sm',
};

const SimulateEarnings = () => {
  const [sliderDefaultValue, setSliderDefaultValue] = useState(0);
  const [disabledContext, setDisabledContext] = useState(false);
  const [numberOfTiketsSetByUser, setNumberOfTiketsSetByUser] = useState(0);
  const [numberOfPlayersInGame, setNumberOfPlayersInGame] = useState(0);
  const [sliderState, setSliderState] = useState(true);
  const [userIncome, setUserIncome] = useState(0);
  const [numberOfSimplePlayersInGame, setNumberOfSimplePlayersInGame] = useState(0);
  // const [sumAmountForBaffleSpace, setSumAmountForBaffleSpace] = useState(0);
  const [newGameContext, setNewGameContext] = useState({
    contextName: '',
    timeInterval: '',
    maxTicketAmount: 0,
    minTiketAmount: 0,
    maxNumberOfPlayers: 0,
    minNumbersOfPlayers: 0,
    ticketPrice: 0,
  });
  const [userEarningPercent, setUserEarningPercent] = useState();
  const [ticketPriceByGameType, setTicketPriceByGameType] = useState(0);
  const [amountDistributed, setAmountDistributed] = useState(0);

  const maxUserTiketAnount = 1000;
  let totalNumberOfTickets: SetStateAction<number>;
  let sumAmountForPlayers: SetStateAction<number>;
  const ticketsByPlayer = useRef([]);
  let newTicketsByPlayer: any[] = [];
  const percentByPlayer: string[] = [];
  const totalEarnByEachPlayer: never[] = [];

  const createGameContext = (id: any) => {
    ticketsByPlayer.current.length = 0;
    gameContexts.map((game) => {
      if (game.id === id) {
        setNewGameContext({
          ...newGameContext,
          contextName: game.contextName,
          timeInterval: game.timeInterval,
          maxTicketAmount: game.maxTicketAmount,
          minTiketAmount: game.minTiketAmount,
          maxNumberOfPlayers: game.maxNumberOfPlayers,
          minNumbersOfPlayers: game.minNumbersOfPlayers,
          ticketPrice: game.ticketPrice,
        });
        setTicketPriceByGameType(gameContexts[id].ticketPrice);

        const playersInGame =
          Math.floor(Math.random() * (game.maxNumberOfPlayers - game.minNumbersOfPlayers + 1)) + 10;
        setNumberOfPlayersInGame(playersInGame);
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < playersInGame; i++) {
          const totalTiketsByPlayer =
            Math.floor(Math.random() * (game.maxTicketAmount - game.minTiketAmount + 1)) + 1;
          // @ts-ignore
          ticketsByPlayer.current.push(totalTiketsByPlayer);
        }

        setSliderState(false);
        setDisabledContext(true);
      }

      return null;
    });
  };

  const percentCalculationForEachPlayer = () => {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < newTicketsByPlayer.length; i++) {
      // @ts-ignore
      const percent = ((newTicketsByPlayer[i] / totalNumberOfTickets) * 100).toFixed(2);
      percentByPlayer.push(percent);
    }
    // console.log(percentByPlayer);
  };

  const playersIncome = () => {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < percentByPlayer.length; i++) {
      // @ts-ignore
      totalEarnByEachPlayer.push(((percentByPlayer[i] * sumAmountForPlayers) / 100).toFixed(2));
    }

    // console.log(totalEarnByEachPlayer);
  };

  const getUserIncome = () => {
    // @ts-ignore
    const income = Math.floor(totalEarnByEachPlayer.slice(-1));
    setUserIncome(income);
    // console.log(income);
  };

  const getUserPercent = () => {
    const percent = percentByPlayer.slice(-1);
    if (percentByPlayer[0] === 'NaN') {
      // @ts-ignore
      setUserEarningPercent(0);
    } else {
      // @ts-ignore
      setUserEarningPercent(percent);
    }
  };

  const addUserTicketsToTicketsByPlayerArray = useCallback(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    newTicketsByPlayer = [...ticketsByPlayer.current, numberOfTiketsSetByUser];
    // eslint-disable-next-line react-hooks/exhaustive-deps
    totalNumberOfTickets = newTicketsByPlayer.reduce((prevValue, currentValue) => {
      return prevValue + currentValue;
    }, 0);
    setNumberOfSimplePlayersInGame(totalNumberOfTickets);

    // @ts-ignore
    const totalTicketsPrice = totalNumberOfTickets * ticketPriceByGameType;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    sumAmountForPlayers = Math.floor((60 / 100) * totalTicketsPrice);
    setAmountDistributed(sumAmountForPlayers);
    // setSumAmountForBaffleSpace(Math.floor((20 / 100) * totalTicketsPrice));

    percentCalculationForEachPlayer();
    playersIncome();
    getUserIncome();
    getUserPercent();
  }, [numberOfTiketsSetByUser, numberOfPlayersInGame]);

  useEffect(() => {
    addUserTicketsToTicketsByPlayerArray();
  }, [addUserTicketsToTicketsByPlayerArray]);

  const handleSimulatorReset = () => {
    totalNumberOfTickets = 0;
    newTicketsByPlayer = [];

    setDisabledContext(false);
    setSliderState(true);
    setNewGameContext({
      contextName: '',
      timeInterval: '',
      maxTicketAmount: 0,
      minTiketAmount: 0,
      maxNumberOfPlayers: 0,
      minNumbersOfPlayers: 0,
      ticketPrice: 0,
    });

    setTicketPriceByGameType(0);
    setNumberOfPlayersInGame(0);
    setNumberOfSimplePlayersInGame(0);
    setSliderDefaultValue(0);
    setNumberOfTiketsSetByUser(0);
  };

  const spanStyles = { color: '#00B0CA', fontWeight: 'bold' };

  return (
    <Box display="flex" alignItems="center" gap="150px">
      <Box textAlign="center" flex="1" className="slider-wrapper">
        <Text fontSize="125px" fontWeight="700">
          {!userIncome ? 0 : userIncome}
          <span
            style={{
              fontSize: '40px',
              color: 'grey',
            }}
          >
            $
          </span>
        </Text>
        <Slider
          isDisabled={sliderState}
          // step={10}
          color="primary"
          defaultValue={sliderDefaultValue}
          max={maxUserTiketAnount}
          // valueLabelDisplay="auto"
          value={numberOfTiketsSetByUser}
          aria-label="slider"
          onChange={(val) => setNumberOfTiketsSetByUser(val)}
        >
          <SliderMark value={0} {...labelStyles}>
            0
          </SliderMark>
          <SliderMark value={200} {...labelStyles}>
            200
          </SliderMark>
          <SliderMark value={400} {...labelStyles}>
            400
          </SliderMark>
          <SliderMark value={600} {...labelStyles}>
            600
          </SliderMark>
          <SliderMark value={800} {...labelStyles}>
            800
          </SliderMark>
          <SliderMark value={1000} {...labelStyles}>
            1000
          </SliderMark>
          <SliderMark
            value={numberOfTiketsSetByUser}
            textAlign="center"
            bg="#00B0CA"
            color="white"
            mt="-10"
            ml="-5"
            w="12"
          >
            {numberOfTiketsSetByUser}
          </SliderMark>
          <SliderTrack bg="#333333">
            <SliderFilledTrack bg="#00B0CA" />
          </SliderTrack>
          <SliderThumb boxSize={6}>
            <Box color="#00B0CA" />
          </SliderThumb>
        </Slider>

        <Box marginTop="50px">
          <Buttons
            disabledContext={disabledContext}
            gameContext={gameContexts}
            userSetGameContext={createGameContext}
          />
          {!disabledContext ? (
            <p
              style={{
                marginTop: 10,
                color: '#fff',
                fontSize: 12,
              }}
            >
              * please select a game category from above
              <br /> in order to activate the simulator
            </p>
          ) : (
            <Box marginTop="10px">
              <span
                style={{
                  marginTop: 10,
                  color: '#fff',
                  fontSize: 12,
                }}
              >
                current category:{' '}
                <span style={{ fontWeight: 'bold' }}>{newGameContext.contextName}</span>
              </span>
              <p>
                <Button
                  _hover={{ background: '0' }}
                  size="sm"
                  variant="outline"
                  marginTop="5px"
                  type="button"
                  onClick={handleSimulatorReset}
                >
                  reset
                </Button>
              </p>
            </Box>
          )}
        </Box>
      </Box>
      <Box className="details-wrapper">
        <Heading as="h4" fontSize="28px" marginBottom="30px">
          Simulate the earnings <br />
          for NFTs owners
        </Heading>
        <Box color="#a9a9a9">
          <Text fontWeight="bold" fontSize="18px" color="#a9a9a9" marginBottom="15px">
            Simulated environment
          </Text>
          <p>
            Category:{' '}
            <span style={spanStyles} className="dinamic-data-style">
              {newGameContext.contextName}
            </span>
          </p>

          <p>
            Ticket price:{' '}
            <span style={spanStyles} className="dinamic-data-style">
              {ticketPriceByGameType}$
            </span>
          </p>

          <p>
            Duration:{' '}
            <span style={spanStyles} className="dinamic-data-style">
              {newGameContext.timeInterval}
            </span>
          </p>
          <p>
            <span>NFT owners: </span>
            <span style={spanStyles} className="dinamic-data-style">
              {numberOfPlayersInGame}
            </span>
          </p>
          <p>
            Amount distributed:{' '}
            <span style={spanStyles} className="dinamic-data-style">
              {amountDistributed}$
            </span>
          </p>
          <p>
            Number of tickets:&nbsp;
            <span style={spanStyles} className="dinamic-data-style">
              {!disabledContext ? 0 : numberOfSimplePlayersInGame}
            </span>
          </p>
          <p>
            Earning percent:{' '}
            <span style={spanStyles} className="dinamic-data-style">
              {userEarningPercent}%
            </span>
          </p>
          <p
            style={{
              marginTop: 10,
              color: 'grey',
              fontSize: 12,
            }}
          >
            * the amounts in dollars are converted from MATIC,
            <br /> which is the official currency of the game platform
          </p>
        </Box>
      </Box>
    </Box>
  );
};

export default SimulateEarnings;
