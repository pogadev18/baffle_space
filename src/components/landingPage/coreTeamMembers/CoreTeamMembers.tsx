import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';

import TeamMember from '@/root/components/landingPage/teamMember';

interface CoreTeamMembersProps {
  desktopNumberOfColumns: number;
}

const CoreTeamMembers = ({ desktopNumberOfColumns }: CoreTeamMembersProps) => {
  return (
    <SimpleGrid
      marginTop="60px"
      columns={{ base: 1, lg: desktopNumberOfColumns, md: 2 }}
      spacing={10}
      textAlign="center"
    >
      <TeamMember
        imageUrl="https://res.cloudinary.com/baffle-space/image/upload/v1666351780/my-uploads/Calin_go9hsk.jpg"
        fallbackUrl="https://res.cloudinary.com/baffle-space/image/upload/v1660305115/my-uploads/p6l9f5o48qknioot7i7b.jpg"
        name="Călin Susa"
        alternativeText="Călin Susa"
        memberPosition="Co-Founder"
        memberRole="Developer & Designer"
      >
        Established artist with a keen eye for technology. Combining creativity and logic,
        programming became the means of bringing forth and expressing my imaginative core for the
        past 6 years.
      </TeamMember>
      <TeamMember
        imageUrl="https://res.cloudinary.com/baffle-space/image/upload/v1666351780/my-uploads/Teddy_znm0zd.jpg"
        fallbackUrl="https://res.cloudinary.com/baffle-space/image/upload/v1660305137/my-uploads/ssoa1i7ciylmlewmjacv.jpg"
        name="Theodor Gál"
        alternativeText="Theodor Gál"
        memberPosition="Co-Founder"
        memberRole=" Business & Community Strategist "
      >
        Entrepreneur driven by a strong need of independence, becoming enthusiastic about blockchain
        technologies came easily. Passionate about teaching, I share my insights to bridge the space
        between business, tech and communities.
      </TeamMember>
      <TeamMember
        imageUrl="https://res.cloudinary.com/baffle-space/image/upload/v1666351780/my-uploads/Bogdan_gx03qh.jpg"
        fallbackUrl="https://res.cloudinary.com/baffle-space/image/upload/v1660305100/my-uploads/cqhgprnd8zfytc7nptjz.jpg"
        name="Bogdan Pogăcean"
        alternativeText="Bogdan Pogăcean"
        memberPosition="Co-Founder"
        memberRole="Developer"
      >
        Full stack developer by repurposing the discipline acquired during 12 years of playing
        pro-basketball. Broadening the interest spectrum toward emerging technologies I deliver the
        same kind of top tier &lsquo;dunks&rsquo;.
      </TeamMember>
      <TeamMember
        name="Cosmin Hodiș"
        imageUrl="https://res.cloudinary.com/baffle-space/image/upload/v1666351780/my-uploads/Cosmin_qnawdx.jpg"
        fallbackUrl="https://res.cloudinary.com/baffle-space/image/upload/v1660305126/my-uploads/qppgn9bzv8nk2rqtmedl.jpg"
        alternativeText="Cosmin Hodiș"
        memberPosition="Visual Director"
        memberRole="Videographer & Designer"
      >
        Professional by all accounts, an in-depth analyst of his trades. Recognized by world
        renowned companies like HBO, Cosmin is devoted to elevate your understanding of Baffle
        Space.
      </TeamMember>
    </SimpleGrid>
  );
};

export default CoreTeamMembers;
