import { Box, Text } from "@chakra-ui/react";

interface ICardInfo {
    mainContent: string,
    content: string,
    onClick?: () => void
}

const CardInfo = ({ mainContent, content, onClick }: ICardInfo) => {
  return (
    <Box 
        onClick={onClick}
        backgroundColor="white" 
        minHeight="120px" 
        padding={8}
        borderRadius="25px"
        cursor={onClick ? "pointer" : "default"}
    >
        <Text fontSize='2xl' fontWeight='bold'>
            { mainContent }
        </Text>
        <Text fontSize='xl'>
            { content }
        </Text>
    </Box>
  );
};

export default CardInfo;
