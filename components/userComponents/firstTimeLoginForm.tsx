import { Widget, PopupButton, Sidetab } from "@typeform/embed-react";

const TypeForm = () => {
  return (
    // <div data-tf-widget="PbGrnsxz" style="width:100%;height:600px;"></div>

    // <script src="//embed.typeform.com/next/embed.js"></script>
    // <PopupButton id="<form-id>" style={{ fontSize: 20 }} className="my-button">
    //   click to open form in popup
    // </PopupButton>
    // <Sidetab id="<form-id>" buttonText="click to open" />
    <Widget
      id="PbGrnsxz"
      //   https://f1n3e2z1bc4.typeform.com/to/PbGrnsxz
      style={{
        width: "100%",
        height: "100%",
      }}
      //   className="my-form"
    />

    // <Widget
    //   id="<form-id>"
    //   style={{ width: "100%", height: "100%" }}
    //   className="my-form"
    // />
  );
};
export default TypeForm;

//KEY= 9RJUmjFbkTvDS67sT3zJvW6WZhKt9j7NRPfKg2RTDKb2
