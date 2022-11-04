import { ReactNode } from 'react';
import { Image } from '@chakra-ui/react';
import { TwitterSvg } from '@/root/components/logoTwitter/LogoTwitter';

import styles from './TeamMember.module.scss';

interface AlertComponentProps {
  children: ReactNode;
  name: string;
  memberPosition: string;
  memberRole: string;
  imageUrl: string;
  twitter: string;
  alternativeText: string;
}

const TeamMember = ({
  children,
  name,
  memberPosition,
  memberRole,
  imageUrl,
  twitter,
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
        />
      </section>
      <section className={styles.memberInfo}>
        <div className={styles.nameAndSocialWrapper}>
          <span className={styles.name}>{name}</span>
          {twitter && (
            <span>
              <a rel="noreferrer" href={twitter} target="_blank">
                <TwitterSvg />
              </a>
            </span>
          )}
        </div>

        <span className={styles.position}>{memberPosition}</span>
        <span className={styles.role}>{memberRole}</span>
        <span className={styles.description}>{children}</span>
      </section>
    </section>
  );
};

export default TeamMember;
