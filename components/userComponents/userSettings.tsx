import { Center, Text, Box, Button, Flex, useToast } from "@chakra-ui/react";
import { Editable, EditableInput, EditablePreview } from "@chakra-ui/editable";
import React, { useState } from "react";
import EditableControls from "./editableControls";
import { themes } from "../../configs/themes";
import userPref from "../../interfaces/userPrefTypes";
import TypeForm from "./firstTimeLoginForm";

const UserSettings = ({ data }: any, { user }: any) => {
  // const [preferences, setPreferences] = useState<userPref>(data);

  const toast = useToast();

  return data ? (
    <Box w="85%" p={5} fontFamily="Arial">
      <TypeForm user={user} data={data} />
      {/* <Editable
        p={3}
        fontSize="xl"
        textAlign="left"
        defaultValue={data["Full Name"]}
        isPreviewFocusable={false}
      >
        <Center {...themes.userSettingFields} bg="gray.700">
          <Text mr={3}>Name:</Text>
          <Center>
            <EditablePreview />
            <EditableInput
              onChange={(e) => {
                setPreferences({
                  ...preferences,
                  "Full Name": e.currentTarget.value,
                });
              }}
              w="100%"
              bg="white"
              m={3}
              color="black"
            />
            <EditableControls />
          </Center>
        </Center>
      </Editable>

      <Editable
        p={3}
        fontSize="xl"
        textAlign="left"
        defaultValue={data?.nickName}
        isPreviewFocusable={false}
      >
        <Center {...themes.userSettingFields} bg="gray.700">
          <Text mr={3}>Nickname:</Text>
          <Center>
            <EditablePreview />
            <EditableInput
              onChange={(e) => {
                setPreferences({
                  ...preferences,
                  nickName: e.currentTarget.value,
                });
              }}
              w="100%"
              bg="white"
              m={3}
              color="black"
            />
            <EditableControls />
          </Center>
        </Center>
      </Editable>
      <Editable
        p={3}
        fontSize="xl"
        defaultValue={data["Proficient language(s)"].join(", ")}
        textAlign="left"
        isPreviewFocusable={false}
      >
        <Center
          {...themes.userSettingFields}
          justifyContent="space-between"
          bg="gray.700"
        >
          <Text mr={3}>Language(s):</Text>
          <Center>
            <EditablePreview p={3} />
            <EditableInput
              onChange={(e) => {
                setPreferences({
                  ...preferences,
                  "Proficient language(s)": e.currentTarget.value.split(", "),
                });
              }}
              w="275px"
              h="40px"
              as="textarea"
              color="black"
              bg="white"
            />
            <EditableControls />
          </Center>
        </Center>
      </Editable>
      <Editable
        p={3}
        fontSize="xl"
        defaultValue={data["Tools and technologies used"]}
        textAlign="left"
        isPreviewFocusable={false}
      >
        <Center {...themes.userSettingFields} bg="gray.700">
          <Text mr={3}>Technologies used:</Text>
          <Center>
            <EditablePreview p={3} />
            <EditableInput
              onChange={(e) => {
                setPreferences({
                  ...preferences,
                  "Tools and technologies used": e.currentTarget.value,
                });
              }}
              w="275px"
              as="textarea"
              color="black"
              bg="white"
            />
            <EditableControls />
          </Center>
        </Center>
      </Editable>
      <Editable
        p={3}
        fontSize="xl"
        defaultValue={data["Tools and technologies you want to learn"]}
        textAlign="left"
        isPreviewFocusable={false}
      >
        <Center {...themes.userSettingFields} bg="gray.700">
          <Text mr={3}>Technologies interested in learning:</Text>
          <Center maxW="50%">
            <EditablePreview p={3} />
            <EditableInput
              onChange={(e) => {
                setPreferences({
                  ...preferences,
                  "Tools and technologies you want to learn":
                    e.currentTarget.value,
                });
              }}
              w="275px"
              as="textarea"
              color="black"
              bg="white"
            />
            <EditableControls />
          </Center>
        </Center>
      </Editable>
      <Editable
        p={3}
        fontSize="xl"
        defaultValue={data["Interested space(s)"].join(", ")}
        textAlign="left"
        isPreviewFocusable={false}
      >
        <Center {...themes.userSettingFields} bg="gray.700">
          <Text mr={3}>Interested in spaces:</Text>
          <Center maxW="50%">
            <EditablePreview p={3} />
            <EditableInput
              onChange={(e) => {
                setPreferences({
                  ...preferences,
                  "Interested space(s)": e.currentTarget.value.split(", "),
                });
              }}
              w="275px"
              as="textarea"
              color="black"
              bg="white"
            />
            <EditableControls />
          </Center>
        </Center>
      </Editable> */}
    </Box>
  ) : null;
};
export default UserSettings;
