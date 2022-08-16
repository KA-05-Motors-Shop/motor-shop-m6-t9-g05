import * as yup from "yup";

export const updateAdSchema = yup.object().shape({
  title: yup.string(),
  type_of_ad: yup.string(),
  year: yup.string().typeError("Must be a number").notRequired(),
  km: yup.string().typeError("Must be a number").notRequired(),
  price: yup.string().notRequired().typeError("Must be a number"),
  description: yup.string(),
  type_of_vehicle: yup.string(),
  cover_image: yup.string().url('Must be a URL'),
  gallery_image: yup.string().url('Must be a URL'),
  gallery_image2: yup.string().url('Must be a URL'),
  gallery_image3: yup.string().url('Must be a URL'),
  gallery_image4: yup.string().url('Must be a URL'),
  gallery_image5: yup.string().url('Must be a URL'),
  gallery_image6: yup.string().url('Must be a URL'),
  published: yup.boolean()
});
