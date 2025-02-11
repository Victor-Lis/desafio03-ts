import { useNavigate, useRoutes } from "react-router-dom";
import { Card } from "../components/Card";
import DButton from "../components/DButton";
import { Box, Center } from "@chakra-ui/react";

const ErrorPage = () => {
  const navigate = useNavigate()
    return (
        <Box padding="25px">
            <Card>
                <Center>
                    <h1>Ops, essa página não existe...</h1>
                </Center>
                <Center>
                    <DButton
                        onClick={() => navigate('/')}
                        message="Voltar para a Home"
                    />
                </Center>
            </Card>
        </Box>
    );
}

export default ErrorPage;