import { Carousel } from "react-responsive-carousel";
import { Box } from "@chakra-ui/layout";
import { Button, Heading, Text, Badge } from "@chakra-ui/react";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import { CardItemProps } from "@/utils/interfaces/cardItem";

const ItemCard = ({
  id,
  name,
  images,
  price,
  ticketPrice,
  ticketsLeft,
}: CardItemProps) => {
  return (
    <Box sx={{ border: "1px solid #ddd" }} borderRadius="lg" boxShadow="lg">
      <Carousel showStatus={false} showThumbs={false}>
        {images.map((image) => (
          <img key={image} src={image} alt="Cat" />
        ))}
      </Carousel>

      <Box p={6}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Button variant="link" color="black">
            <Heading as="h6" size="md">
              {name}
            </Heading>
          </Button>
          <Badge fontSize="0.8em" variant="solid" colorScheme="red">
            {price}
          </Badge>
        </Box>

        <Box mt={2}>
          <Text>Preț bilet: {ticketPrice}</Text>
          <Text>Bilete rămase: {ticketsLeft}</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default ItemCard;
