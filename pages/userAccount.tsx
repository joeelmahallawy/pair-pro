// import { withPageAuthRequired } from "@auth0/nextjs-auth0";
// import {
//   Box,
//   Button,
//   Center,
//   Divider,
//   Flex,
//   Link,
//   Popover,
//   PopoverArrow,
//   PopoverBody,
//   PopoverContent,
//   PopoverHeader,
//   PopoverTrigger,
// } from "@chakra-ui/react";
// import React from "react";
// import { RiArrowDownSFill } from "react-icons/ri";
// import { themes } from "../configs/themes";

// const UserAccount = () => {
//   return (
//     <>
//       <Center
//         h="11.5v%"
//         boxShadow="0 0px 5px 2px rgb(217, 218, 217)"
//         id="header"
//         justifyContent="space-around"
//         p={7}
//       >
//         <Center w="35%">(LOGO HERE)</Center>

//         <Flex w="40%" justifyContent="flex-end">
//           <Button {...themes.navButtons}>How it works</Button>
//           <Button {...themes.navButtons}>Why</Button>
//           <Button
//             {...themes.navButtons}
//             bg="orange.500"
//             ml={5}
//             borderRadius={5}
//             _hover={{ bg: "orange.600" }}
//           >
//             Pair me
//           </Button>
//         </Flex>
//         <Flex w="20%" justifyContent="flex-end">
//           {user ? (
//             <Box mr="20%">
//               <Popover>
//                 {/* TODO: */}
//                 <PopoverTrigger>
//                   <Box cursor="pointer" _hover={{ color: "gray.300" }}>
//                     {/* <Link
//                       _focus={{}}
//                       display="flex"
//                       flexDir="column"
//                       href="/api/auth/logout"
//                       _hover={{}}
//                     > */}
//                     <Image src={user.picture} borderRadius="50%" boxSize="10" />
//                     <Flex fontFamily="Roboto">
//                       Me
//                       <RiArrowDownSFill fontSize="22.5" />
//                     </Flex>
//                     {/* </Link> */}
//                     {/* TODO: */}
//                   </Box>
//                 </PopoverTrigger>
//                 <PopoverContent width="250px">
//                   <PopoverArrow />
//                   <PopoverHeader fontFamily="Roboto">
//                     <Link href="/userAccount" _hover={{}}>
//                       <Center justifyContent="space-between" fontWeight="bold">
//                         <Image
//                           w="60px"
//                           h="60px"
//                           borderRadius="50%"
//                           src={user.picture}
//                         />
//                         {user.name}
//                       </Center>
//                     </Link>
//                   </PopoverHeader>
//                   <PopoverBody>
//                     <Flex flexDir="column" justifyContent="space-around">
//                       <Link p={0.5}>Messages</Link>
//                       <Link p={0.5}>Settings</Link>
//                       <Divider />
//                       <Link _focus={{}} href="/api/auth/logout" p={0.5}>
//                         Sign out
//                       </Link>

//                       {/* <Button bg="blue.600" size="sm">
//                           Button
//                         </Button>
//                         <Button colorScheme="teal" size="sm">
//                           Button
//                         </Button> */}
//                     </Flex>
//                   </PopoverBody>
//                 </PopoverContent>
//               </Popover>
//             </Box>
//           ) : (
//             <Link href="/api/auth/login" _hover={{}}>
//               <Button
//                 {...themes.navButtons}
//                 _hover={{ bg: "blue.600" }}
//                 borderRadius={5}
//                 bg="blue.500"
//               >
//                 Log in
//               </Button>
//             </Link>
//           )}
//         </Flex>
//       </Center>
//       <Center p={10}>
//         <Box w="50vw" bg="red">
//           hi
//         </Box>
//       </Center>
//     </>
//   );
// };
// export default UserAccount;
// export const getServerSideProps = withPageAuthRequired();
