import { useEffect } from 'react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Heading, Flex, Text, useBreakpointValue } from '@chakra-ui/react';

import Header from '../components/Header';
import styles from '../styles/swiper.module.css';

SwiperCore.use([Navigation]);

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
        px={4}
        as="section"
        bgImg="url('/img/banner-bg.png')"
        bgPos="top center"
        bgRepeat="no-repeat"
        bgSize="cover"
      >
        <Box
          position="relative"
          maxW={1160}
          minH={335}
          mx="auto"
          py={20}
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
            maxW={524}
            mt={5}
            fontWeight={400}
            lineHeight="1.4"
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
        position="relative"
        maxW={1160}
        mx="auto"
        my={8}
        py={20}
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
          <Flex justify="center" flexDir="column" mx={2}>
            {
              isWideVersion && (
                <Image
                  src="/img/cocktail.svg"
                  alt=""
                  role="presentation"
                  width="85px"
                  height="85px"
                />
              )
            }
            <Text
              mt={5}
              fontSize={['xl', "2xl"]}
              fontWeight={600}
              textTransform="lowercase"
              _before={isWideVersion ? null : {
                content: '" "',
                borderRadius: '50%',
                display: 'inline-block',
                width: '8px',
                height: '8px',
                backgroundColor: 'yellow.800',
                margin: '2px 5px',
              }}
            >
              Vida noturna
            </Text>
          </Flex>
          <Flex justify="center" flexDir="column" mx={2}>
            {
              isWideVersion && (
                <Image
                  src="/img/surf.svg"
                  alt=""
                  role="presentation"
                  width="85px"
                  height="85px"
                />
              )
            }
            <Text
              mt="5"
              fontSize={['xl', "2xl"]}
              fontWeight={600}
              textTransform="lowercase"
              _before={isWideVersion ? null : {
                content: '" "',
                borderRadius: '50%',
                display: 'inline-block',
                width: '8px',
                height: '8px',
                backgroundColor: 'yellow.800',
                margin: '2px 5px',
              }}
            >
              Praia
            </Text>
          </Flex>
          <Flex justify="center" flexDir="column" mx={2}>
            {
              isWideVersion && (
                <Image
                  src="/img/building.svg"
                  alt=""
                  role="presentation"
                  width="85px"
                  height="85px"
                />
              )
            }
            <Text
              mt="5"
              fontSize={['xl', "2xl"]}
              fontWeight={600}
              textTransform="lowercase"
              _before={isWideVersion ? null : {
                content: '" "',
                borderRadius: '50%',
                display: 'inline-block',
                width: '8px',
                height: '8px',
                backgroundColor: 'yellow.800',
                margin: '2px 5px',
              }}
            >
              Moderno
            </Text>
          </Flex>
          <Flex justify="center" flexDir="column" mx={2}>
            {
              isWideVersion && (
                <Image
                  src="/img/museum.svg"
                  alt=""
                  role="presentation"
                  width="85px"
                  height="85px"
                />
              )
            }
            <Text
              mt="5"
              fontSize={['xl', "2xl"]}
              fontWeight={600}
              textTransform="lowercase"
              _before={isWideVersion ? null : {
                content: '" "',
                borderRadius: '50%',
                display: 'inline-block',
                width: '8px',
                height: '8px',
                backgroundColor: 'yellow.800',
                margin: '2px 5px',
              }}
            >
              Clássico
            </Text>
          </Flex>
          <Flex justify="center" flexDir="column" mx={2}>
            {
              isWideVersion && (
                <Image
                  src="/img/earth.svg"
                  alt=""
                  role="presentation"
                  width="85px"
                  height="85px"
                />
              )
            }
            <Text
              mt="5"
              fontSize={['xl', "2xl"]}
              fontWeight={600}
              textTransform="lowercase"
              _before={isWideVersion ? null : {
                content: '" "',
                borderRadius: '50%',
                display: 'inline-block',
                width: '8px',
                height: '8px',
                backgroundColor: 'yellow.800',
                margin: '2px 5px',
              }}
            >
              E mais...
            </Text>
          </Flex>
        </Flex>
      </Box>
      {/* Continents (Slider) */}
      <Box maxW={1160} mx="auto" mt={14}>
        <Heading
          as="h2"
          color="black.100"
          fontSize={['2xl', '4xl']}
          fontWeight={500}
          lineHeight={1.6}
          textAlign="center"
        >
          Vamos nessa? <br />Então escolha seu continente
        </Heading>
        <Box bg="gray" w="100%" h="450px" my={54}>
          <Swiper navigation={true} className={styles.swiper}>
            <SwiperSlide>
              <Flex
                bgImg="url(/img/europa.png)"
                justifyContent="center"
                align="center"
                flexDirection="column"
                w="100%"
                h="100%"
              >
                <Heading as="h2" fontSize={['24px', '48px']} fontWeight={700} mb={4}>
                  América do Norte
                </Heading>
                <Heading as="h3" fontSize={['14px', '24px']}>O continente mais antigo.</Heading>
              </Flex>
            </SwiperSlide>
            <SwiperSlide>
              <Flex
                bgImg="url(/img/europa.png)"
                justifyContent="center"
                align="center"
                flexDirection="column"
                w="100%"
                h="100%"
              >
                <Heading as="h2" fontSize={['24px', '48px']} fontWeight={700} mb={4}>
                  América do Sul
                </Heading>
                <Heading as="h3" fontSize={['14px', '24px']}>O continente mais antigo.</Heading>
              </Flex>
            </SwiperSlide>
            <SwiperSlide>
              <Flex
                bgImg="url(/img/europa.png)"
                justifyContent="center"
                align="center"
                flexDirection="column"
                w="100%"
                h="100%"
              >
                <Heading as="h2" fontSize={['24px', '48px']} fontWeight={700} mb={4}>
                  Ásia
                </Heading>
                <Heading as="h3" fontSize={['14px', '24px']}>O continente mais antigo.</Heading>
              </Flex>
            </SwiperSlide>
            <SwiperSlide>
              <Flex
                bgImg="url(/img/europa.png)"
                justifyContent="center"
                align="center"
                flexDirection="column"
                w="100%"
                h="100%"
              >
                <Heading as="h2" fontSize={['24px', '48px']} fontWeight={700} mb={4}>
                  África
                </Heading>
                <Heading as="h3" fontSize={['14px', '24px']}>O continente mais antigo.</Heading>
              </Flex>
            </SwiperSlide>
            <SwiperSlide>
              <Flex
                bgImg="url(/img/europa.png)"
                justifyContent="center"
                align="center"
                flexDirection="column"
                w="100%"
                h="100%"
              >
                <Heading as="h2" fontSize={['24px', '48px']} fontWeight={700} mb={4}>
                  Europa
                </Heading>
                <Heading as="h3" fontSize={['14px', '24px']}>O continente mais antigo.</Heading>
              </Flex>
            </SwiperSlide>
            <SwiperSlide>
              <Flex
                bgImg="url(/img/europa.png)"
                justifyContent="center"
                align="center"
                flexDirection="column"
                w="100%"
                h="100%"
              >
                <Heading as="h2" fontSize={['24px', '48px']} fontWeight={700} mb={4}>
                  Oceania
                </Heading>
                <Heading as="h3" fontSize={['14px', '24px']}>O continente mais antigo.</Heading>
              </Flex>
            </SwiperSlide>
          </Swiper>
        </Box>
      </Box>
    </main>
  );
}
