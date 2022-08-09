import { ArrowLeftIcon } from '@chakra-ui/icons'
import { Avatar, Flex, IconButton, Text, Button} from '@chakra-ui/react'
import React from 'react'

const Chat = () => {
  return(
    <Flex _hover={{bg: "gray.100", cursor: "pointer"}} padding={3} align="center">
        <Avatar src="" marginRight={4}/>
        <Text>User 1</Text>
    </Flex>
  )
}

export default function Sidebar() {
  return (
    /*
        Sidbar Div
    */
    <Flex 
     //bg="blue.100"
     w="18rem" h="100vh" 
     borderEnd="1px solid" borderColor="gray.200"
     direction="column"
    >
        {/* Profile Div */}
        <Flex 
         //bg="red.100" 
         w="100%" h="5rem" 
         align="center" justifyContent="space-between" 
         borderBottom="1px solid" borderColor="gray.200"
         p={3}
        >
            <Flex align="center">
              <Avatar src="" marginRight={4}/>
              <Text>herropaul</Text>
            </Flex>

            <IconButton isRound size="sm" icon={<ArrowLeftIcon/>}/>
        </Flex>

        <Button m={5} p={6}>New Chat</Button>

        <Flex overflowX="scroll" direction="column" sx={{scrollbarWidth: "none"}} flex={1}>
          <Chat/>
          <Chat/>
          <Chat/>
          <Chat/>
          <Chat/>
          <Chat/>
          <Chat/>
          <Chat/>
          <Chat/>
          <Chat/>
          <Chat/>
        </Flex>

    </Flex>
  )
}
