import { SignInRequest } from '../resource/generated/models/SignInRequest'
import { Stack, Flex, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import { useState, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);

    const body : SignInRequest = {email: email, password: password};

    console.log(body)

    fetch('http://localhost:9090/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    .then(response =>response.json())
    .then(data => {
      Cookies.set('token', data.token, {expires: 1, path: '/'});
      navigate('/main');
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
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button type="submit" colorScheme="blue">
            Sign In
          </Button>
          <Button onClick={() => {
            navigate('/signup')
          }}> Already have an account? </Button>
        </Stack>
      </form>
    </Flex>
  );
}