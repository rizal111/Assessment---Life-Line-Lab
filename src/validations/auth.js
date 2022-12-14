import { object, string } from "yup";

export const loginSchema = object({
  username: string().required("Required"),
  password: string().min(6, "must more than 6 characters").required("Required"),
});
