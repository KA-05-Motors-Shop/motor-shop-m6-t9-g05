import * as yup from "yup";

export const updateProfileSchema = yup.object().shape({
  name: yup.string(),
  email: yup.string().email("E-mail format invalid."),
  cpf: yup.string(),
  cel: yup.string(),
  birth_date: yup.string(),
  description: yup.string().max(500),
  account_type: yup.string(),
  password: yup.string().required("Password is required"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password")], "Different passwords")
    .required("Confirmation is required"),
});
