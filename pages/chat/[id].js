import Sidebar from "../../components/Sidebar";
import { Flex, Avatar, Heading, Input, FormControl, Button, Text} from "@chakra-ui/react";
import Head from 'next/head';
import { useRouter } from "next/router";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { db } from "../../firebaseconfig";
import { orderBy, collection, query } from "firebase/firestore";


const Topbar = () => {
    return(
        <Flex
        bg="gray.100"
        h="5rem" w="100%"
        align="center"
        p={5}
        >
            <Avatar src="" marginRight={4} />
            <Heading size="lg">User 1</Heading>
        </Flex>
    )
}

const Bottombar = () => {
    return(
        <FormControl
        p={4}
        >
            <Input autoComplete="off" placeholder="Enter a message..."/>
            <Button type="submit" hidden/>
        </FormControl>
    )
}

export default function Chat () {
    
    const router = useRouter();
    const {id} = router.query;
    
    const q = query(collection(db, "chats", id, "messages"), orderBy("timestamp"))
    const [messages] = useCollectionData(q);
    console.log(messages)

    const GetMessages = () => {
        return(
            messages?.map(msg => {
                return(
                    <Flex key={Math.random()} bg="blue.100" w="fit-content" minWidth="6rem" borderRadius="lg" p={3} m={1}>
                            <Text>{msg.text}</Text>
                    </Flex>
                )
            })
        )
    }

    return(
        <Flex
        h="100vh"
        >
            <Head>
                <title>Chat App</title>
            </Head>

            <Sidebar/>
            
            <Flex
            flex={1}
            direction="column"
            >
                <Topbar/>

                <Flex
                flex={1}
                direction="column"
                pt={4} mx={3}
                overflowX="scroll"
                sx={{scrollbarWidth: "none"}}
                >
                    <GetMessages/>
                </Flex>

                <Bottombar/>

            </Flex>
        </Flex>
    )
}