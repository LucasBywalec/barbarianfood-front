import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, Select } from "@chakra-ui/react";
import { AddNewOfferRequest } from "../resource/generated/models";
import { AddNewOfferRequestPeriodEnum } from "../resource/generated/models";
import { useNavigate } from "react-router-dom";

export const Add = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState<AddNewOfferRequest>({
    title: "",
    kcalRangeBottom: 0,
    kcalRangeTop: 0,
    period: undefined,
    contraindications: "",
    cost: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formValues),
    };

    console.log(formValues);

    fetch("http://localhost:9090/admin/list/offer", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log("Offer added successfully:", data);
        // Reset the form after successful submission
        setFormValues({
          title: "",
          kcalRangeBottom: 0,
          kcalRangeTop: 0,
          period: undefined,
          contraindications: "",
          cost: 0,
        });
      })
      .catch((error) => {
        console.error("Error adding offer:", error);
      });
  };

  const handleRedirect = () => {
    navigate('/admin');
  };

  return (
    <Box maxWidth="400px" mx="auto" mt={4}>
      <form onSubmit={handleSubmit}>
        <FormControl mb={4}>
          <FormLabel>Title</FormLabel>
          <Input type="text" name="title" value={formValues.title} onChange={handleChange} required />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Kcal Range (Bottom)</FormLabel>
          <Input
            type="number"
            name="kcalRangeBottom"
            value={formValues.kcalRangeBottom}
            onChange={handleChange}
            required
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Kcal Range (Top)</FormLabel>
          <Input
            type="number"
            name="kcalRangeTop"
            value={formValues.kcalRangeTop}
            onChange={handleChange}
            required
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Period</FormLabel>
          <Select name="period" value={formValues.period} onChange={handleChange} required>
            <option value="">Select Period</option>
            <option value={AddNewOfferRequestPeriodEnum.LongTerm}>
              {AddNewOfferRequestPeriodEnum.LongTerm}
            </option>
            <option value={AddNewOfferRequestPeriodEnum.ShortTerm}>
              {AddNewOfferRequestPeriodEnum.ShortTerm}
            </option>
            {/* Add more options as needed */}
          </Select>
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Contraindications</FormLabel>
          <Input
            type="text"
            name="contraindications"
            value={formValues.contraindications}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Cost</FormLabel>
          <Input
            type="number"
            name="cost"
            value={formValues.cost}
            onChange={handleChange}
            required
          />
        </FormControl>

        <Button type="submit" colorScheme="teal" size="md" mr={2}>
          Add Offer
        </Button>

        <Button onClick={handleRedirect} colorScheme="red" size="md">
          Go to Admin
        </Button>
      </form>
    </Box>
  );
};
