import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Box, Button } from '@chakra-ui/react';
import { GetOfferDetailsResponse } from '../resource/generated/models';

export const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Use the useNavigate hook to navigate programmatically
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
    // Perform subscription logic here
    // Redirect to a success page or perform any other action
    navigate('/subscribe');
  };

  const handleGoBack = () => {
    navigate('/main'); // Navigate to the '/main' route
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Box boxShadow="lg" borderRadius="md" p={4} maxWidth="500px">
        {offerDetails && (
          <>
            <Box fontWeight="bold">{offerDetails.title}</Box>
            <Box>Kcal Range: {offerDetails.kcalRangeBottom} - {offerDetails.kcalRangeTop}</Box>
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
