import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';

import TeamMember from '@/root/components/landingPage/teamMember';

interface CoreTeamMembersProps {
  desktopNumberOfColumns: number;
}

const dummyImage =
  'https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg';

const CoreTeamMembers = ({ desktopNumberOfColumns }: CoreTeamMembersProps) => {
  return (
    <SimpleGrid columns={{ base: 1, md: desktopNumberOfColumns }} spacing={10} textAlign="center">
      <TeamMember
        imageUrl="./calin.jpg"
        name="Călin Susa"
        memberPosition="Co-Founder"
        memberRole="Developer & Designer"
      >
        Established artist with a keen eye for technology. Combining creativity and logic,
        programming became the means of bringing forth and expressing my imaginative core for the
        past 6 years.
      </TeamMember>
      <TeamMember
        imageUrl="./teddy.jpg"
        name="Theodor Gal"
        memberPosition="Co-Founder"
        memberRole=" Business & Community Strategist "
      >
        Entrepreneur since 2017, driven by a strong need of independence, becoming enthusiastic
        about blockchain technologies came easily. Passionate about teaching, I share my insights to
        bridge the space between business and tech for communities.
      </TeamMember>
      <TeamMember
        imageUrl="./bogdan.jpg"
        name="Bogdan Pogăcean"
        memberPosition="Co-Founder"
        memberRole="Developer"
      >
        Full stack developer by repurposing the discipline acquired during 12 years of playing
        pro-basketball. Broadening the interest spectrum toward emerging technologies I deliver the
        same kind of top tier &lsquo;dunks&rsquo;.
      </TeamMember>
      <TeamMember
        imageUrl={dummyImage}
        name="Cosmin Hodiș"
        memberPosition="Visuals Director"
        memberRole="Videographer & Designer"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, aspernatur consequatur
        doloribus facilis labore laudantium libero nobis non, pariatur quam quibusdam quod ratione
        repellat, tenetur vitae voluptas voluptate. Aspernatur, ut.
      </TeamMember>
    </SimpleGrid>
  );
};

export default CoreTeamMembers;
