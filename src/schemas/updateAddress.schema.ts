import * as yup from "yup";

export const updateAddressSchema = yup.object().shape({
  cep: yup.string(),
  state: yup.string(),
  city: yup.string(),
  street: yup.string(),
  number: yup.string(),
  complement: yup.string(),
});
