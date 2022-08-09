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
          <Box textAlign="center" marginTop={{ base: '25px', md: '60px' }}>
            <Heading
              as="h1"
              fontSize={{ base: '14vw', sm: '70px' }}
              textTransform="uppercase"
              fontWeight="900"
              marginBottom={{ base: '25px', md: '60px' }}
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
                memberPosition="Co-Founder"
                memberRole="Developer & Designer"
              >
                Established artist with a keen eye for technology. Combining creativity and logic,
                programming became the means of bringing forth and expressing my imaginative core
                for the past 6 years.
              </TeamMember>
              <TeamMember
                imageUrl="./teddy.jpg"
                name="Theodor Gal"
                memberPosition="Co-Founder"
                memberRole=" Business & Community Strategist "
              >
                Entrepreneur since 2017, driven by a strong need of independence, becoming
                enthusiastic about blockchain technologies came easily. Passionate about teaching, I
                share my insights to bridge the space between business and tech for communities.
              </TeamMember>
              <TeamMember
                imageUrl="./bogdan.jpeg"
                name="Bogdan Pogacean"
                memberPosition="Co-Founder"
                memberRole="Developer"
              >
                Full stack developer by repurposing the discipline acquired during 12 years of
                playing pro-basketball. Broadening the interest spectrum toward emerging
                technologies I deliver the same kind of top tier &lsquo;dunks&rsquo;.
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
