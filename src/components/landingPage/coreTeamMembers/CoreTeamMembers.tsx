import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';

import TeamMember from '@/root/components/landingPage/teamMember';

import { teamMembers } from '@/root/utils/texts';

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
      {teamMembers.map((member) => (
        <TeamMember
          key={member.name}
          name={member.name}
          memberPosition={member.position}
          memberRole={member.role}
          imageUrl={member.profileImage}
          alternativeText={member.name}
          twitter={member.twitterProfile}
        >
          {member.description}
        </TeamMember>
      ))}
    </SimpleGrid>
  );
};

export default CoreTeamMembers;
