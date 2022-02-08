import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Heading, Flex } from '@chakra-ui/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';

import styles from 'styles/swiper.module.css';

export default function Slider() {
  return (
    <Box bg="gray" w="100%" h={[375, 450]} my={['5', '12']}>
      <Swiper cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className={styles.swiper}
      >
        <SwiperSlide>
          <Link href="/continente/america-do-norte" passHref>
            <Flex
              bgImg="url(/img/europa.png)"
              justifyContent="center"
              align="center"
              flexDirection="column"
              w="100%"
              h="100%"
            >
              <Heading
                as="h2"
                mb="4"
                fontSize={['24px', '48px']}
                fontWeight={700}
              >
                América do Norte
              </Heading>
              <Heading as="h3" fontSize={['14px', '24px']}>
                A terra do progresso e da oportunidade.
              </Heading>
            </Flex>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/continente/america-do-sul" passHref>
            <Flex
              bgImg="url(/img/europa.png)"
              justifyContent="center"
              align="center"
              flexDirection="column"
              w="100%"
              h="100%"
            >
              <Heading
                as="h2"
                mb="4"
                fontSize={['24px', '48px']}
                fontWeight={700}
              >
                América do Sul
              </Heading>
              <Heading as="h3" fontSize={['14px', '24px']}>
                Diversidade e paraíso natural.
              </Heading>
            </Flex>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/continente/asia" passHref>
            <Flex
              bgImg="url(/img/europa.png)"
              justifyContent="center"
              align="center"
              flexDirection="column"
              w="100%"
              h="100%"
            >
              <Heading
                as="h2"
                mb="4"
                fontSize={['24px', '48px']}
                fontWeight={700}
              >
                Ásia
              </Heading>
              <Heading as="h3" fontSize={['14px', '24px']}>
                A terra da sabedoria e da cultura.
              </Heading>
            </Flex>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/continente/africa" passHref>
            <Flex
              bgImg="url(/img/europa.png)"
              justifyContent="center"
              align="center"
              flexDirection="column"
              w="100%"
              h="100%"
            >
              <Heading
                as="h2"
                mb="4"
                fontSize={['24px', '48px']}
                fontWeight={700}
              >
                África
              </Heading>
              <Heading as="h3" fontSize={['14px', '24px']}>
                O berço da humanidade.
              </Heading>
            </Flex>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/continente/europa" passHref>
            <Flex
              bgImg="url(/img/europa.png)"
              justifyContent="center"
              align="center"
              flexDirection="column"
              w="100%"
              h="100%"
            >
              <Heading
                as="h2"
                mb="4"
                fontSize={['24px', '48px']}
                fontWeight={700}
              >
                Europa
              </Heading>
              <Heading as="h3" fontSize={['14px', '24px']}>
                O continente mais antigo.
              </Heading>
            </Flex>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/continente/oceania" passHref>
            <Flex
              bgImg="url(/img/europa.png)"
              justifyContent="center"
              align="center"
              flexDirection="column"
              w="100%"
              h="100%"
            >
              <Heading
                as="h2"
                mb="4"
                fontSize={['24px', '48px']}
                fontWeight={700}
              >
                Oceania
              </Heading>
              <Heading as="h3" fontSize={['14px', '24px']}>
                O continente dos arquipélogos.
              </Heading>
            </Flex>
          </Link>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
