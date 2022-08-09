import { Heading } from '@chakra-ui/react';

import Link from 'next/link';
import React from 'react';

import styles from './WhitepaperSections.module.scss';

const TheGameplay = () => {
  return (
    <>
      <Heading
        as="h3"
        fontSize={{ base: '11vw', sm: '25px' }}
        fontWeight="900"
        color="white"
        marginBottom="20px"
      >
        The Gameplay
      </Heading>
      <p>The following steps describe how Baffle Space Games (raffles) will play out.</p>
      <ol>
        <li>
          <strong>Choose your dream</strong>

          <p>
            When players enter the Baffle Space Games dApp by connecting their MetaMask wallet, the
            first thing to do will be to choose the Dream Prize they want to play for. When the dApp
            launches players will be able to choose and play for a variety of Dream Prizes included
            in the Dream Electronics Prize Category. As we develop the Baffle Space Gaming dApp more
            Dream Prize Categories will be added.
          </p>
          <p>
            Once the player has selected the Dream Prize, they will enter the Game by purchasing one
            or more tickets for the raffle, using $MATIC. The number of tickets purchased in a
            raffle will determine the chances the player has to win the Dream Prize.
          </p>
          <ol>
            <li>
              <strong>Dream Prize Categories</strong>
              <p>
                The initial Dream Prize Category featured by the Baffle Space Gaming dApp will be
                Electronics. We know people have various dreams and we are set to fulfill many of
                them by constantly expanding the catalog. We select top of the range prizes in each
                category, only the ones worthy to be called Dream Prizes.
              </p>
              <p>
                The Dream Prize Categories to choose prizes from will be: Electronics, Cars, Bikes,
                Homes, Vacations and Gold.
              </p>
              <p>
                Ticket prices and accumulation time-frames will be updated in the whitepaper and
                announced on Twitter and Telegram at the launch of each new playable category.
              </p>
              <p>
                Baffle Space listens to its community and polls will be held regularly to determine
                what future categories the community wants to play for. The most desired future
                Dream Prize Categories will be implemented after the first six are up and running.{' '}
              </p>
            </li>
          </ol>
        </li>
        <li>
          <strong>Accumulation</strong>
          <p>
            A time-frame will be set for each game in which players will be able to buy tickets for
            the Dream Prize they chose in the previous step. The first category of prizes players
            can play for will have a 7 day accumulation period. Different prize categories will have
            different time frames. This step will determine the validation of the game, the reward
            amounts, the secondary draw prize pool and Baffle Space development and maintenance
            revenue.
          </p>
          <ol>
            <li>
              <span className={styles.nestedTitle}>Validation</span>
              <p>
                Each game will play out if within the time-frame the minimum validation amount is
                raised by ticket sales. The minimum validation amount represents the value of the
                prize the raffle is held for.
              </p>
            </li>
            <li>
              <span className={styles.nestedTitle}>Earnings of NFT owning players</span>
              <p>
                <Link href="/whitepaper#genesisNFT">
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a className={styles.link}>Read More</a>
                </Link>
              </p>
            </li>
            <li>
              <span className={styles.nestedTitle}>The Secondary Draw Prize Pool</span>
              <p>
                When the secondary draw is developed, every game will have a prize pool comprised of
                20% of the amount raised above the validation amount. After determining the winning
                ticket of the Dream Prize, the non-winning tickets will automatically enter the
                secondary draw, where 3 winning tickets will be drawn and share this prize pool
              </p>
            </li>
            <li>
              <span className={styles.nestedTitle}>
                Development and maintenance revenue of Baffle Space
              </span>
              <p>
                The cost of developing and maintaining the Baffle Space Gaming dApp is covered by
                20% of the amount raised above the validation amount.
              </p>
            </li>
          </ol>
        </li>
        <li>
          <strong>Win the dream prize</strong>
          <ol>
            <li>
              The Main Draw
              <p>
                The next step of every game is The Main Draw. This is when the winning ticket of the
                Dream Prize gets drawn. After the accumulation period ends, the selection of the
                winning ticket is made randomly using blockchain technology.
              </p>
            </li>
            <li>
              Claiming the win
              <p>
                Baffle Space offers the owner of the winning ticket two options of claiming the
                Dream Prize. The winner will reach out to us on Telegram to confirm their win and
                choose how they wish to claim their prize.
              </p>
              <ol>
                <li>
                  <span className={styles.nestedTitle}>Get the win</span>
                  <p>
                    To choose this option, by participating in Baffle Space raffles in case of
                    winning the prize, the player agrees to receive their prize in crypto amounting
                    to the USDT value of the prize. The winner agrees to receive the amount in
                    $MATIC to be sent to their wallet and is calculated based on the MATIC/USDT
                    parity at the time of the drawing of the winner. The winner accepts the gift and
                    considers the receival of said $MATIC sufficient and will not seek further
                    reimbursement from Baffle Space.
                  </p>
                </li>
                <li>
                  <span className={styles.nestedTitle}>Get the Dream Prize</span>
                  <p>
                    To choose this option, by participating in Baffle Space raffles in case of
                    winning the prize, the player agrees that Baffle Space will cash out from
                    cryptocurrencies amounting to the prize value. Baffle Space will pay all income
                    taxes for the aforementioned conversion and subsequently purchases the prize.
                    The winner accepts the prize and considers the receival of the prize sufficient
                    and will not seek further reimbursement from Baffle Space. This option will
                    first be available for Romanian residents only&nbsp;
                    <Link href="/whitepaper#roadmap">
                      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                      <a className={styles.link}>(see the roadmap).</a>
                    </Link>
                  </p>
                </li>
              </ol>
            </li>
            <li>
              The Secondary Draw
              <p>
                After the main draw, players are automatically enrolled with their non-winning
                tickets for the secondary draw where they have more chances to win. Three winning
                tickets will be drawn and will share the 20% prize pool determined in the
                accumulation step.
              </p>
            </li>
            <li>
              Last Chance Draw
              <p>
                The remaining non-winning tickets will grant players yet another way to win the
                Baffle Space Games. This last draw of each raffle will bless players with chances
                (free tickets) and discounts for tickets in games with more valuable Dream Prizes
                than the current one.
              </p>
            </li>
          </ol>
        </li>
      </ol>
    </>
  );
};

export default TheGameplay;
