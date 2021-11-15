import _ from "lodash";
import "@typeform/embed/build/css/popup.css";
import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Select,
} from "@chakra-ui/react";
import getUserId from "../../helpers/getUserId";
import { Formik } from "formik";
import userPref from "../../interfaces/userPrefTypes";

const TypeForm = (props) => {
  // const [preferences, setPreferences] = useState<userPref>(data);
  console.log(`typeform props:`, props);
  // const { _id, id, nickName, ...rest } = data;
  // console.log(rest);

  // console.log(id);
  // return (
  //   <Flex
  //     overflowY="auto"
  //     flexDir="column"
  //     p={5}
  //     bg="gray.700"
  //     h={["75vh", "75vh", "75vh", "75vh", "75vh", "62vh"]}
  //     w={["35vw", "35vw", "35vw", "35vw", "35vw", "20vw"]}
  //     fontFamily="Arial"
  //     borderRadius={10}
  //   >
  //     <Formik
  //       initialValues={
  //         !rest
  //           ? {
  //               "Full Name": "",
  //               Email: "",
  //               "Where are you based?": "",
  //               "Years of experience": "",
  //               "Proficient language(s)": [],
  //               "Tools and technologies used": "",
  //               "Tools and technologies you want to learn": "",
  //               "Interested space(s)": [],
  //               "If picked 'other', please specify:": "",
  //               "Have any projects in mind?": "",
  //               "What kind of project?": "",
  //             }
  //           : rest
  //       }
  //       onSubmit={(values, actions) => {
  //         console.log(values);
  //         if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.Email)) {
  //           alert("Please enter valid email");
  //         } else {
  //           if (!data) {
  //             const id = getUserId(user);
  //             console.log("we are putting in new user");
  //             fetch("/api/mongo", {
  //               method: "POST",
  //               body: JSON.stringify({
  //                 ...values,
  //                 id,
  //               }),
  //             });
  //           } else {
  //             console.log("we are updating user");
  //             fetch("/api/mongo", {
  //               method: "PUT",
  //               body: JSON.stringify({
  //                 prefs: {
  //                   ...values,
  //                   id,
  //                 },
  //               }),
  //             });
  //           }
  //           // if (process.browser) window.location.pathname = "/";
  //         }
  //       }}
  //     >
  //       {(props) => (
  //         <form
  //           style={{ display: "flex", flexDirection: "column" }}
  //           onSubmit={props.handleSubmit}
  //         >
  //           {Object.keys(props.values).map((field, i) => {
  //             if (field == "Years of experience") {
  //               return (
  //                 <FormControl mb={3} key={i}>
  //                   <FormLabel fontWeight="bold">{field}</FormLabel>
  //                   <Select
  //                     onChange={props.handleChange}
  //                     onBlur={props.handleBlur}
  //                     value={props.values[field]}
  //                     name={`${field}`}
  //                     placeholder="Please select an option"
  //                   >
  //                     <option value="< 1 year">{`< 1 year`}</option>
  //                     <option value="1 – 2">1 – 2</option>
  //                     <option value="2 – 3">2 – 3</option>
  //                     <option value="3 – 4">3 – 4</option>
  //                     <option value="4 – 5">4 – 5</option>
  //                     <option value="5+"> 5+</option>
  //                   </Select>
  //                 </FormControl>
  //               );
  //             }

  //             if (field == "Proficient language(s)") {
  //               return (
  //                 <FormControl mb={5} key={i}>
  //                   <FormLabel>Proficient Language(s)</FormLabel>
  //                   {[
  //                     "Javascript",
  //                     "Python",
  //                     "Java",
  //                     "Go",
  //                     "C/C++",
  //                     "C#",
  //                     "Ruby",
  //                     "Perl",
  //                     "Swift",
  //                     "PHP",
  //                     "Kotlin",
  //                     "Other",
  //                   ].map((language, i) => (
  //                     <Checkbox
  //                       defaultChecked={data[field].includes(
  //                         props.values[field]
  //                       )}
  //                       isFocusable={false}
  //                       _focus={{
  //                         outline: "none",
  //                         bg: "red",
  //                         borderColor: "transparent",
  //                       }}
  //                       w={["30%", "30%", "30%", "30%", "30%", "25%"]}
  //                       type="checkbox"
  //                       key={i}
  //                       onChange={(e) => {
  //                         if (
  //                           props.values["Proficient language(s)"].includes(
  //                             e.currentTarget.value
  //                           )
  //                         )
  //                           _.remove(
  //                             props.values["Proficient language(s)"],
  //                             function (el) {
  //                               return e.currentTarget.value == el;
  //                             }
  //                           );
  //                         else
  //                           props.values["Proficient language(s)"].push(
  //                             e.currentTarget.value
  //                           );
  //                       }}
  //                       onBlur={props.handleBlur}
  //                       value={language}
  //                       name={`${props.values["Proficient language(s)"]}`}
  //                       size="lg"
  //                       colorScheme="twitter"
  //                     >
  //                       {language}
  //                       {console.log(
  //                         `is ${props.values[field]} checked?`,
  //                         data[field].includes(props.values[field])
  //                       )}
  //                     </Checkbox>
  //                   ))}
  //                 </FormControl>
  //               );
  //             }
  //             if (field == "Interested space(s)") {
  //               return (
  //                 <FormControl mb={5} key={i}>
  //                   <FormLabel>Interested space(s)</FormLabel>
  //                   {[
  //                     "Cryptocurrency",
  //                     "NFT",
  //                     "Blockchain technology",
  //                     "DeFi",
  //                     "Artificial Intelligence",
  //                     "Machine Learning",
  //                     "Data science",
  //                     "Other",
  //                   ].map((language, i) => (
  //                     <Checkbox
  //                       defaultChecked={data[field].includes(
  //                         props.values[field]
  //                       )}
  //                       isFocusable={false}
  //                       _focus={{
  //                         outline: "none",
  //                         bg: "red",
  //                         borderColor: "transparent",
  //                       }}
  //                       w={["50%", "50%", "50%", "50%", "50%", "50%"]}
  //                       type="checkbox"
  //                       key={i}
  //                       onChange={(e) => {
  //                         if (
  //                           props.values["Interested space(s)"].includes(
  //                             e.currentTarget.value
  //                           )
  //                         )
  //                           _.remove(
  //                             props.values["Interested space(s)"],
  //                             function (el) {
  //                               return e.currentTarget.value == el;
  //                             }
  //                           );
  //                         else
  //                           props.values["Interested space(s)"].push(
  //                             e.currentTarget.value
  //                           );
  //                       }}
  //                       onBlur={props.handleBlur}
  //                       value={language}
  //                       name={`${props.values["Interested space(s)"]}`}
  //                       size="lg"
  //                       colorScheme="twitter"
  //                     >
  //                       {language}
  //                     </Checkbox>
  //                   ))}
  //                 </FormControl>
  //               );
  //             }

  //             if (field == "Have any projects in mind?") {
  //               return (
  //                 <FormControl key={i} mb={3}>
  //                   <FormLabel fontWeight="bold">{field}</FormLabel>
  //                   <RadioGroup
  //                     onChange={(e) => {
  //                       props.values["Have any projects in mind?"] = e;
  //                     }}
  //                     onBlur={props.handleBlur}
  //                   >
  //                     <HStack
  //                       value={props.values[field]}
  //                       name={`${field}`}
  //                       spacing="10%"
  //                     >
  //                       <Radio value="Yes">Yes</Radio>
  //                       <Radio value="No">No</Radio>
  //                     </HStack>
  //                   </RadioGroup>
  //                 </FormControl>
  //               );
  //             }
  //             if (field == "What kind of project?") {
  //               return (
  //                 <FormControl mb={5} key={i} id={`${field}`} isRequired>
  //                   <FormLabel fontWeight="bold">
  //                     If so, what kind of project? (optional)
  //                   </FormLabel>
  //                   <Input
  //                     _focus={{ bg: "gray.500" }}
  //                     variant="filled"
  //                     color="white"
  //                     type="text"
  //                     onChange={props.handleChange}
  //                     onBlur={props.handleBlur}
  //                     value={props.values[field]}
  //                     name={`${field}`}
  //                     placeholder="Ex) The Airbnb for people's backyards"
  //                   />
  //                   <FormHelperText>
  //                     Give the TL;DR and 'N/A' otherwise
  //                   </FormHelperText>
  //                 </FormControl>
  //               );
  //             }

  //             if (field == "Where are you based?") {
  //               return (
  //                 <FormControl mb={5} key={i} id={`${field}`} isRequired>
  //                   <FormLabel fontWeight="bold">{field} </FormLabel>
  //                   <Input
  //                     _focus={{ bg: "gray.500" }}
  //                     variant="filled"
  //                     color="white"
  //                     type="text"
  //                     placeholder="Ex) San Francisco, CA"
  //                     onChange={props.handleChange}
  //                     onBlur={props.handleBlur}
  //                     value={props.values[field]}
  //                     name={`${field}`}
  //                   />
  //                 </FormControl>
  //               );
  //             }
  //             if (field == "Email") {
  //               return (
  //                 <FormControl mb={5} key={i} id={`${field}`} isRequired>
  //                   <FormLabel fontWeight="bold">{field}</FormLabel>
  //                   <Input
  //                     _focus={{ bg: "gray.500" }}
  //                     variant="filled"
  //                     color="white"
  //                     type="text"
  //                     onChange={props.handleChange}
  //                     onBlur={props.handleBlur}
  //                     value={props.values[field]}
  //                     name={`${field}`}
  //                     placeholder="johndoe123@gmail.com"
  //                   />
  //                 </FormControl>
  //               );
  //             }
  //             if (field == "Full Name") {
  //               return (
  //                 <FormControl mb={5} key={i} id={`${field}`} isRequired>
  //                   <FormLabel fontWeight="bold">{field}</FormLabel>
  //                   <Input
  //                     _focus={{ bg: "gray.500" }}
  //                     variant="filled"
  //                     color="white"
  //                     type="text"
  //                     onChange={props.handleChange}
  //                     onBlur={props.handleBlur}
  //                     value={props.values[field]}
  //                     name={`${field}`}
  //                     placeholder="John Doe"
  //                   />
  //                 </FormControl>
  //               );
  //             }

  //             return (
  //               <FormControl mb={5} key={i} id={`${field}`} isRequired>
  //                 <FormLabel fontWeight="bold">{field}</FormLabel>
  //                 <Input
  //                   _focus={{ bg: "gray.500" }}
  //                   variant="filled"
  //                   color="white"
  //                   type="text"
  //                   onChange={props.handleChange}
  //                   onBlur={props.handleBlur}
  //                   value={props.values[field]}
  //                   name={`${field}`}
  //                   placeholder="Ex) React.js, Node.js"
  //                 />
  //                 {field == "Tools and technologies used" && (
  //                   <FormHelperText mb={1}>
  //                     Separate answers with comma and space
  //                   </FormHelperText>
  //                 )}
  //                 {field == "Tools and technologies you want to learn" && (
  //                   <FormHelperText>
  //                     Separate answers with comma and space
  //                   </FormHelperText>
  //                 )}
  //               </FormControl>
  //             );
  //           })}
  //           <Button
  //             ml="auto"
  //             colorScheme="teal"
  //             type="submit"
  //             // isDisabled={_.isEqual(obj1, obj2);}
  //           >
  //             Submit
  //           </Button>
  //         </form>
  //       )}
  //     </Formik>
  //   </Flex>
  // );
  return null;
};
export default TypeForm;
// const [state, doFetch] = useAsyncFn(async () => {
//   const response = await fetch(url);
//   const result = await response.text();
//   return result
// }, [url]);

export const getServerSideProps = async (ctx) => {
  try {
    const res = await fetch("https://pair-pro.vercel.app/api/stats", {
      headers: { Cookie: ctx.req.headers.cookie },
    });
    const user = await res.json();
    const response = await fetch("https://pair-pro.vercel.app/api/mongo", {
      method: "GET",
      headers: {
        user: getUserId(user),
      },
    });
    const data = await response.json();

    return { props: { user, data } };
  } catch (err) {
    return {};
  }
};
