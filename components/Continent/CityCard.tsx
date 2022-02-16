import {
  Box,
  Flex,
  Image,
  Heading,
  Center,
} from '@chakra-ui/react';

type CityCardProps = {
  country: {
    name: string;
    city: string;
    bgUrl: string;
    flagUrl: string;
  }
};

export default function CityCard({ country }: CityCardProps) {
  const { name, city, bgUrl, flagUrl } = country;

  return (
    <Box 
      bg="white" 
      w={256} 
      h={279} 
      mx={4} 
      mb={4} 
      borderRadius="4px" 
      border=" 1px solid rgba(255, 186, 8, 0.5);"
    >
      <Image src={bgUrl} alt={city} />
      <Flex 
        h="106px" 
        alignItems="center" 
        py={4} 
        px={6}
      >
        <Box w="50%" h="100%">
          <Heading 
            as="h3" 
            size="sm" 
            fontWeight={600} 
            color="black.100" 
            mb={4}
          >
            {city}
          </Heading>
          <Heading 
            as="h4" 
            size="xs" 
            fontWeight={400} 
            color="gray.800"
          >
            {name}
          </Heading>
        </Box>
        <Center w="50%" h="100%">
          <Image src={flagUrl} alt={name} />
        </Center>
      </Flex>
    </Box>
  );
}
