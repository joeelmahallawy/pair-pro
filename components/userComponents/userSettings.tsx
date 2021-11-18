import {
  Center,
  Button,
  Flex,
  useToast,
  Checkbox,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Select,
  Box,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Formik } from "formik";
import _ from "lodash";
import getUserId from "../../helpers/getUserId";

const UserSettings = ({ user, data }) => {
  const [showToast, setShowToast] = useState(false);
  const [showOther, setShowOther] = useState(false);
  const [showKindOfProject, setShowKindOfProject] = useState(false);
  const toast = useToast();
  if (data) {
    delete data.id;
    delete data._id;
    delete data.nickName;
  }

  return (
    <Center w="85%" p={5} fontFamily="Arial">
      <Flex
        overflowY="auto"
        flexDir="column"
        p={5}
        bg="gray.700"
        h={["75vh", "75vh", "75vh", "75vh", "75vh", "62vh"]}
        w={["37.5vw", "37.5vw", "37.5vw", "37.5vw", "37.5vw", "30vw"]}
        fontFamily="Arial"
        borderRadius={10}
      >
        <Formik
          initialValues={
            data
              ? data
              : {
                  "Full Name": "",
                  Email: "",
                  "Where are you based?": "",
                  "Years of experience": "",
                  "Proficient language(s)": [],
                  "Tools and technologies used": "",
                  "Tools and technologies you want to learn": "",
                  "Interested space(s)": [],
                  "If picked 'other', please specify:": "",
                  "Have any projects in mind?": "",
                  "What kind of project?": "",
                }
          }
          onSubmit={(values, actions) => {
            console.log(values);
            if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.Email)
            ) {
              alert("Please enter valid email");
            } else {
              const id = getUserId(user);
              if (!data) {
                fetch("/api/mongo", {
                  method: "POST",
                  body: JSON.stringify({
                    ...values,
                    id,
                  }),
                });
              } else {
                fetch("/api/mongo", {
                  method: "PUT",
                  body: JSON.stringify({
                    prefs: {
                      ...values,
                      id,
                    },
                  }),
                }).then(() => {
                  setShowToast(true);
                });
              }
              if (process.browser && window.location.pathname == "/initLogin")
                window.location.pathname = "/";
            }
          }}
        >
          {(props) => (
            <form
              style={{ display: "flex", flexDirection: "column" }}
              onSubmit={props.handleSubmit}
            >
              {Object.keys(props.values).map((field, i) => {
                if (field == "Years of experience") {
                  return (
                    <FormControl mb={3}>
                      <FormLabel fontWeight="bold">{field}</FormLabel>
                      <Select
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values[field]}
                        name={`${field}`}
                        placeholder="Please select an option"
                      >
                        <option value="< 1 year">{`< 1 year`}</option>
                        <option value="1 – 2">1 – 2</option>
                        <option value="2 – 3">2 – 3</option>
                        <option value="3 – 4">3 – 4</option>
                        <option value="4 – 5">4 – 5</option>
                        <option value="5+"> 5+</option>
                      </Select>
                    </FormControl>
                  );
                }

                if (field == "Proficient language(s)") {
                  return (
                    <FormControl mb={5}>
                      <FormLabel>Proficient Language(s)</FormLabel>
                      {[
                        "Javascript",
                        "Python",
                        "Java",
                        "Go",
                        "C/C++",
                        "C#",
                        "Ruby",
                        "Perl",
                        "Swift",
                        "PHP",
                        "Kotlin",
                        "Other",
                      ].map((language, i) => (
                        <Checkbox
                          key={i}
                          defaultChecked={
                            data &&
                            data["Proficient language(s)"].includes(language)
                          }
                          isFocusable={false}
                          _focus={{
                            outline: "none",
                            bg: "red",
                            borderColor: "transparent",
                          }}
                          w={["30%", "30%", "30%", "30%", "30%", "25%"]}
                          type="checkbox"
                          onChange={(e) => {
                            if (
                              props.values["Proficient language(s)"].includes(
                                e.currentTarget.value
                              )
                            )
                              _.remove(
                                props.values["Proficient language(s)"],
                                function (el) {
                                  return e.currentTarget.value == el;
                                }
                              );
                            else
                              props.values["Proficient language(s)"].push(
                                e.currentTarget.value
                              );
                          }}
                          onBlur={props.handleBlur}
                          value={language}
                          name={`${props.values["Proficient language(s)"]}`}
                          size="lg"
                          colorScheme="twitter"
                        >
                          {language}
                        </Checkbox>
                      ))}
                    </FormControl>
                  );
                }
                // TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:
                if (field == "Interested space(s)") {
                  return (
                    <Box key={i}>
                      <FormControl mb={5}>
                        <FormLabel>Interested space(s)</FormLabel>
                        {[
                          "Cryptocurrency",
                          "NFT",
                          "Blockchain technology",
                          "DeFi",
                          "Artificial Intelligence",
                          "Machine Learning",
                          "Data science",
                          "Other",
                        ].map((space, i) => (
                          <Checkbox
                            key={i}
                            defaultChecked={
                              data &&
                              data["Interested space(s)"].includes(space)
                            }
                            isFocusable={false}
                            _focus={{
                              outline: "none",
                              bg: "red",
                              borderColor: "transparent",
                            }}
                            w={["50%", "50%", "50%", "50%", "50%", "50%"]}
                            type="checkbox"
                            onChange={(e) => {
                              if (e.currentTarget.value === "Other")
                                setShowOther((prev) => !prev);
                              if (
                                props.values["Interested space(s)"].includes(
                                  e.currentTarget.value
                                )
                              )
                                _.remove(
                                  props.values["Interested space(s)"],
                                  function (el) {
                                    return e.currentTarget.value == el;
                                  }
                                );
                              else
                                props.values["Interested space(s)"].push(
                                  e.currentTarget.value
                                );
                            }}
                            onBlur={props.handleBlur}
                            value={space}
                            name={`${props.values["Interested space(s)"]}`}
                            size="lg"
                            colorScheme="twitter"
                          >
                            {space}
                          </Checkbox>
                        ))}
                      </FormControl>
                      {/* TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO: */}
                      {showOther ||
                        (data &&
                          data["Interested space(s)"].includes("Other") && (
                            <FormControl mb={5} id="Please specify:" isRequired>
                              <FormLabel fontWeight="bold">
                                If picked 'other', please specify:
                              </FormLabel>
                              <Input
                                _focus={{ bg: "gray.500" }}
                                variant="filled"
                                color="white"
                                type="text"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={
                                  props.values[
                                    "If picked 'other', please specify:"
                                  ]
                                }
                                name="If picked 'other', please specify:"
                                placeholder={"Ex) Fintech"}
                              />
                            </FormControl>
                          ))}
                    </Box>
                  );

                  // TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:
                }
                if (field == "If picked 'other', please specify:") return null;
                if (field == "Have any projects in mind?") {
                  return (
                    <>
                      <FormControl mb={3}>
                        <FormLabel fontWeight="bold">{field}</FormLabel>
                        <RadioGroup
                          defaultValue={
                            data && data["Have any projects in mind?"]
                          }
                          // value={data["Have any projects in mind?"]}
                          onChange={(e) => {
                            props.values["Have any projects in mind?"] = e;
                          }}
                          onBlur={props.handleBlur}
                        >
                          <HStack
                            value={props.values[field]}
                            name={`${field}`}
                            spacing="10%"
                          >
                            <Radio value="Yes">Yes</Radio>
                            <Radio value="No">No</Radio>
                          </HStack>
                        </RadioGroup>
                      </FormControl>
                      {/* TODO:TODO:TODO:TODO:TODO: */}

                      <FormControl mb={5} id="What kind of project?" isRequired>
                        <FormLabel fontWeight="bold">
                          If so, what kind of project? Enter 'N/A' otherwise
                        </FormLabel>
                        <Input
                          _focus={{ bg: "gray.500" }}
                          variant="filled"
                          color="white"
                          type="text"
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          value={props.values["What kind of project?"]}
                          name="What kind of project?"
                          placeholder="Ex) The Airbnb for people's backyards"
                        />
                        <FormHelperText>Give the TL;DR</FormHelperText>
                      </FormControl>
                    </>
                  );
                }
                if (field == "What kind of project?") {
                  return null;
                }

                if (field == "Where are you based?") {
                  return (
                    <FormControl mb={5} id={`${field}`} isRequired>
                      <FormLabel fontWeight="bold">{field} </FormLabel>
                      <Input
                        _focus={{ bg: "gray.500" }}
                        variant="filled"
                        color="white"
                        type="text"
                        placeholder="Ex) San Francisco, CA"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values[field]}
                        name={`${field}`}
                      />
                    </FormControl>
                  );
                }
                if (field == "Email") {
                  return (
                    <FormControl mb={5} id={`${field}`} isRequired>
                      <FormLabel fontWeight="bold">{field}</FormLabel>
                      <Input
                        _focus={{ bg: "gray.500" }}
                        variant="filled"
                        color="white"
                        type="text"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values[field]}
                        name={`${field}`}
                        placeholder="johndoe123@gmail.com"
                      />
                    </FormControl>
                  );
                }
                if (field == "Full Name") {
                  return (
                    <FormControl mb={5} id={`${field}`} isRequired>
                      <FormLabel fontWeight="bold">{field}</FormLabel>
                      <Input
                        _focus={{ bg: "gray.500" }}
                        variant="filled"
                        color="white"
                        type="text"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values[field]}
                        name={`${field}`}
                        placeholder="John Doe"
                      />
                    </FormControl>
                  );
                }
                if (field == "Interested space(s)") {
                  // props.values["Interested space(s)"].push(
                  //   e.currentTarget.value
                  // )
                }
                return (
                  <FormControl mb={5} id={`${field}`} isRequired>
                    <FormLabel fontWeight="bold">{field}</FormLabel>
                    <Input
                      _focus={{ bg: "gray.500" }}
                      variant="filled"
                      color="white"
                      type="text"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values[field]}
                      name={`${field}`}
                      placeholder={"Ex) React.js, Node.js"}
                    />
                    {field == "Tools and technologies used" && (
                      <FormHelperText mb={1}>
                        Separate answers with comma and space
                      </FormHelperText>
                    )}
                    {field == "Tools and technologies you want to learn" && (
                      <FormHelperText>
                        Separate answers with comma and space
                      </FormHelperText>
                    )}
                  </FormControl>
                );
              })}
              <Button
                ml="auto"
                colorScheme="teal"
                type="submit"
                onClick={() => {
                  if (
                    process.browser &&
                    window.location.pathname != "/initLogin"
                  )
                    return toast({
                      title: "Submitted changes.",
                      description: "Profile looking good! 😉",
                      status: "success",
                      duration: 3000,
                      isClosable: true,
                    });
                  else
                    return toast({
                      title: "Account created.",
                      description: "Your ready to start matching!",
                      status: "success",
                      duration: 3000,
                      isClosable: true,
                    });
                }}
              >
                Submit
              </Button>
            </form>
          )}
        </Formik>
      </Flex>
    </Center>
  );
};
export default UserSettings;
