import { Flex, FormControl, FormLabel, Input, Button, HStack } from '@chakra-ui/react';
import { useState, ChangeEvent } from 'react'
import { ProfileSettingsRequest } from './../resource/generated/models/ProfileSettingsRequest' 
import { PaymentSettingsRequest } from './../resource/generated/models/PaymentSettingsRequest'
import { AddressSettingsRequest } from './../resource/generated/models/AddressSettingsRequest'
import { NavBar } from './NavBar'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Cookies from 'js-cookie';


export const Settings = () => {
    const [profileData, setProfileData] = useState<ProfileSettingsRequest>({
        name: '',
        surname: '',
        email: '',
        password: '',
        token: Cookies.get('token')
    });
    const [paymentData, setPaymentData] = useState<PaymentSettingsRequest>({
        creditCardExpDate: undefined,
        creditCardNumber: undefined,
        creditCardOwner: '',
        creditCardSecret: '',
        token: Cookies.get('token')
    });
    const [addressData, setAddressData] = useState<AddressSettingsRequest>({
        street: '',
        phoneNumber: '',
        buildingNumber: undefined,
        postalCode: '',
        voivodeship: '',
        city: '',
        token: Cookies.get('token')
    });

    const onProfileDataChange = (e: ChangeEvent<HTMLInputElement>) => {
        setProfileData((prevFormData) => ({
          ...prevFormData,
          [e.target.name]: e.target.value,
        }));
      };
    const onPaymentDataChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPaymentData((prevFormData) => ({
        ...prevFormData,
        [e.target.name]: e.target.value,
    }));
    };

    const onAddressDataChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setAddressData((prevFormData) => ({
          ...prevFormData,
          [name]: name === 'buildingNumber' ? Number(value) : value,
        }));
      };
    
    const sendAddressData = () => {
        console.log(addressData)
        fetch('http://localhost:9090/settings/address', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(addressData),
        })
            .then((response) => response.json())
            .then((data) => {
            // Handle the response data here
            console.log(data);
            })
            .catch((error) => {
            // Handle fetch error
            console.error('Error sending address data:', error);
            });
        };
    
    const sendProfileData = () => {
    fetch('http://localhost:9090/settings/profile', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(profileData),
    })
        .then((response) => response.json())
        .then((data) => {
        // Handle the response data here
        console.log(data);
        })
        .catch((error) => {
        // Handle fetch error
        console.error('Error sending profile data:', error);
        });
    };

    const sendPaymentData = () => {
        // Remove the time portion from the creditCardExpDate string
        const dateOnly = paymentData.creditCardExpDate.toISOString().split('T')[0];
      
        // Convert the creditCardExpDate to a string in the format YYYY-MM-DD
        const dateParts = dateOnly.split('-'); // Split the date string into parts
        const formattedDate = `${dateParts[0]}-${dateParts[1]}-${dateParts[2]}`; // Rearrange the parts to the desired format
      
        console.log(formattedDate)

        // Create a new object with the updated creditCardExpDate field
        const formattedPaymentData = {
          ...paymentData,
          creditCardExpDate: formattedDate,
        };
      
        console.log(paymentData);
      
        fetch('http://localhost:9090/settings/payment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formattedPaymentData),
        })
          .then((response) => response.json())
          .then((data) => {
            // Handle the response data here
            console.log(data);
          })
          .catch((error) => {
            // Handle fetch error
            console.error('Error sending payment data:', error);
          });
      };

    return(
        <>
            <NavBar/>
            <Flex flexDir="row" gap={6} height="100%">
                <Flex flexDir="column" gap={3} flexGrow={1} height="100%">
                    <FormControl id="name">
                        <FormLabel>Name</FormLabel>
                        <Input
                        name="name"
                        type="text"
                        value={profileData.name}
                        onChange={onProfileDataChange}
                        />
                    </FormControl>

                    <FormControl id="surname">
                        <FormLabel>Surname</FormLabel>
                        <Input
                        name="surname"
                        type="text"
                        value={profileData.surname}
                        onChange={onProfileDataChange}
                        />
                    </FormControl>

                    <FormControl id="email">
                        <FormLabel>Email</FormLabel>
                        <Input
                        name="email"
                        type="email"
                        value={profileData.email}
                        onChange={onProfileDataChange}
                        />
                    </FormControl>

                    <FormControl id="password">
                        <FormLabel>Password</FormLabel>
                        <Input
                        name="password"
                        type="password"
                        value={profileData.password}
                        onChange={onProfileDataChange}
                        />
                    </FormControl>

                    <Button colorScheme="teal" onClick={sendProfileData}>
                        Submit
                    </Button>
                </Flex>
                <Flex flexDir="column" gap={3} flexGrow={1} height="100%">
                    <FormControl id="creditCardNumber">
                        <FormLabel>Credit card number</FormLabel>
                        <Input
                        name="creditCardNumber"
                        type="number"
                        value={paymentData.creditCardNumber}
                        onChange={onPaymentDataChange}
                        />
                    </FormControl>

                    <FormControl id="creditCardOwner">
                        <FormLabel>Credit card owner</FormLabel>
                        <Input
                        name="creditCardOwner"
                        type="text"
                        value={paymentData.creditCardOwner}
                        onChange={onPaymentDataChange}
                        />
                    </FormControl>

                    <HStack>
                    <FormControl id="creditCardExpDate">
                        <FormLabel>Credit Card exp. date</FormLabel>
                        <Input
                            as={DatePicker}
                            name="creditCardExpDate"
                            selected={paymentData.creditCardExpDate instanceof Date ? paymentData.creditCardExpDate : null}
                            onChange={date => onPaymentDataChange({ target: { name: 'creditCardExpDate', value: date } })}
                            dateFormat="dd.MM.yyyy"
                            bg="white" // Example background color
                            borderColor="gray.300" // Example border color
                            borderRadius="md" // Example border radius
                            p={2} // Example padding
                            _focus={{
                            outline: 'none',
                            borderColor: 'blue.500' // Example focus border color
                            }}
                        />
                    </FormControl>


                    <FormControl id="creditCardSecret">
                        <FormLabel>Credit Card secret</FormLabel>
                        <Input
                        name="creditCardSecret"
                        type="password"
                        value={paymentData.creditCardSecret}
                        onChange={onPaymentDataChange}
                        />
                    </FormControl>
                    </HStack>

                    <Button colorScheme="teal" onClick={sendPaymentData}>
                        Submit
                    </Button>
                </Flex>
                <Flex flexDir="column" gap={3} flexGrow={1}>
                    <FormControl id="street">
                        <FormLabel>Street</FormLabel>
                        <Input
                        name="street"
                        type="text"
                        value={addressData.street}
                        onChange={onAddressDataChange}
                        />
                    </FormControl>
                    <FormControl id="buildingNumber">
                        <FormLabel>Building no.</FormLabel>
                        <Input
                        name="buildingNumber"
                        type="number"
                        value={addressData.buildingNumber}
                        onChange={onAddressDataChange}
                        />
                    </FormControl>
                    <FormControl id="postal">
                        <FormLabel>Postal Code</FormLabel>
                        <Input
                            name="postalCode"
                            type="text"
                            value={addressData.postalCode}
                            onChange={onAddressDataChange}
                        />
                    </FormControl>
                    <FormControl id="voivodeship">
                        <FormLabel>Voivodeship</FormLabel>
                        <Input
                        name="voivodeship"
                        type="text"
                        value={addressData.voivodeship}
                        onChange={onAddressDataChange}
                        />
                    </FormControl>
                    <FormControl id="city">
                        <FormLabel>City</FormLabel>
                        <Input
                        name="city"
                        type="text"
                        value={addressData.city}
                        onChange={onAddressDataChange}
                        />
                    </FormControl>
                    <FormControl id="phone">
                        <FormLabel>Phone number</FormLabel>
                        <Input
                            name="phoneNumber"
                            type="text"
                            value={addressData.phoneNumber}
                            onChange={onAddressDataChange}
                        />
                    </FormControl>

                    <Button colorScheme="teal" onClick={sendAddressData}>
                        Submit
                    </Button>
                </Flex>
            </Flex>
        </>
    )
}