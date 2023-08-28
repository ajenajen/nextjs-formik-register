import * as Yup from "yup";
import { countryCode } from "./countryCodes";

export const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  countryCode: "+66",
  phone: "",
  countrys: countryCode?.reduce((prev, curr) => {
    return [
      ...prev,
      { value: curr.dial_code, label: `${curr.name} (${curr.dial_code})` },
    ];
  }, []),
};

export const validationSchema = Yup.object().shape({
  firstname: Yup.string().required("The field is reqiued."),
  lastname: Yup.string().required("The field is reqiued."),
  countryCode: Yup.string().required("The field is reqiued."),
  email: Yup.string()
    .required("The field is reqiued.")
    .email("The email is wrong format."),
  phone: Yup.string()
    .required("The field is reqiued.")
    .matches(/^\d+$/, "The phone number is wrong format.")
    .test("The phone number is max 10.", (val) => val.length === 10),
});
