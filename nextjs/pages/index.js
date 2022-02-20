import io from "socket.io-client";
import { Button, Heading, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import PageLayout from "../components/Layout/PageLayout";
import { useSession, signOut, signIn } from "next-auth/react";

export default function Home() {
    const [socket, setSocket] = useState(null);
    const [messages, setMessages] = useState([]);

    const { data: session, status } = useSession();
    useEffect(() => {
        const newSocket = io("/express/socket.io");
        setSocket(newSocket);

        newSocket.on("message", (msg) => setMessages((pv) => [...pv, msg]));

        return () => newSocket.close();
    }, []);

    let LoginButton = <></>;
    if (status === "authenticated") {
        LoginButton = (
            <Button colorScheme={"blue"} variant={"solid"} onClick={() => signOut()}>
                Log Out as {session.user.email}
            </Button>
        );
    } else if (status === "unauthenticated") {
        LoginButton = (
            <Button colorScheme={"blue"} variant={"solid"} onClick={() => signIn("google")}>
                Log In
            </Button>
        );
    }
    return (
        <PageLayout>
            <VStack justifyContent={"center"} alignItems={"center"} minH={"100vh"} bg={"green.300"}>
                {LoginButton}
                <Heading>Messages:</Heading>
                {!messages.length && <pre>Connecting to socket...</pre>}
                <pre>{JSON.stringify(messages, null, 4)}</pre>
            </VStack>
        </PageLayout>
    );
}
