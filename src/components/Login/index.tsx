import { Box, Button, Center, Input } from "@chakra-ui/react"
import { login } from "../../services/login"
import { Header } from "../Header/Header"

export const Login = () => {

    return (
        <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px' display='flex' flexDirection='column'>
            <Header />
            <Center margin='auto'>
                <Box display='flex' flexDirection='column' backgroundColor='#FFFFFF' width='400px' height='300px' borderRadius='25px' padding='15px' justifyContent='space-between'>
                    <Center>
                        <h1>Faça o login</h1>
                    </Center>
                    <Input placeholder="email" />
                    <Input placeholder="password" />
                    <Center>
                        <Button onClick={login} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
                            Button
                        </Button>
                    </Center>
                </Box>
            </Center>
        </Box>
    )
}