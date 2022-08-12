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
        imageUrl="https://res.cloudinary.com/baffle-space/image/upload/v1660305121/my-uploads/imj0i8uywbt1kqxx5hpq.jpg"
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
        imageUrl="https://res.cloudinary.com/baffle-space/image/upload/v1660305142/my-uploads/fribcjc3c1ngimqbribo.jpg"
        fallbackUrl="https://res.cloudinary.com/baffle-space/image/upload/v1660305137/my-uploads/ssoa1i7ciylmlewmjacv.jpg"
        name="Theodor Gal"
        alternativeText="Theodor Gal"
        memberPosition="Co-Founder"
        memberRole=" Business & Community Strategist "
      >
        Entrepreneur since 2017, driven by a strong need of independence, becoming enthusiastic
        about blockchain technologies came easily. Passionate about teaching, I share my insights to
        bridge the space between business and tech for communities.
      </TeamMember>
      <TeamMember
        imageUrl="https://res.cloudinary.com/baffle-space/image/upload/v1660305106/my-uploads/jrh6hidqkebeujcl0y8m.jpg"
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
        imageUrl="https://res.cloudinary.com/baffle-space/image/upload/v1660305131/my-uploads/rpsognl0d3tdkemhqebp.jpg"
        fallbackUrl="https://res.cloudinary.com/baffle-space/image/upload/v1660305126/my-uploads/qppgn9bzv8nk2rqtmedl.jpg"
        alternativeText="Cosmin Hodiș"
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