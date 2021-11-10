import { Button, ButtonGroup, IconButton } from "@chakra-ui/react";

import {
  Editable,
  EditableInput,
  EditablePreview,
  useEditableControls,
} from "@chakra-ui/editable";
import { Flex } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0";
import { useRecoilState } from "recoil";
import { userState } from "../../states/recoil";

const UserSettings = () => {
  const { user } = useUser();
  const [data, setData] = useRecoilState(userState);
  const [state, setstate] = useState({ fullName: user?.name });
  useEffect(() => {
    setData(user);
  }, [user]);

  /* Here's a custom control */
  //   console.log("hi");
  function EditableControls() {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls();

    return isEditing ? (
      <ButtonGroup justifyContent="center" size="sm">
        <Button {...getSubmitButtonProps()}>Open</Button>
        <Button {...getCancelButtonProps()}>Close</Button>
        {/* <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
        <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} /> */}
      </ButtonGroup>
    ) : (
      <Flex justifyContent="center">
        <Button {...getEditButtonProps()}>Edit</Button>
      </Flex>
    );
  }

  return (
    <Editable
      textAlign="center"
      defaultValue={user && user.name}
      //   defaultValue="lol"
      fontSize="2xl"
      isPreviewFocusable={false}
    >
      <EditablePreview />
      <EditableInput />
      <EditableControls />
    </Editable>
  );
};
export default UserSettings;
