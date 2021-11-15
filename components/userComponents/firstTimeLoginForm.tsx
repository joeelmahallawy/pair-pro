// import _ from "lodash";
// import "@typeform/embed/build/css/popup.css";
// import React, { useEffect, useRef, useState } from "react";
// import {
//   Button,
//   Checkbox,
//   Flex,
//   FormControl,
//   FormHelperText,
//   FormLabel,
//   HStack,
//   Input,
//   Radio,
//   RadioGroup,
//   Select,
// } from "@chakra-ui/react";
// import getUserId from "../../helpers/getUserId";
// import { Formik } from "formik";
// import userPref from "../../interfaces/userPrefTypes";

// const TypeForm = ({ data }: any, { user }: any) => {
//   // const [preferences, setPreferences] = useState<userPref>(data);

//   // const { _id, id, nickName, ...rest } = data;
//   console.log(data);
//   console.log(!data.data);

// export default TypeForm;

// // export const getServerSideProps = async (ctx) => {
// //   try {
// //     const res = await fetch("https://pair-pro.vercel.app/api/stats", {
// //       headers: { Cookie: ctx.req.headers.cookie },
// //     });
// //     if (!res.ok) throw new Error("Could not fetch user");
// //     const user = await res.json();

// //     const response = await fetch("https://pair-pro.vercel.app/api/mongo", {
// //       method: "GET",
// //       headers: {
// //         user: getUserId(user),
// //       },
// //     });
// //     if (!response.ok)
// //       throw new Error("Could not get data with users information");
// //     const data = await response.json();
// //     return { props: user };
// //     // if (!data.data) return { props: user };
// //     // else return { props: { user, data } };
// //   } catch (err) {
// //     return { error: "you suck", err: err.message };
// //   }
// // };
