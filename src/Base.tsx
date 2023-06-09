import { Box, Flex } from '@chakra-ui/react';
import { NavBar } from './NavBar';
import { Footer } from './Footer';
import { useEffect } from 'react';

export const Base = () => {

    const getOffer = () => {
        fetch('http://localhost:9090/offer/all', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
        }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    useEffect(() => {
        console.log('Component mounted');
        getOffer();
        return () => {
          console.log('Component unmounted');
        };
      }, []);

    return(
        <Flex direction="column" height="100vh">
            {/* Header */}
            <Box height="10%" backgroundColor="gray.200">
                <NavBar/>
            </Box>

            {/* Main Content */}
            <Box flex="1" backgroundColor="gray.100">
                Main Content
            </Box>

            {/* Footer */}
            <Box height="10%" backgroundColor="gray.200">
                <Footer/>
            </Box>
        </Flex>
    )
}