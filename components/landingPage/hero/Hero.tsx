import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

import { HiVideoCamera } from 'react-icons/hi';

import YoutubeEmbed from '@/components/youtubeEmbed';
import { Illustration } from './Illustration';

const Hero = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container maxW="5xl">
      <Stack
        textAlign="center"
        align="center"
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 10 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight="110%"
        >
          Baffle.space
          <Text as="span" color="orange.400">
            &nbsp;made easy
          </Text>
        </Heading>
        <Text color="gray.500" maxW="3xl">
          Never miss a meeting. Never be late for one too. Keep track of your meetings and receive
          smart reminders in appropriate times. Read your smart “Daily Agenda” every morning.
        </Text>
        <Stack spacing={6} direction="row">
          <Button
            rounded="full"
            px={6}
            colorScheme="orange"
            bg="orange.400"
            _hover={{ bg: 'orange.500' }}
          >
            Get started
          </Button>
          <Button onClick={onOpen} rightIcon={<HiVideoCamera />} rounded="full" px={6}>
            How to use MetaMask
          </Button>
        </Stack>
        <Flex w="full">
          <Illustration height={{ sm: '24rem', lg: '28rem' }} mt={{ base: 12, sm: 16 }} />
        </Flex>
      </Stack>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>How to use MetaMask in 2 minutes</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <YoutubeEmbed embedId="YVgfHZMFFFQ" />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Hero;
