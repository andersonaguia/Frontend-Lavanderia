import * as yup from "yup";

export const signInSchema = yup.object().shape({
  email: yup
    .string()
    .required("Obrigatório inserir o e-mail")
    .email("Digite um e-mail válido"),
  password: yup.string().required("Obrigatório digitar a senha"),
});
