import Image from 'next/image';
import { 
  Box, Flex, 
  Heading, 
  useBreakpointValue, 
} from '@chakra-ui/react';

import Header from 'components/Header';
import ListItem from 'components/Home/ListIcon';
import Slider from 'components/Home/Slider';

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
        px="4"
        bgImg="url('/img/banner-bg.png')"
        bgPos="top center"
        bgRepeat="no-repeat"
        bgSize="cover"
      >
        <Box
          position="relative"
          maxW={1160}
          maxH={335}
          mx="auto"
          py={['7','20']}
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
            mt="5"
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
                  src="/img/icons/airplane.svg"
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
        my={['4', '8']}
        py={['9', '20']}
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
          <ListItem url="/img/icons/cocktail.svg" label="Vida noturna" />
          <ListItem url="/img/icons/surf.svg" label="Praia" />
          <ListItem url="/img/icons/building.svg" label="Moderno" />
          <ListItem url="/img/icons/museum.svg" label="Clássico" />
          <ListItem url="/img/icons/earth.svg" label="E mais..." />
        </Flex>
      </Box>
      {/* Continents (Slider) */}
      <Box 
        maxW={1160} 
        mx="auto" 
        mt={['5', '12']}
      >
        <Heading
          as="h2"
          color="black.100"
          fontSize={['xl', '4xl']}
          fontWeight={500}
          lineHeight={1.6}
          textAlign="center"
        >
          Vamos nessa? <br />Então escolha seu continente
        </Heading>
        <Slider />
      </Box>
    </main>
  );
}
