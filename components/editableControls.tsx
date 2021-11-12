import {
  Button,
  ButtonGroup,
  Flex,
  useEditableControls,
} from "@chakra-ui/react";
import React from "react";

export default function EditableControls() {
  const {
    isEditing,
    getSubmitButtonProps,
    getCancelButtonProps,
    getEditButtonProps,
  } = useEditableControls();

  return isEditing ? null : (
    <Flex justifyContent="center" p={3}>
      <Button {...getEditButtonProps()} _focus={{}}>
        Edit
      </Button>
    </Flex>
  );
}
