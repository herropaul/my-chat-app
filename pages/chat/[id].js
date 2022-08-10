import Sidebar from "../../components/Sidebar";
import { Flex, Avatar, Heading, Input, FormControl, Button, Text} from "@chakra-ui/react";
import Head from 'next/head';

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
                    <Flex bg="blue.100" w="fit-content" minWidth="6rem" borderRadius="lg" p={3} m={1}>
                        <Text>This is a dummy message</Text>
                    </Flex>
                    <Flex bg="blue.100" w="fit-content" minWidth="6rem" borderRadius="lg" p={3} m={1}>
                        <Text>a</Text>
                    </Flex>
                    <Flex bg="green.100" w="fit-content" minWidth="6rem" borderRadius="lg" p={3} m={1} alignSelf="flex-end">
                        <Text>This is a dummy message</Text>
                    </Flex>
                    <Flex bg="blue.100" w="fit-content" minWidth="6rem" borderRadius="lg" p={3} m={1}>
                        <Text>This is a dummy message</Text>
                    </Flex>
                    <Flex bg="blue.100" w="fit-content" minWidth="6rem" borderRadius="lg" p={3} m={1}>
                        <Text>a</Text>
                    </Flex>
                    <Flex bg="green.100" w="fit-content" minWidth="6rem" borderRadius="lg" p={3} m={1} alignSelf="flex-end">
                        <Text>This is a dummy message</Text>
                    </Flex>
                    <Flex bg="blue.100" w="fit-content" minWidth="6rem" borderRadius="lg" p={3} m={1}>
                        <Text>This is a dummy message</Text>
                    </Flex>
                    <Flex bg="blue.100" w="fit-content" minWidth="6rem" borderRadius="lg" p={3} m={1}>
                        <Text>a</Text>
                    </Flex>
                    <Flex bg="green.100" w="fit-content" minWidth="6rem" borderRadius="lg" p={3} m={1} alignSelf="flex-end">
                        <Text>This is a dummy message</Text>
                    </Flex>
                    <Flex bg="blue.100" w="fit-content" minWidth="6rem" borderRadius="lg" p={3} m={1}>
                        <Text>This is a dummy message</Text>
                    </Flex>
                    <Flex bg="blue.100" w="fit-content" minWidth="6rem" borderRadius="lg" p={3} m={1}>
                        <Text>a</Text>
                    </Flex>
                    <Flex bg="green.100" w="fit-content" minWidth="6rem" borderRadius="lg" p={3} m={1} alignSelf="flex-end">
                        <Text>This is a dummy message</Text>
                    </Flex>
                    <Flex bg="blue.100" w="fit-content" minWidth="6rem" borderRadius="lg" p={3} m={1}>
                        <Text>This is a dummy message</Text>
                    </Flex>
                    <Flex bg="blue.100" w="fit-content" minWidth="6rem" borderRadius="lg" p={3} m={1}>
                        <Text>a</Text>
                    </Flex>
                    <Flex bg="green.100" w="fit-content" minWidth="6rem" borderRadius="lg" p={3} m={1} alignSelf="flex-end">
                        <Text>This is a dummy message</Text>
                    </Flex>
                    <Flex bg="blue.100" w="fit-content" minWidth="6rem" borderRadius="lg" p={3} m={1}>
                        <Text>This is a dummy message</Text>
                    </Flex>
                    <Flex bg="blue.100" w="fit-content" minWidth="6rem" borderRadius="lg" p={3} m={1}>
                        <Text>a</Text>
                    </Flex>
                    <Flex bg="green.100" w="fit-content" minWidth="6rem" borderRadius="lg" p={3} m={1} alignSelf="flex-end">
                        <Text>This is a dummy message</Text>
                    </Flex>
                </Flex>

                <Bottombar/>

            </Flex>
        </Flex>
    )
}