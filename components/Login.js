import React from 'react'
import Head from "next/head";
import { ChatIcon } from '@chakra-ui/icons';
import { Box, Button, Center, Stack } from '@chakra-ui/react';

export default function Login() {
  return (
    <>
        <Head>
            <title>Login</title>
        </Head>

        <Center height="100vh">
          <Stack align="center" backgroundColor="gray.600" padding={20} rounded="3xl" spacing={10} boxShadow="lg">
            <Box backgroundColor="blue.300" w="fit-content" padding={5} rounded="3xl" boxShadow="md">
              <ChatIcon w="100px" h="100px" color="white" />
            </Box>

            <Button boxShadow="md">Sign in with google</Button>
          </Stack>
        </Center> 
    </>
  )
}
