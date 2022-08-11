import { ArrowLeftIcon } from '@chakra-ui/icons'
import { Avatar, Flex, IconButton, Text, Button} from '@chakra-ui/react'
import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../firebaseconfig'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore'
import { db } from '../firebaseconfig'

export default function Sidebar() {
  const [user] = useAuthState(auth);
  const [snapshot, loading, error] = useCollection(collection(db, "chats"));
  const chats = snapshot?.docs.map(doc => ({id: doc.id, ...doc.data()}));

  const ChatList = () => {
    return(
      chats?.map(chat => 
      <Flex key={Math.random()} _hover={{bg: "gray.100", cursor: "pointer"}} padding={3} align="center">
        <Avatar src="" marginRight={4}/>
        <Text>{chat.users}</Text>
      </Flex>)
    )
  }
  
  return (
    /*
        Sidbar Div
    */
    <Flex 
     w="18rem" h="100vh" 
     borderEnd="1px solid" borderColor="gray.200"
     direction="column"
    >
        {/* Profile Div */}
        <Flex 
         w="100%" h="5rem" 
         align="center" justifyContent="space-between" 
         borderBottom="1px solid" borderColor="gray.200"
         p={3}
        >
            <Flex align="center">
              <Avatar src={user.photoURL} marginRight={4}/>
              <Text>Welcome <br/>{user.displayName}!</Text>
            </Flex>

            <IconButton isRound size="sm" icon={<ArrowLeftIcon/>} onClick={() => signOut(auth)}/>
        </Flex>

        <Button m={5} p={6}>New Chat</Button>

        <Flex overflowX="scroll" direction="column" sx={{scrollbarWidth: "none"}} flex={1}>
          <ChatList/>
        </Flex>

    </Flex>
  )
}
