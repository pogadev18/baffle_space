import Head from 'next/head';
import { Box, Container, SimpleGrid, Heading } from '@chakra-ui/react';
import React from 'react';
import TeamMember from '@/root/components/landingPage/teamMember';

const TeamPage = () => {
  return (
    <>
      <Head>
        <title>Baffle.space | Team</title>
      </Head>

      <Box width="100%" background="black.900">
        <Container maxW="8xl" paddingX={{ base: '25px', md: '40px' }}>
          <Box textAlign="center" marginTop="60px">
            <Heading
              as="h1"
              fontSize={{ base: '14vw', sm: '70px' }}
              textTransform="uppercase"
              fontWeight="900"
              marginBottom="60px"
              color="white"
            >
              Baffle Space core team
            </Heading>
          </Box>
          <Box marginY={{ base: '20px', sm: '60px' }} textAlign="center">
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
              <TeamMember
                imageUrl="https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg"
                name="Calin Susa"
                memberRole="Co-Founder, Developer & Designer"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab corporis excepturi,
                mollitia nisi pariatur repellendus? Aut autem corporis culpa facilis fugiat ipsa
                magni maiores, minima modi qui quis suscipit!
              </TeamMember>
              <TeamMember
                imageUrl="https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg"
                name="Theodor Gal"
                memberRole="Co-Founder & Community Manager"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab corporis excepturi,
                mollitia nisi pariatur repellendus? Aut autem corporis culpa facilis fugiat ipsa
                magni maiores, minima modi qui quis suscipit!
              </TeamMember>
              <TeamMember
                imageUrl="https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg"
                name="Bogdan Pogacean"
                memberRole="Co-Founder & Developer"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab corporis excepturi,
                mollitia nisi pariatur repellendus? Aut autem corporis culpa facilis fugiat ipsa
                magni maiores, minima modi qui quis suscipit!
              </TeamMember>
            </SimpleGrid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

TeamPage.landingPage = true;

export default TeamPage;
