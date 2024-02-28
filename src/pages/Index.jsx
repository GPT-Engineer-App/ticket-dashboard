import React from "react";
import { Box, Container, Flex, Heading, Text, Button, SimpleGrid, Stat, StatLabel, StatNumber, StatHelpText, Divider, VStack, HStack, IconButton, useColorModeValue } from "@chakra-ui/react";
import { FaPlus, FaTicketAlt, FaUsers, FaChartLine } from "react-icons/fa";

const Index = () => {
  // Replace with actual data fetching and handling
  const tickets = [
    { id: 1, title: "Ticket 1", status: "Open" },
    { id: 2, title: "Ticket 2", status: "Closed" },
    // ... more tickets
  ];

  return (
    <Container maxW="container.xl" py={5}>
      <Heading mb={4}>Ticket Booking Dashboard</Heading>
      <Flex justifyContent="space-between" alignItems="center" mb={6}>
        <Text>Welcome back, Admin!</Text>
        <Button leftIcon={<FaPlus />} colorScheme="teal" variant="solid">
          Add New Ticket
        </Button>
      </Flex>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5} mb={6}>
        <Stat p={4} shadow="md" borderWidth="1px" borderRadius="md">
          <StatLabel>Tickets Sold</StatLabel>
          <StatNumber>150</StatNumber>
          <StatHelpText>
            <FaTicketAlt />
            &nbsp;30% increase
          </StatHelpText>
        </Stat>
        <Stat p={4} shadow="md" borderWidth="1px" borderRadius="md">
          <StatLabel>Active Users</StatLabel>
          <StatNumber>1,200</StatNumber>
          <StatHelpText>
            <FaUsers />
            &nbsp;12% increase
          </StatHelpText>
        </Stat>
        <Stat p={4} shadow="md" borderWidth="1px" borderRadius="md">
          <StatLabel>Revenue</StatLabel>
          <StatNumber>$10,230</StatNumber>
          <StatHelpText>
            <FaChartLine />
            &nbsp;5% increase
          </StatHelpText>
        </Stat>
      </SimpleGrid>

      <Divider my={6} />

      <VStack align="stretch" spacing={4}>
        <Heading size="md">Recent Tickets</Heading>
        {tickets.map((ticket) => (
          <Box key={ticket.id} p={4} shadow="md" borderWidth="1px" borderRadius="md" bg={useColorModeValue("white", "gray.700")}>
            <HStack justifyContent="space-between">
              <Text fontWeight="bold">{ticket.title}</Text>
              <IconButton aria-label="View details" icon={<FaTicketAlt />} />
            </HStack>
            <Text>Status: {ticket.status}</Text>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;
