import { ReactNode } from 'react';
import { Image } from '@chakra-ui/react';

import styles from './TeamMember.module.scss';

interface AlertComponentProps {
  children: ReactNode;
  name: string;
  memberRole: string;
  imageUrl: string;
}

const TeamMember = ({ children, name, memberRole, imageUrl }: AlertComponentProps) => {
  return (
    <section className={styles.teamCardWrapper}>
      <section className={styles.imageWrapper}>
        <Image
          borderRadius="5px"
          alt="Hero Image"
          fit="cover"
          align="center"
          h="100%"
          w="100%"
          margin="auto"
          src={imageUrl}
        />
      </section>
      <section className={styles.member}>
        <p className={styles.name}>{name}</p>
        <p className={styles.role}>{memberRole}</p>
        <p className={styles.description}>{children}</p>
      </section>
    </section>
  );
};

export default TeamMember;
