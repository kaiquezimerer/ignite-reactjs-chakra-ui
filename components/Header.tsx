import Image from 'next/image';
import { Center, Heading } from '@chakra-ui/react';

// Header
export default function Header() {
  return (
    <Center py="8">
      <Heading as="h1">
        <Image
          src="/img/logo.svg"
          alt="worldtrip"
          width="185px"
          height="45px"
        />
      </Heading>
    </Center>
  );
}
