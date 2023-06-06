import { SignUpRequest } from '../resource/generated/models/SignUpRequest'
import { Stack, HStack, Flex, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import { useState, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom';

export const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const navigate = useNavigate();

  const dataValid = (): boolean => {
      if(password !== repassword){
          return false;
      }
      return true;
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);

    if(!dataValid()){
        console.log("not valid");
    }

    const body : SignUpRequest = {email: email, password: password, name: name, surname: surname};

    fetch('http://localhost:9090/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    .then(response =>{
        console.log(response)
        if(response.status === 200){
          navigate('/')
        }
    })
    .catch(error => {
      console.error('Error:', error);
    });

  };

  return (
    <Flex justifyContent='center' alignItems='center' height='100%'>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl id="email">
            <FormLabel>Your email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <HStack>
            <FormControl id="Name">
              <FormLabel>Your name</FormLabel>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
            <FormControl id="Surname">
              <FormLabel>Your surname</FormLabel>
              <Input
                type="text"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
            </FormControl>
          </HStack>
          <HStack>
            <FormControl id="password">
              <FormLabel>Your password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <FormControl id="repassword">
              <FormLabel>Password again</FormLabel>
              <Input
                type="password"
                value={repassword}
                onChange={(e) => setRepassword(e.target.value)}
              />
            </FormControl>
          </HStack>
          <Button type="submit" colorScheme="blue">
            Sign In
          </Button>
          <Button onClick={() => {
            navigate('/')
          }}> Take me back to signin </Button>
        </Stack>
      </form>
    </Flex>
  );
}