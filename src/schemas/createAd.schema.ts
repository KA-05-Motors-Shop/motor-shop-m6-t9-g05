import * as yup from "yup";

export const createAdSchema = yup.object().shape({
  title: yup.string().required("This field is required"),
  type_of_ad: yup.string().required("This field is required"),
  year: yup.number().min(1).required("This field is required").typeError("Must be a number"),
  km: yup.number().required("This field is required").typeError("Must be a number"),
  price: yup.number().min(1).required("This field is required").typeError("Must be a number"),
  description: yup.string().required("This field is required"),
  type_of_vehicle: yup.string().required("This field is required"),
  cover_image: yup.string().url('Must be a URL').required("This field is required"),
  gallery_image: yup.string().url('Must be a URL').required("This field is required"),
  gallery_image2: yup.string().url('Must be a URL'),
  gallery_image3: yup.string().url('Must be a URL'),
  gallery_image4: yup.string().url('Must be a URL'),
  gallery_image5: yup.string().url('Must be a URL'),
  gallery_image6: yup.string().url('Must be a URL'),
});
