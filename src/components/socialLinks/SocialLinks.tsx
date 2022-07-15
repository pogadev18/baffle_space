import { Button, Stack, Text } from '@chakra-ui/react';
import { FaTelegramPlane, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa';

const SocialLinks = () => {
  const redirect = (url: string) => {
    return () => window.location.assign(url);
  };

  return (
    <>
      <Text fontWeight="900" fontSize="3xl" marginTop="0" marginBottom="15px">
        Follow us
      </Text>
      <Stack align="flex-start" spacing={4} className="links">
        <Button onClick={redirect('twitter')} leftIcon={<FaTwitter />} variant="link">
          Twitter
        </Button>
        <Button onClick={redirect('telegram')} leftIcon={<FaTelegramPlane />} variant="link">
          Telegram
        </Button>
        <Button onClick={redirect('tiktok')} leftIcon={<FaTiktok />} variant="link">
          TikTok
        </Button>
        <Button onClick={redirect('youtube')} leftIcon={<FaYoutube />} variant="link">
          YouTube
        </Button>
      </Stack>
    </>
  );
};

export default SocialLinks;
