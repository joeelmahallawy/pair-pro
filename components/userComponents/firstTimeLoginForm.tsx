import { Widget, PopupButton, Sidetab } from "@typeform/embed-react";
import { createSlider } from "@typeform/embed";
import "@typeform/embed/build/css/popup.css";
import React, { useState } from "react";
import { Button } from "@chakra-ui/react";
import DynamicFormGenerator from "react-interactive-dynamic-form-generator";
import getUserId from "../../helpers/getUserId";

const TypeForm = ({ user }) => {
  const [showForm, setShowForm] = useState(true);
  console.log(user);
  return (
    <>
      {/* <Button
        onClick={async (e) => {
          const res = await fetch("/api/mongo", {
            headers: {
              Accept: "application/json",
              userID: getUserId(user),
            },
          });
          const data = await res.json();
          setShowForm(false);
          //   console.log(data);
        }}
      >
        Click me for data!
      </Button> */}
      {showForm ? (
        <Widget
          id="Y2VtM1jQ"
          style={{
            width: "100%",
            height: "100%",
          }}
          onSubmit={async (e) => {
            const res = await fetch("/api/typeform");
            const data = await res.json();
            setShowForm(false);
            console.log(data);
          }}
        />
      ) : (
        (window.location.pathname = "/")
      )}
    </>
  );
};
export default TypeForm;
