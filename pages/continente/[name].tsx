import { useRouter } from 'next/router';
import { Box, Text, Flex, UnorderedList, ListItem, SimpleGrid, Heading } from '@chakra-ui/react';

import Header from '../../components/Header';

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
        <Heading as="h2">{name}</Heading>
      </Box>
      <Flex maxW={1240} mx="auto" my="80px" justify="space-between">
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
            <Text fontSize="xl" textAlign="center"><Box fontSize="4xl">50</Box> países</Text>
          </ListItem>
          <ListItem>
            <Text fontSize="xl" textAlign="center"><Box fontSize="4xl">50</Box> países</Text>
          </ListItem>
          <ListItem>
            <Text fontSize="xl" textAlign="center"><Box fontSize="4xl">50</Box> países</Text>
          </ListItem>
        </UnorderedList>
      </Flex>
      <Box maxW={1240} mx="auto" mb={35}>
        <Heading as="h3" color="black.100" size="xl" fontWeight={500}>Cidades +100</Heading>
        <SimpleGrid columns={4} spacing={12} mt={10}>
          <Box bg="pink" w={256} h={279}>

          </Box>
          <Box bg="pink" w={256} h={279}>

          </Box>
          <Box bg="pink" w={256} h={279}>

          </Box>
          <Box bg="pink" w={256} h={279}>

          </Box>
          <Box bg="pink" w={256} h={279}>

          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
}
