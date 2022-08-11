import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';

import TeamMember from '@/root/components/landingPage/teamMember';

interface CoreTeamMembersProps {
  desktopNumberOfColumns: number;
}

const CoreTeamMembers = ({ desktopNumberOfColumns }: CoreTeamMembersProps) => {
  return (
    <SimpleGrid columns={{ base: 1, md: desktopNumberOfColumns }} spacing={10} textAlign="center">
      <TeamMember
        imageUrl="https://res.cloudinary.com/baffle-space/image/upload/v1660245057/my-uploads/yq9xctpozxnbklwbilrp.webp"
        name="Călin Susa"
        memberPosition="Co-Founder"
        memberRole="Developer & Designer"
      >
        Established artist with a keen eye for technology. Combining creativity and logic,
        programming became the means of bringing forth and expressing my imaginative core for the
        past 6 years.
      </TeamMember>
      <TeamMember
        imageUrl="https://res.cloudinary.com/baffle-space/image/upload/v1660245072/my-uploads/khqvtkvzrigej6f2b5tl.webp"
        name="Theodor Gal"
        memberPosition="Co-Founder"
        memberRole=" Business & Community Strategist "
      >
        Entrepreneur since 2017, driven by a strong need of independence, becoming enthusiastic
        about blockchain technologies came easily. Passionate about teaching, I share my insights to
        bridge the space between business and tech for communities.
      </TeamMember>
      <TeamMember
        imageUrl="https://res.cloudinary.com/baffle-space/image/upload/v1660244937/my-uploads/yhi1v2duaqayn5sbrojl.webp"
        name="Bogdan Pogăcean"
        memberPosition="Co-Founder"
        memberRole="Developer"
      >
        Full stack developer by repurposing the discipline acquired during 12 years of playing
        pro-basketball. Broadening the interest spectrum toward emerging technologies I deliver the
        same kind of top tier &lsquo;dunks&rsquo;.
      </TeamMember>
      <TeamMember
        imageUrl="https://res.cloudinary.com/baffle-space/image/upload/v1660245064/my-uploads/cz8y8dmpdbd86iyrotlx.webp"
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
