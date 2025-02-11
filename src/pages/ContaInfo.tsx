import { Center, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../components/AppContext";

const ContaInfo = () => {
  const { user } = useContext(AppContext);
  return (
    <Center flexDir={"column"}>
      <Text fontSize="3xl" fontWeight="bold" marginTop={25}>
        Informações da conta
      </Text>
      <Text fontSize="xl">
        Conta{" "}
        {user?.name
          ? `${user?.name[0].toUpperCase()}${user?.name.slice(
              1,
              user.name.length
            )}`
          : "Anônima"}
      </Text>
      <Text fontSize="xl">Email: {user?.email}</Text>
      <Text fontSize="xl">Password: {user?.password}</Text>
      <Link to="/conta/1" style={{marginTop: "25px"}}>Voltar para home</Link>
    </Center>
  );
};

export default ContaInfo;
