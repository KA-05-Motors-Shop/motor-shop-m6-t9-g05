import * as yup from "yup";

export const commentSchema = yup.object().shape({
  message: yup.string().required("This field is required"),
});
