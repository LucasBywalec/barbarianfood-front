import { Flex, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import { useState, ChangeEvent } from 'react'
import { ProfileSettingsRequest } from './../resource/generated/models/ProfileSettingsRequest' 
import { PaymentSettingsRequest } from './../resource/generated/models/PaymentSettingsRequest'
import { AddressSettingsRequest } from './../resource/generated/models/AddressSettingsRequest'
import { NavBar } from './NavBar'

export const Settings = () => {
    const [profileData, setProfileData] = useState<ProfileSettingsRequest>({
        name: '',
        surname: '',
        email: '',
        password: '',
        token: ''
    });
    const [paymentData, setPaymentData] = useState<PaymentSettingsRequest>({
        creditCardExpDate: undefined,
        creditCardNumber: undefined,
        creditCardOwner: '',
        creditCardSecret: '',
        token: ''
    });
    const [addressData, setAddressData] = useState<AddressSettingsRequest>({
        street: '',
        phoneNumber: '',
        buildingNumber: undefined,
        postalCode: '',
        voivodeship: '',
        city: '',
        token: ''
    });

    const onProfileDataChange = (e: ChangeEvent<HTMLInputElement>) => {
        setProfileData((prevFormData) => ({
          ...prevFormData,
          [e.target.name]: e.target.value,
        }));
      };
    
      const sendProfileData = () => {
        // Perform fetch request here to send the profile data
        // Replace the console.log statement with your actual fetch code
        console.log(profileData);
      };
    
    const onPaymentDataChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPaymentData((prevFormData) => ({
        ...prevFormData,
        [e.target.name]: e.target.value,
    }));
    };

    const sendPaymentData = () => {
    // Perform fetch request here to send the profile data
    // Replace the console.log statement with your actual fetch code
    console.log(paymentData);
    };

    const onAddressDataChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAddressData((prevFormData) => ({
            ...prevFormData,
            [e.target.name]: e.target.value,
        }));
        };
    
    const sendAddressData = () => {
    // Perform fetch request here to send the profile data
    // Replace the console.log statement with your actual fetch code
    console.log(addressData);
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
                        type="text"
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

                    <FormControl id="creditCardExpDate">
                        <FormLabel>Credit Card secret</FormLabel>
                        <Input
                        name="creditCardExpDate"
                        type="date"
                        value={paymentData.creditCardExpDate instanceof Date ? paymentData.creditCardExpDate.toLocaleDateString() : ''} //TODO
                        onChange={onPaymentDataChange}
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
                    <FormControl id="building">
                        <FormLabel>Building no.</FormLabel>
                        <Input
                        name="building"
                        type="number"
                        value={addressData.buildingNumber}
                        onChange={onAddressDataChange}
                        />
                    </FormControl>
                    <FormControl id="postal">
                        <FormLabel>Postal Code</FormLabel>
                        <Input
                        name="postal"
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
                        name="phone"
                        type="text"
                        value={addressData.phoneNumber}
                        onChange={onAddressDataChange}
                        />
                    </FormControl>

                    <Button colorScheme="teal" onClick={sendPaymentData}>
                        Submit
                    </Button>
                </Flex>
            </Flex>
        </>
    )
}