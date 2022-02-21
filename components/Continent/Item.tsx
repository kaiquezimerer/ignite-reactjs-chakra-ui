import {
  Box, Text,
  ListItem,
  Tooltip,
  Icon, As,
} from '@chakra-ui/react';

type ItemProps = {
  value: string | number;
  description: string;
  tooltip?: {
    icon: As;
    text: string;
  };
};

export default function Item({ value, description, tooltip = null }: ItemProps) {
  return (
    <ListItem mx={[1, 2]}>
      <Text
        fontSize="xl"
        fontWeight={600}
        textAlign="center"
      >
        <Box
          fontSize="4xl"
          color="yellow.800"
          fontWeight={700}>
          {value}
        </Box> {description}
        {
          !!tooltip && (
            <Tooltip label={tooltip.text}>
              <Icon 
                as={tooltip.icon} 
                boxSize="14px" 
                m="2" 
                color="gray.800" 
              />
            </Tooltip>
          )
        }
      </Text>
    </ListItem>
  );
}
