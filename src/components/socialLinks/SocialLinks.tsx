import { Button, Stack, Text } from '@chakra-ui/react';
import { FaTelegramPlane, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa';

interface ISocialLinksProps {
  alignTitleRight: boolean;
  alignIconsRight: boolean;
  titleColor: string;
  iconsColor: string;
  iconTextColor: string;
}

const SocialLinks = ({
  alignTitleRight,
  alignIconsRight,
  titleColor,
  iconsColor,
  iconTextColor,
}: ISocialLinksProps) => {
  const redirect = (url: string) => {
    return () => window.location.assign(url);
  };

  return (
    <>
      <Text
        textAlign={{ base: 'left', md: alignTitleRight ? 'right' : 'left' }}
        fontWeight="900"
        fontSize="3xl"
        marginTop="0"
        marginBottom="15px"
        color={titleColor}
      >
        Follow us
      </Text>
      <Stack
        align={{ base: 'flex-start', md: alignIconsRight ? 'flex-end' : 'flex-start' }}
        spacing={4}
        className="links"
      >
        <Button
          color={iconTextColor}
          onClick={redirect('twitter')}
          leftIcon={<FaTwitter color={iconsColor} />}
          variant="link"
        >
          Twitter
        </Button>

        <Button
          color={iconTextColor}
          onClick={redirect('telegram')}
          leftIcon={<FaTelegramPlane color={iconsColor} />}
          variant="link"
        >
          Telegram
        </Button>
        <Button
          color={iconTextColor}
          onClick={redirect('tiktok')}
          leftIcon={<FaTiktok color={iconsColor} />}
          variant="link"
        >
          TikTok
        </Button>
        <Button
          color={iconTextColor}
          onClick={redirect('youtube')}
          leftIcon={<FaYoutube color={iconsColor} />}
          variant="link"
        >
          YouTube
        </Button>
      </Stack>
    </>
  );
};

export default SocialLinks;
