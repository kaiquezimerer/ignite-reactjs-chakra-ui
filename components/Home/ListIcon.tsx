import Image from 'next/image';
import { Flex, Text, useBreakpointValue } from '@chakra-ui/react';

type ListItemProps = {
  url: string;
  label: string;
}

export default function ListItem({ url, label }: ListItemProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex justify="center" flexDir="column" mx="2">
      {
        isWideVersion && (
          <Image
            src={url}
            alt=""
            role="presentation"
            width="85px"
            height="85px"
          />
        )
      }
      <Text
        mt="5"
        fontSize={['lg', "2xl"]}
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
        {label}
      </Text>
    </Flex>
  );
}
