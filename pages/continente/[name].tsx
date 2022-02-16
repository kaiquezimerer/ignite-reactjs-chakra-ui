import { useRouter } from 'next/router';
import {
  Box,
  Text,
  Flex,
  Image,
  UnorderedList,
  Heading,
  Center,
  useBreakpointValue,
} from '@chakra-ui/react';
import { WarningIcon } from '@chakra-ui/icons';

import Header from 'components/Header';
import Item from 'components/Continent/Item';
import CityCard from 'components/Continent/CityCard';

export default function Continent() {
  const router = useRouter();
  const { name } = router.query;

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <>
      {/* Header */}
      <Header hasButton />
      {/* Continent cover */}
      <Box
        as="header"
        w="100%"
        h={isWideVersion ? 500 : 150}
        backgroundImage="url(/img/banner-continent.png)"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      >
        <Box
          position="relative"
          maxW={1240}
          height="100%"
          mx="auto"
        >
          <Heading
            as="h2"
            size="xl"
            position="absolute"
            left={isWideVersion ? '5px' : '50%'}
            transform={`translate(${isWideVersion ? 0 : '-50%'})`}
            bottom="60px"

          >
            {name}
          </Heading>
        </Box>
      </Box>
      {/* Content */}
      <Flex
        maxW={1240}
        mx="auto"
        my={['6', '20']}
        px="15px"
        justify="space-between"
        flexWrap="wrap"
      >
        <Text
          maxW={600}
          fontSize={["md", "xl"]}
          textAlign="justify"
          lineHeight={['30px', '36px']}
        >
          A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>
        <UnorderedList
          listStyleType="none"
          display="flex"
          justifyContent={['flex-start', 'space-between']}
          alignItems="center"
          w={480}
          mt="16px"
        >
          <Item value="50" description="países" />
          <Item value="60" description="línguas" />
          <Item value="60" description="cidades +100" tooltip={{ icon: WarningIcon, text: 'Ver mais cidades' }} />
        </UnorderedList>
      </Flex>
      {/* City list */}
      <Box maxW={1240} mx="auto" mb={35}>
        <Heading
          as="h3"
          color="black.100"
          size="xl"
          fontWeight={500}
          mb="10"
          ml="2"
        >
          Cidades +100
        </Heading>
        <Flex
          flexWrap="wrap"
          justifyContent={isWideVersion ? 'space-btween' : 'center'}
        >
          <CityCard country={{
            name: 'Reino Unido',
            city: 'Londres',
            bgUrl: '/img/londres.jpg',
            flagUrl: '/img/reino-unido.png',
          }} />
          <CityCard country={{
            name: 'França',
            city: 'Paris',
            bgUrl: '/img/paris.png',
            flagUrl: '/img/franca.png',
          }} />
          <CityCard country={{
            name: 'Itália',
            city: 'Roma',
            bgUrl: '/img/roma.png',
            flagUrl: '/img/italia.png',
          }} />
          <CityCard country={{
            name: 'República Tcheca',
            city: 'Praga',
            bgUrl: '/img/praga.png',
            flagUrl: '/img/republica-tcheca.png',
          }} />
          <CityCard country={{
            name: 'Holanda',
            city: 'Amsterdã',
            bgUrl: '/img/amsterda.png',
            flagUrl: '/img/holanda.png',
          }} />
        </Flex>
      </Box>
    </>
  );
}
