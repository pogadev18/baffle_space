import * as Yup from "yup";
import { toast } from "react-toastify";

export interface RegisterFormValues {
  email: string;
}

export const initialValues = {
  email: "",
};

export const validationSchema = Yup.object().shape({
  email: Yup.string().email().required("Introdu o adresa de e-mail valida"),
});

export const notify = () =>
  toast.success("Enjoy crypto raffle", { theme: "colored" });
