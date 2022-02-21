import { useRouter } from 'next/router';
import {
  Box, Text,
  Flex,
  UnorderedList,
  Heading,
  useBreakpointValue,
  Center, Spinner,
} from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { WarningIcon } from '@chakra-ui/icons';

import Header from 'components/Header';
import Item from 'components/Continent/Item';
import CityCard from 'components/Continent/CityCard';

interface CityData {
  name: string;
  city: string;
  bgUrl: string;
  flagUrl: string;
}

interface ContinentData {
  name: string;
  slug: string;
  bgUrl: string;
  resume: string;
  cities: CityData[];
}

export default function Continent() {
  const router = useRouter();
  const { slug } = router.query;

  const [continent, setContinent] = useState<ContinentData>({} as ContinentData);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  async function loadContinentData() {
    setIsLoading(true);

    try {
      const { data } = await axios.get(`http://localhost:3000/api/continentes/${slug}`);
      setContinent(data.continent);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadContinentData();
  }, []);

  if (isLoading) {
    return (
      <Center w="100vw" h="100vh">
        <Spinner size="xl" color="gray.800" />
      </Center>
    );
  }

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
            {continent?.name}
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
          {continent?.resume}
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
          <Item 
            value="60" 
            description="cidades +100" 
            tooltip={{ 
              icon: WarningIcon, 
              text: 'Ver mais cidades' 
            }} 
          />
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
          {
            continent?.cities?.map((city) => (
              <CityCard 
                key={city.city} 
                country={{...city}} 
              />
            ))
          }
        </Flex>
      </Box>
    </>
  );
}
