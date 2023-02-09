import { Center, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
        <Center
          h={"60px"}
          cursor={"pointer"}
          paddingX={"15px"}
          _hover={{
            borderBottom: `2px solid blue`,
          }}
        >
          <Link to={"/"}>Products</Link>
        </Center>
        <Center
          h={"60px"}
          cursor={"pointer"}
          paddingX={"15px"}
          _hover={{
            borderBottom: `2px solid blue`,
          }}
        >
          <Link to={"/cart"}>Cart</Link>
        </Center>
        <Center
          h={"60px"}
          cursor={"pointer"}
          paddingX={"15px"}
          _hover={{
            borderBottom: `2px solid blue`,
          }}
        >
          <Link to={"/checkout"}>Checkout</Link>
        </Center>
        <Center
          h={"60px"}
          cursor={"pointer"}
          paddingX={"15px"}
          _hover={{
            borderBottom: `2px solid blue`,
          }}
        >
          <Link to={"/orders"}>Orders</Link>
        </Center>
      </Box>
    </>
  );
}
export default Navbar;
