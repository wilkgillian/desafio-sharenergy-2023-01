import { Container, Flex } from "@chakra-ui/react";
import Dashboard from "../components/Dashboard";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function Home() {
  return (
    <>
      <Header />
        <Sidebar />
        <Dashboard />
    </>
  );
}

export default Home;
