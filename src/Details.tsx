import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Box, Button } from '@chakra-ui/react';
import { GetOfferDetailsResponse } from '../resource/generated/models';
import Cookies from 'js-cookie';

export const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [offerDetails, setOfferDetails] = useState<GetOfferDetailsResponse | null>(null);

  useEffect(() => {
    fetch(`http://localhost:9090/offer/details/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setOfferDetails(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [id]);

  const handleSubscribe = () => {
    fetch(`http://localhost:9090/offer/subscribe?token=${Cookies.get('token')}&id=${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Handle the response data if needed
        navigate('/main');
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle the error if needed
      });
  };

  const handleGoBack = () => {
    navigate('/main');
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Box boxShadow="lg" borderRadius="md" p={4} maxWidth="500px">
        {offerDetails && (
          <>
            <Box fontWeight="bold">{offerDetails.title}</Box>
            <Box>
              Kcal Range: {offerDetails.kcalRangeBottom} - {offerDetails.kcalRangeTop}
            </Box>
            <Box>Period: {offerDetails.period}</Box>
            <Box>Contraindications: {offerDetails.contraindications}</Box>
            <Box>Cost: {offerDetails.cost}</Box>
          </>
        )}
        <Button onClick={handleSubscribe} colorScheme="teal" mt={4} mr={2}>
          Subscribe
        </Button>
        <Button onClick={handleGoBack} colorScheme="gray" mt={4}>
          Go Back
        </Button>
      </Box>
    </Box>
  );
};

export default Details;
