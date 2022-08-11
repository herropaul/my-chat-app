import { ArrowLeftIcon } from '@chakra-ui/icons'
import { Avatar, Flex, IconButton, Text, Button} from '@chakra-ui/react'
import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../firebaseconfig'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore'
import { db } from '../firebaseconfig'
import getOtherEmail from '../utils/getOtherEmail'
import { useRouter } from 'next/router'

export default function Sidebar() {
  const [user] = useAuthState(auth);
  const [snapshot, loading, error] = useCollection(collection(db, "chats"));
  const chats = snapshot?.docs.map(doc => ({id: doc.id, ...doc.data()}));
  const router = useRouter();

  const redirect = (id) => {
    router.push(`/chat/${id}`);
  }

  const ChatList = () => {
    return(
      chats?.filter(chat => chat.users.includes(user.email))
      .map(chat => 
      <Flex key={chat.id} _hover={{bg: "gray.100", cursor: "pointer"}} padding={3} align="center" onClick={() => redirect(chat.id)}>
        <Avatar src="" marginRight={4}/>
        <Text>{getOtherEmail(chat.users, user)}</Text>
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
