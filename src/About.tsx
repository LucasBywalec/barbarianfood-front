import { VStack, Flex, Text } from '@chakra-ui/react';
import { NavBar } from './NavBar';

export const About = () => {

    return(
        <Flex flexDir="column" height="100vh">
            <NavBar/>
            <Flex backgroundColor="blue.200" justifyContent="center" alignItems="start" paddingTop={10} height="100%">
                <VStack spacing={6} width="40%">
                    <Text fontSize="3xl">Here in Barbarianfood we care equally about our foods being healthy and tasty</Text>
                    <Text fontSize="sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae fugiat minima ipsum libero mollitia quae assumenda sunt velit repellendus sapiente eum odit ducimus iure eligendi, doloribus rerum nemo voluptatem sed!</Text>
                </VStack>
            </Flex>
        </Flex>
    )
}