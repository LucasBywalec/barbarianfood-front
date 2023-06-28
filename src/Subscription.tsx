import { useEffect, useState } from 'react';
import { Box, Button } from '@chakra-ui/react';
import Cookies from 'js-cookie';
import { GetOfferDetailsResponse } from '../resource/generated/models';
import {useNavigate } from 'react-router-dom';

export const Subscription = () => {
  const [subscriptionData, setSubscriptionData] = useState<GetOfferDetailsResponse | null>(null);
  const token = Cookies.get('token');
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:9090/offer/current-subscription?token=' + token, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        setSubscriptionData(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, [token]);

  const handleCancelSubscription = () => {
    fetch('http://localhost:9090/offer/cancel?token=' + token, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        // Handle cancellation success if needed
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const handleGoToMain = () => {
    navigate('/main');
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Box boxShadow="lg" borderRadius="md" p={4} maxWidth="500px">
        {subscriptionData?.id !== undefined ? (
          <>
            <Box fontWeight="bold">{subscriptionData.title}</Box>
            <Box>Kcal Range: {subscriptionData.kcalRangeBottom} - {subscriptionData.kcalRangeTop}</Box>
            <Box>Period: {subscriptionData.period}</Box>
            <Box>Contraindications: {subscriptionData.contraindications}</Box>
            <Box>Cost: {subscriptionData.cost}</Box>
            <Button onClick={handleCancelSubscription} colorScheme="red" mt={4}>
              Cancel Subscription
            </Button>
          </>
        ) : (
          <>
            <Box textAlign="center">
              Nothing subscribed currently
            </Box>
          </>
        )}
        <Button onClick={handleGoToMain} colorScheme="teal" mt={4} mr={2}>
          Go to Main
        </Button>
      </Box>
    </Box>
  );
};
