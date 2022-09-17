import type { NextPage } from "next";
import { Box, Heading } from "@chakra-ui/react";
import PageLayout from "../components/Layout/PageLayout";

const Home: NextPage = () => {
  return (
    <PageLayout title={"geese, by minihacks"}>
      <Box px={[5, 10]}>
        <Heading as={"h1"}>geese</Heading>
      </Box>
    </PageLayout>
  );
};

export default Home;
