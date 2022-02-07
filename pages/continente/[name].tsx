import { useRouter } from 'next/router';
import {
  Box,
  Text,
  Flex,
  Icon,
  Image,
  UnorderedList,
  ListItem,
  SimpleGrid,
  Heading,
  Tooltip,
  Center,
} from '@chakra-ui/react';
import { WarningIcon } from '@chakra-ui/icons';

import Header from 'components/Header';

export default function Continent() {
  const router = useRouter();
  const { name } = router.query;

  return (
    <>
      <Header hasButton />
      <Box
        as="header"
        w="100%"
        h={500}
        backgroundImage="url(/img/banner-continent.png)"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      >
        <Box position="relative" maxW={1240} height="100%" mx="auto">
          <Heading
            as="h2"
            size="xl"
            position="absolute"
            bottom="60px"
          >
            {name}
          </Heading>
        </Box>
      </Box>
      <Flex maxW={1240} mx="auto" my="80px" justify="space-between" flexWrap="wrap">
        <Text maxW={600} fontSize="xl" textAlign="justify" lineHeight="36px">
          A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>
        <UnorderedList
          listStyleType="none"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          w={480}
        >
          <ListItem>
            <Text fontSize="xl" fontWeight={600} textAlign="center">
              <Box fontSize="4xl" color="yellow.800" fontWeight={700}>50</Box> países</Text>
          </ListItem>
          <ListItem>
            <Text fontSize="xl" fontWeight={600} textAlign="center">
              <Box fontSize="4xl" color="yellow.800" fontWeight={700}>60</Box> línguas</Text>
          </ListItem>
          <ListItem>
            <Text fontSize="xl" fontWeight={600} textAlign="center">
              <Box fontSize="4xl" color="yellow.800" fontWeight={700}>27</Box> cidades +100
              <Tooltip label="Ver mais cidades">
                <Icon as={WarningIcon} boxSize="14px" m="2" color="gray.800" />
              </Tooltip>
            </Text>
          </ListItem>
        </UnorderedList>
      </Flex>
      <Box maxW={1240} mx="auto" mb={35}>
        <Heading as="h3" color="black.100" size="xl" fontWeight={500} mb="10">
          Cidades +100
        </Heading>
        <SimpleGrid columns={[1, 2, 4]} spacing={12}>
          <Box bg="white" w={256} h={279} borderRadius="4px" border=" 1px solid rgba(255, 186, 8, 0.5);">
            <Image src="/img/londres.jpg" alt="Londres" />
            <Flex h="106px" alignItems="center" py={4} px={6}>
              <Box w="50%" h="100%">
                <Heading as="h3" size="sm" fontWeight={600} color="black.100" mb={4}>
                  Londres
                </Heading>
                <Heading as="h4" size="xs" fontWeight={400} color="gray.800">
                  Reino Unido
                </Heading>
              </Box>
              <Center  w="50%" h="100%">
                <Image src="/img/reino-unido.png" alt="Reino Unido" />
              </Center>
            </Flex>
          </Box>
          <Box bg="white" w={256} h={279} borderRadius="4px" border=" 1px solid rgba(255, 186, 8, 0.5);">
            <Image src="/img/paris.png" alt="Paris" />
            <Flex h="106px" alignItems="center" py={4} px={6}>
              <Box w="50%" h="100%">
                <Heading as="h3" size="sm" fontWeight={600} color="black.100" mb={4}>
                  Paris
                </Heading>
                <Heading as="h4" size="xs" fontWeight={400} color="gray.800">
                  França
                </Heading>
              </Box>
              <Center  w="50%" h="100%">
                <Image src="/img/franca.png" alt="França" />
              </Center>
            </Flex>
          </Box>
          <Box bg="white" w={256} h={279} borderRadius="4px" border=" 1px solid rgba(255, 186, 8, 0.5);">
            <Image src="/img/roma.png" alt="Roma" />
            <Flex h="106px" alignItems="center" py={4} px={6}>
              <Box w="50%" h="100%">
                <Heading as="h3" size="sm" fontWeight={600} color="black.100" mb={4}>
                  Roma
                </Heading>
                <Heading as="h4" size="xs" fontWeight={400} color="gray.800">
                  Itália
                </Heading>
              </Box>
              <Center  w="50%" h="100%">
                <Image src="/img/italia.png" alt="Itália" />
              </Center>
            </Flex>
          </Box>
          <Box bg="white" w={256} h={279} borderRadius="4px" border=" 1px solid rgba(255, 186, 8, 0.5);">
            <Image src="/img/praga.png" alt="Praga" />
            <Flex h="106px" alignItems="center" py={4} px={6}>
              <Box w="50%" h="100%">
                <Heading as="h3" size="sm" fontWeight={600} color="black.100" mb={4}>
                  Praga
                </Heading>
                <Heading as="h4" size="xs" fontWeight={400} color="gray.800">
                  República Tcheca
                </Heading>
              </Box>
              <Center  w="50%" h="100%">
                <Image src="/img/republica-tcheca.png" alt="República Tcheca" />
              </Center>
            </Flex>
          </Box>
          <Box bg="white" w={256} h={279} borderRadius="4px" border=" 1px solid rgba(255, 186, 8, 0.5);">
            <Image src="/img/amsterda.png" alt="Amsterdã" />
            <Flex h="106px" alignItems="center" py={4} px={6}>
              <Box w="50%" h="100%">
                <Heading as="h3" size="sm" fontWeight={600} color="black.100" mb={4}>
                  Amsterdã
                </Heading>
                <Heading as="h4" size="xs" fontWeight={400} color="gray.800">
                  Holanda
                </Heading>
              </Box>
              <Center  w="50%" h="100%">
                <Image src="/img/holanda.png" alt="Holanda" />
              </Center>
            </Flex>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
}
