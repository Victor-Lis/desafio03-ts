import { Box, Center, Input } from "@chakra-ui/react";
import { MouseEventHandler, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { Card } from "../components/Card";
import DButton from "../components/DButton";
import { login } from "../services/login";
import { changeLocalStorage } from "../services/storage";

const Home = () => {
    const [ name, setName ] = useState<string>('')
    const [ email, setEmail ] = useState<string>('')
    const [ password, setPassword ] = useState<string>('')
    const { setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()

    const validateUser = async () => {
        const loggedIn = await login(email, password)

        if(!loggedIn){
            return alert('Email inválido')
        }

        setIsLoggedIn(true)
        changeLocalStorage({ login: true, name, email, password })
        navigate('/conta/1')
    }
  
    return (
        <Box padding="25px">
            <Card>
                <Center>
                    <h1>Faça o login</h1>
                </Center>
                <Input placeholder="name" value={name} onChange={(event) => setName(event.target.value)} />                
                <Input placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                <Input placeholder="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
                <Center>
                    <DButton
                        onClick={() => validateUser()}
                    />
                </Center>
            </Card>
        </Box>
    );
}

export default Home;