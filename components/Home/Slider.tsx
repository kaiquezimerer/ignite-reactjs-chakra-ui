import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Heading, Flex, Center, Spinner } from '@chakra-ui/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';

import styles from 'styles/swiper.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Slider() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [continents, setContinents] = useState<any>([]);

  async function loadContinentsData() {
    setIsLoading(true);

    try {
      const { data } = await axios.get('http://localhost:3000/api/continentes');
      setContinents(data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadContinentsData();
  }, [])

  if (isLoading) {
    return (
      <Center mt="40">
        <Spinner color="gray.800" />
      </Center>
    );
  } 

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
        {
          continents?.map((continent) => (
            <SwiperSlide key={continent.name}>
              <Link href={`/continente/${continent.slug}`} passHref>
                <Flex
                  bgImg={`url(${continent.bgUrl})`}
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
                    {continent.name}
                  </Heading>
                  <Heading as="h3" fontSize={['14px', '24px']}>
                    {continent.description}
                  </Heading>
                </Flex>
              </Link>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </Box>
  );
}
