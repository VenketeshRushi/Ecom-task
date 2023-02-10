import {
  Box,
  Flex,
  Image,
  Text,
  Grid,
  Button,
  useToast,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import Summary from "../Components/Summary";
import { addToCart, removeFromCart } from "../Redux/products/actions";
function Cart() {
  const cartItems = useSelector((state) => state.productReducer.cartItems);
  const ordersummry = useSelector((state) => state.productReducer.ordersummry);
  const toast = useToast();
  const dispatch = useDispatch();

  console.log("ordersummry in cart page", ordersummry);

  const handleRemoveItem = (index) => {
    dispatch(removeFromCart(index, toast));
  };

  const handleQuantityChange = (name, quantity, index, product) => {
    if (quantity === 1 && name === "reduce") {
      return dispatch(removeFromCart(index, toast));
    }
    return dispatch(addToCart(name, product, toast));
  };

  return (
    <Box
      display={"grid"}
      gap={["40px", "40px", "40px", "5%", "5%"]}
      my={["0px", "3px", "5px", "30px", "30px", "30px"]}
      mx={"auto"}
      p={"20px"}
      gridTemplateColumns={["100%", "100%", "100%", "65% 30%", "65% 30%"]}
    >
      <Grid
        gap={[2, 4]}
        p={["10px", "10px", "20px", "20px", "20px"]}
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
        ]}
      >
        {cartItems?.map((product, index) => (
          <Flex
            flexDirection={"column"}
            cursor="pointer"
            mb={"10px"}
            key={product._id}
          >
            <Box overflow={"hidden"}>
              <Image src={product.img[0]} />
            </Box>
            <Box>
              <Text
                fontSize={["13px", "15px", "17px", "17px", "18px"]}
                fontWeight={600}
              >
                {product.title}
              </Text>
              <Text
                fontSize={["12px", "12px", "13px", "16px", "17px"]}
                color={"gray"}
              >
                {product.description}
              </Text>
              <Text
                fontSize={["12px", "12px", "13px", "16px", "17px"]}
                color={"gray"}
              >
                {product.size.join(", ")}
              </Text>
              <Text
                fontSize={["12px", "12px", "13px", "16px", "17px"]}
                color={"gray"}
              >
                {product.color} Colour
              </Text>
              <Text
                fontSize={["15px", "20px", "17px", "20px", "20px"]}
                fontWeight={600}
                my={"6px"}
              >
                ₹{product.price}.00
              </Text>
            </Box>
            <HStack
              mt={1}
              mb={3}
              width={"100%"}
              justifyContent={"space-around"}
            >
              {" "}
              <Button
                bgColor={"black"}
                color={"white"}
                _hover={{
                  bgColor: "blue",
                }}
                borderColor={"transparent"}
                borderRadius={"30px"}
                onClick={() =>
                  handleQuantityChange("add", product.quantity, index, product)
                }
              >
                <AddIcon />
              </Button>
              <Text fontWeight={"bold"} fontSize={"30px"}>
                {product.quantity}
              </Text>
              <Button
                bgColor={"black"}
                color={"white"}
                _hover={{
                  bgColor: "blue",
                }}
                borderColor={"transparent"}
                borderRadius={"30px"}
                name={"reduce"}
                onClick={() =>
                  handleQuantityChange(
                    "reduce",
                    product.quantity,
                    index,
                    product
                  )
                }
              >
                <MinusIcon />
              </Button>
            </HStack>
            <VStack>
              <Button
                bgColor={"transparent"}
                color={"black"}
                variant={"outline"}
                border="2px solid black"
                borderRadius={"25px"}
                _hover={{
                  bgColor: "blue",
                  color: "white",
                  border: "none",
                }}
                onClick={() => handleRemoveItem(index)}
                width="100%"
              >
                Remove
              </Button>
            </VStack>
          </Flex>
        ))}
      </Grid>
      <Summary {...ordersummry} />
    </Box>
  );
}
export default Cart;
