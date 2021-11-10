import {
  Center,
  Text,
  Box,
  Select,
  Flex,
  Input,
  Button,
} from "@chakra-ui/react";
import { Editable, EditableInput, EditablePreview } from "@chakra-ui/editable";
import React, { useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0";
import { useRecoilState } from "recoil";
import { userState } from "../../states/recoil";
import EditableControls from "../editableControls";
import { themes } from "../../configs/themes";

const UserSettings = () => {
  const { user } = useUser();
  const [data, setData] = useRecoilState(userState);
  const [state, setstate] = useState({ fullName: user?.name });
  useEffect(() => {
    setData(user);
  }, [user]);

  return data ? (
    <Box w="85%" p={5} fontFamily="Arial">
      <Editable
        p={3}
        fontSize="xl"
        textAlign="left"
        // @ts-expect-error
        defaultValue={data?.name}
        isPreviewFocusable={false}
      >
        <Center {...themes.userSettingFields} bg="gray.700">
          <Text mr={3}>Name:</Text>
          <EditablePreview />
          <EditableInput bg="white" m={3} color="black" />
          <EditableControls />
        </Center>
      </Editable>
      <Editable
        p={3}
        fontSize="xl"
        textAlign="left"
        // @ts-expect-error
        defaultValue={data?.nickname}
        isPreviewFocusable={false}
      >
        <Center {...themes.userSettingFields} bg="gray.700">
          <Text mr={3}>Nickname:</Text>
          <EditablePreview />
          <EditableInput bg="white" m={3} color="black" />
          <EditableControls />
        </Center>
      </Editable>
      <Editable
        p={3}
        fontSize="xl"
        defaultValue="(Saved languages)"
        textAlign="left"
        isPreviewFocusable={false}
      >
        <Center {...themes.userSettingFields} bg="gray.700">
          <Text mr={3}>Language(s):</Text>
          <EditablePreview p={3} maxW="50%" />
          {/* <EditableInput placeholder="Javascript" /> */}
          {/* <EditableInput bg="white" _focus={{}} color="black" /> */}
          <EditableInput as="textarea" color="black" bg="white" />
          <EditableControls />
        </Center>
      </Editable>
      <Editable
        p={3}
        fontSize="xl"
        defaultValue="(Saved tech)"
        _placeholder={{ bg: "red" }}
        textAlign="left"
        isPreviewFocusable={false}
      >
        <Center {...themes.userSettingFields} bg="gray.700">
          <Text mr={3}>Technologies:</Text>
          <EditablePreview p={3} maxW="50%" />
          <EditableInput as="textarea" color="black" bg="white" />

          <EditableControls />
        </Center>
      </Editable>
      <Editable
        p={3}
        fontSize="xl"
        defaultValue="(Saved tech)"
        _placeholder={{ bg: "red" }}
        textAlign="left"
        isPreviewFocusable={false}
      >
        <Center {...themes.userSettingFields} bg="gray.700">
          <Text mr={3}>Interested in learning:</Text>
          <EditablePreview p={3} maxW="50%" />
          <EditableInput as="textarea" color="black" bg="white" maxW="55%" />

          <EditableControls />
        </Center>
      </Editable>
      <Editable
        p={3}
        fontSize="xl"
        defaultValue="(Saved tech)"
        _placeholder={{ bg: "red" }}
        textAlign="left"
        isPreviewFocusable={false}
      >
        <Center {...themes.userSettingFields} bg="gray.700">
          <Text mr={3}>Interested in building:</Text>
          <EditablePreview p={3} maxW="50%" />
          <EditableInput as="textarea" color="black" bg="white" maxW="55%" />

          <EditableControls />
        </Center>
      </Editable>

      <Center p={3}>
        <Text alignItems="center" fontSize="xl" w="45%">
          Years of experience:
        </Text>
        <Select
          _focus={{}}
          ml="auto"
          w="65%"
          placeholder="Please select an option"
        >
          <option value="< 1">{`< 1`}</option>
          <option value="1-2">1-2</option>
          <option value="2-3">2-3</option>
          <option value="3-4">3-4</option>
          <option value="4-5">4-5</option>
          <option value="5+">5+</option>
        </Select>
      </Center>
      <Center p={3}>
        <Button
          bg="blue.500"
          _hover={{ bg: "blue.600" }}
          _active={{ bg: "blue.700" }}
          _focus={{}}
          //   isLoading
          //   loadingText={false ? "Submitting" : null}
        >
          {" "}
          Submit changes
        </Button>
      </Center>
    </Box>
  ) : null;
};
export default UserSettings;
