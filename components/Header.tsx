import Link from 'next/link';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Box, Center, Image, Heading, IconButton } from '@chakra-ui/react';

type HeaderProps = {
  hasButton?: boolean;
}

// Header
export default function Header({ hasButton = false }: HeaderProps) {
  return (
    <Box maxW={1160} py="7" mx="auto">
      {/* Back button */}
      {
        hasButton && (
          <Link href="/" passHref>
            <IconButton
              variant="unstyled"
              aria-label="Voltar"
              position="absolute"
              icon={<ChevronLeftIcon w={30} h={30} />}
            />
          </Link>
        )
      }
      <Center>
        <Heading as="h1">
          <Image
            src="/img/logo.svg"
            alt="worldtrip"
            w={185}
            h={45}
          />
        </Heading>
      </Center>
    </Box>
  );
}
