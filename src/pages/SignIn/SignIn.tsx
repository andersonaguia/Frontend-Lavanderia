import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ContainerStyled } from "./signIn.styles";
import { signInSchema } from "./signIn.validations";
import { SignInFormValues } from "./signIn.types";
import { Loading } from "../../components/Loading/Loading";
import { useNavigate } from "react-router-dom";
import { useAuthentication } from "../../contexts/Authentication/useAuthentication";
import { ThemeProvider } from "styled-components";
import { Background } from "../../components/Background/Background";
import { useCustomTheme } from "../../contexts/CustomTheme/useCustomTheme";
import { themeLight } from "../../themes/themeLight";
import { themeDark } from "../../themes/themeDark";
import { toast } from "react-toastify";

export const SignIn: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormValues>({
    resolver: yupResolver(signInSchema),
  });

  const navigate = useNavigate();
  const { loading, handleLogin, errorMessage, isAuthenticated } =
    useAuthentication();

  const { theme } = useCustomTheme();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/logged");
    }
  }, [loading]);

  const onSubmit = async (body: SignInFormValues) => {
    toast.promise(handleLogin(body), {
      pending: "Acessando o sistema...",
      success: "Sucesso",
      error: errorMessage,
    });
  };

  return (
    <>
      <ThemeProvider theme={theme == "light" ? themeLight : themeDark}>
        <Background>
          {loading ? (
            <Loading />
          ) : (
            <>
              <ContainerStyled>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <h2>Login</h2>
                  <div>
                    <label htmlFor="email">E-mail</label>
                    <input
                      placeholder="Digite seu e-mail"
                      {...register("email")}
                      id="email"
                    />
                    {errors.email && <span>{errors.email.message}</span>}
                  </div>

                  <div>
                    <label htmlFor="password">Senha</label>
                    <input
                      type="password"
                      placeholder="Digite sua senha"
                      {...register("password")}
                      id="password"
                    />
                    {errors.password && <span>{errors.password.message}</span>}
                  </div>
                  <button type="submit">Entrar</button>
                </form>
              </ContainerStyled>
            </>
          )}
        </Background>
      </ThemeProvider>
    </>
  );
};
