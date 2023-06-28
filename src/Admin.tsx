import React, { useEffect, useState } from "react";
import { Box, Table, Thead, Tbody, Tr, Th, Td, IconButton, Button } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { OfferItem, UserItem } from "../resource/generated/models";
import { Link, useNavigate } from "react-router-dom";

export const Admin = () => {
  const [users, setUsers] = useState<UserItem[]>([]);
  const [offers, setOffers] = useState<OfferItem[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
    fetchOffers();
  }, []);

  const handleUserDelete = (userId: string | undefined) => {
    if (userId == undefined) return;

    // Send delete request to the server
    fetch(`http://localhost:9090/admin/delete-user?id=${userId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          // Handle successful deletion
          console.log("User deleted successfully");
          // Update the users state by removing the deleted user
          setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
        } else {
          // Handle deletion error
          console.error("Error deleting user");
        }
      })
      .catch((error) => {
        // Handle fetch error
        console.error("Error deleting user:", error);
      });
  };

  const handleOfferDelete = (offerId: string | undefined) => {
    if (offerId == undefined) return;

    // Send delete request to the server
    fetch(`http://localhost:9090/admin/delete-offer?id=${offerId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          // Handle successful deletion
          console.log("Offer deleted successfully");
          // Update the offers state by removing the deleted offer
          setOffers((prevOffers) => prevOffers.filter((offer) => offer.id !== offerId));
        } else {
          // Handle deletion error
          console.error("Error deleting offer");
        }
      })
      .catch((error) => {
        // Handle fetch error
        console.error("Error deleting offer:", error);
      });
  };

  const fetchUsers = () => {
    fetch("http://localhost:9090/admin/list/users", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        // Set the fetched users data to the users state
        console.log(data);
        setUsers(data.usersList);
      })
      .catch((error) => {
        // Handle error during fetch
        console.error("Error fetching users:", error);
      });
  };

  const fetchOffers = () => {
    fetch("http://localhost:9090/admin/list/offer", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        // Set the fetched offers data to the offers state
        setOffers(data.offerList);
      })
      .catch((error) => {
        // Handle error during fetch
        console.error("Error fetching offers:", error);
      });
  };

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Box flex="1">
        <Table variant="simple" mr={4}>
          <Thead>
            <Tr>
              <Th colSpan={6} textAlign="center">Users</Th>
            </Tr>
            <Tr>
              <Th>ID</Th>
              <Th>Name</Th>
              <Th>Surname</Th>
              <Th>Email</Th>
              <Th>Active Subscription</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map((user) => (
              <Tr key={user.id}>
                <Td>{user.id}</Td>
                <Td>{user.name}</Td>
                <Td>{user.surname}</Td>
                <Td>{user.email}</Td>
                <Td>{user.activeSubscription}</Td>
                <Td>
                  <IconButton
                    icon={<DeleteIcon />}
                    aria-label="Delete"
                    onClick={() => handleUserDelete(user.id)}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>

      <Box flex="1" display="flex" alignItems="center" justifyContent="center">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th colSpan={6} textAlign="center">Offers</Th>
            </Tr>
            <Tr>
              <Th>ID</Th>
              <Th>Title</Th>
              <Th>Kcal Range (Bottom)</Th>
              <Th>Kcal Range (Top)</Th>
              <Th>Cost</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {offers.map((offer) => (
              <Tr key={offer.id}>
                <Td>{offer.id}</Td>
                <Td>{offer.title}</Td>
                <Td>{offer.kcalRangeBottom}</Td>
                <Td>{offer.kcalRangeTop}</Td>
                <Td>{offer.cost}</Td>
                <Td>
                  <IconButton
                    icon={<DeleteIcon />}
                    aria-label="Delete"
                    onClick={() => handleOfferDelete(offer.id)}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>

      <Box as="footer" mt="auto" py={4} textAlign="center">
        <Button as={Link} to="/admin/add" colorScheme="teal" size="md" mr={2}>
          Add New
        </Button>
        <Button onClick={handleNavigate} colorScheme="red" size="md">
          Go to Home
        </Button>
      </Box>
    </Box>
  );
};
