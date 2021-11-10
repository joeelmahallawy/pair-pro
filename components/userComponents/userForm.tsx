import * as React from "react";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from "formik";
import { Box, Heading, FormLabel, Input, Center, Flex } from "@chakra-ui/react";

interface MyFormValues {
  firstName: string;
}

const FormValidate: React.FC<{}> = () => {
  const initialValues: MyFormValues = { firstName: "" };
  return (
    <Flex p={10} flexDir="column" w="75%" bg="green">
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        <Form>
          <FormLabel htmlFor="firstName">First Name</FormLabel>
          <Input id="firstName" variant="filled" placeholder="First Name" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </Flex>
  );
};
export default FormValidate;

// function FormikExample() {
//     function validateName(value) {
//       let error
//       if (!value) {
//         error = "Name is required"
//       } else if (value.toLowerCase() !== "naruto") {
//         error = "Jeez! You're not a fan 😱"
//       }
//       return error
//     }

//     return (
//       <Formik
//         initialValues={{ name: "Sasuke" }}
//         onSubmit={(values, actions) => {
//           setTimeout(() => {
//             alert(JSON.stringify(values, null, 2))
//             actions.setSubmitting(false)
//           }, 1000)
//         }}
//       >
//         {(props) => (
//           <Form>
//             <Field name="name" validate={validateName}>
//               {({ field, form }) => (
//                 <FormControl isInvalid={form.errors.name && form.touched.name}>
//                   <FormLabel htmlFor="name">First name</FormLabel>
//                   <Input {...field} id="name" placeholder="name" />
//                   <FormErrorMessage>{form.errors.name}</FormErrorMessage>
//                 </FormControl>
//               )}
//             </Field>
//             <Button
//               mt={4}
//               colorScheme="teal"
//               isLoading={props.isSubmitting}
//               type="submit"
//             >
//               Submit
//             </Button>
//           </Form>
//         )}
//       </Formik>
//     )
//   }
