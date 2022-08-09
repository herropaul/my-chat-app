import Sidebar from "../../components/Sidebar";
import { Flex, Avatar, Heading, Input, FormControl, Button} from "@chakra-ui/react";

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
            <Sidebar/>
            
            <Flex
            flex={1}
            direction="column"
            >
                <Topbar/>

                <Flex
                flex={1}
                >

                </Flex>

                <Bottombar/>

            </Flex>
        </Flex>
    )
}