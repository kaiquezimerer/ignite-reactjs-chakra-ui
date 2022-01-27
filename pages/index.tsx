import Image from 'next/image';
import { Box, Heading, Flex, Text, useBreakpointValue } from '@chakra-ui/react';

import Header from "../components/Header";

export default function Home() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <main>
      {/* Header */}
      <Header />
      {/* Banner */}
      <Box
        as="section"
        bgImg="url('/img/banner-bg.png')"
        bgPos="top center"
        bgRepeat="no-repeat"
        bgSize="cover"
        px="4"
      >
        <Box
          maxW={1160}
          minH={335}
          mx="auto"
          position="relative"
          py={isWideVersion ? 20 : 10}
        >
          <Heading
            as="h2"
            size="xl"
            fontWeight={500}
            lineHeight="1.4"
          >
            5 Continentes,<br /> infinitas possibilidades.
          </Heading>
          <Heading
            as="h3"
            size="md"
            fontWeight={400}
            lineHeight="1.4"
            maxW={524}
            mt="5"
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Heading>
          {
            isWideVersion && (
              <Box
                position="absolute"
                bottom={-10}
                right={-10}
                transform="rotate(3deg)"
              >
                <Image
                  src="/img/airplane.svg"
                  alt=""
                  role="presentation"
                  width="417px"
                  height="270px"
                />
              </Box>
            )
          }
        </Box>
      </Box>
      {/* Travel types */}
      <Box
        maxW={1160}
        mx="auto"
        py="20"
        my="8"
        position="relative"
        _after={{
          content: '" "',
          display: 'block',
          width: '90px',
          height: '2px',
          position: 'absolute',
          bottom: 0,
          left: '52%',
          transform: 'translateX(-50%)',
          background: 'black.100',
        }}
      >
        <Flex
          flexWrap="wrap"
          justify={isWideVersion ? 'space-between' : 'space-around'}
        >
          <Flex justify="center" flexDir="column" mx="2">
            {
              isWideVersion && (
                <Image
                  src="/img/cocktail.svg"
                  alt=""
                  role="presentation"
                  width="85px"
                  height="85"
                />
              )
            }
            <Text
              mt="5"
              fontSize="2xl"
              fontWeight={600}
              textTransform="lowercase"
            >
              Vida noturna
            </Text>
          </Flex>
          <Flex justify="center" flexDir="column" mx="2">
            {
              isWideVersion && (
                <Image
                  src="/img/surf.svg"
                  alt=""
                  role="presentation"
                  width="85px"
                  height="85"
                />
              )
            }
            <Text
              mt="5"
              fontSize="2xl"
              fontWeight={600}
              textTransform="lowercase"
            >
              Praia
            </Text>
          </Flex>
          <Flex justify="center" flexDir="column" mx="2">
            {
              isWideVersion && (
                <Image
                  src="/img/building.svg"
                  alt=""
                  role="presentation"
                  width="85px"
                  height="85"
                />
              )
            }
            <Text
              mt="5"
              fontSize="2xl"
              fontWeight={600}
              textTransform="lowercase"
            >
              Moderno
            </Text>
          </Flex>
          <Flex justify="center" flexDir="column" mx="2">
            {
              isWideVersion && (
                <Image
                  src="/img/museum.svg"
                  alt=""
                  role="presentation"
                  width="85px"
                  height="85"
                />
              )
            }
            <Text
              mt="5"
              fontSize="2xl"
              fontWeight={600}
              textTransform="lowercase"
            >
              Clássico
            </Text>
          </Flex>
          <Flex justify="center" flexDir="column" mx="2">
            {
              isWideVersion && (
                <Image
                  src="/img/earth.svg"
                  alt=""
                  role="presentation"
                  width="85px"
                  height="85"
                />
              )
            }
            <Text
              mt="5"
              fontSize="2xl"
              fontWeight={600}
              textTransform="lowercase"
            >
              E mais...
            </Text>
          </Flex>
        </Flex>
      </Box>
      {/* Continents (Slider) */}
      <Box maxW={1160} mx="auto">
        <Heading
          as="h2"
          color="black.100"
          fontSize="4xl"
          fontWeight={500}
          lineHeight={1.6}
          textAlign="center"
        >
          Vamos nessa? <br />Então escolha seu continente
        </Heading>
        {/* TODO: Add continent Swipper */}
        <Box bg="gray" w="100%" h="450px" my="54">

        </Box>
      </Box>
    </main>
  );
}
