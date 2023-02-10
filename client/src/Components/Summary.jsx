import { Box, Flex, Text, Button, Divider } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Summary = ({ quantity, total }) => {
  console.log(quantity, total);
  return (
    <Box>
      <Text fontSize={"20px"} fontWeight={600}>
        Summary
      </Text>

      <Box my={"20px"} fontSize={"18px"}>
        <Flex mt={"5px"} justifyContent={"space-between"}>
          <Text>Quantity</Text>
          <Text>{quantity}</Text>
        </Flex>
        <Flex fontSize={"18px"} justifyContent={"space-between"} my={"20px"}>
          <Text>Total</Text>
          <Text fontWeight={500}>₹{total}.00</Text>
        </Flex>
      </Box>
      <Divider mb={"20px"} />
      <Link to={"/checkout"}>
        <Button
          bgColor={"black"}
          color={"white"}
          _hover={{
            bgColor: "blue",
          }}
          width="100%"
          borderColor={"transparent"}
        >
          Checkout
        </Button>
      </Link>
    </Box>
  );
};
export default Summary;
