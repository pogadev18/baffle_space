import { ReactNode } from 'react';
import { Image } from '@chakra-ui/react';

import styles from './TeamMember.module.scss';

interface AlertComponentProps {
  children: ReactNode;
  name: string;
  memberPosition: string;
  memberRole: string;
  imageUrl: string;
  fallbackUrl: string;
  alternativeText: string;
}

const TeamMember = ({
  children,
  name,
  memberPosition,
  memberRole,
  imageUrl,
  fallbackUrl,
  alternativeText,
}: AlertComponentProps) => {
  return (
    <section className={styles.teamCardWrapper}>
      <section className={styles.imageWrapper}>
        <Image
          borderRadius="5px"
          alt={alternativeText}
          fit="cover"
          align="center"
          h="100%"
          w="100%"
          margin="auto"
          src={imageUrl}
          fallbackSrc={fallbackUrl}
        />
      </section>
      <section className={styles.memberInfo}>
        <span className={styles.name}>{name}</span>
        <span className={styles.position}>{memberPosition}</span>
        <span className={styles.role}>{memberRole}</span>
        <span className={styles.description}>{children}</span>
      </section>
    </section>
  );
};

export default TeamMember;
