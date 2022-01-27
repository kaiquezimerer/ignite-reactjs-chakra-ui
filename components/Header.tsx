import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Box, Center, Heading, IconButton, Tooltip } from '@chakra-ui/react';
import { useEffect } from 'react';

interface HeaderProps {
  hasButton?: boolean;
}

// Header
export default function Header({ hasButton = false }: HeaderProps) {
  const router = useRouter();
  const { name } = router.query;

  useEffect(() => {
    name && console.log(name);
  }, [name]);

  return (
    <Box py="8" maxW={1160} mx="auto">
      {
        hasButton && (
          <Link href="/" passHref>
            <Tooltip label="Voltar">
              <IconButton
                variant="unstyled"
                aria-label="Voltar"
                position="absolute"
                icon={<ChevronLeftIcon w={30} h={30} />}
              />
            </Tooltip>
          </Link>
        )
      }
      <Center>
        <Heading as="h1">
          <Image
            src="/img/logo.svg"
            alt="worldtrip"
            width="185px"
            height="45px"
          />
        </Heading>
      </Center>
    </Box>
  );
}
