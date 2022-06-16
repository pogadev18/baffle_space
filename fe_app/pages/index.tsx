import type { NextPage } from "next";
import { Grid, GridItem } from "@chakra-ui/react";

import ItemCard from "@/components/itemCard";

import { mockedItems } from "../constants/mockedData";

import { CardItemProps } from "@/utils/interfaces/cardItem";
import { useMoralis } from "react-moralis";

const Home: NextPage = () => {
  const { user } = useMoralis();

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      {mockedItems.map((item: CardItemProps) => {
        const { id, name, images, price, ticketPrice, ticketsLeft } = item;
        return (
          <GridItem key={id} w="100%">
            <ItemCard
              id={id}
              name={name}
              images={images}
              price={price}
              ticketPrice={ticketPrice}
              ticketsLeft={ticketsLeft}
            />
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default Home;
