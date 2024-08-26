import { useContext, useEffect, useState } from "react";

import { AuthContext } from "@/context/auth-context";
import { useForm } from "@/hooks/useForm";
import { useUser } from "@/hooks/user-hook";
import Button from "@mui/material/Button";
import FormHelperText from "@mui/material/FormHelperText";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

import { type UserProps } from "../../../types";
import { loginFields } from "./formFields";

const validateEmail = (email: string) => {
  return /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email);
};

const LoginForm = () => {
  const auth = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [formState, inputHandler, setFormData] = useForm(loginFields, false);
  const { signupUser, loginUser } = useUser();

  //set form when valid
  useEffect(() => {
    if (formState.isValid) {
      setFormData(
        {
          ...(!isLogin && {
            userName: {
              value: formState?.inputs?.userName?.value,
              isValid: true,
            },
          }),
          email: {
            value: formState?.inputs?.email?.value,
            isValid: true,
          },
          password: {
            value: formState?.inputs?.password?.value,
            isValid: true,
          },
        },
        true
      );
    }
  }, [
    isLogin,
    formState.isValid,
    setFormData,
    formState?.inputs?.userName?.value,
    formState?.inputs?.email?.value,
    formState?.inputs?.password?.value,
  ]);

  //login or signup user
  const handleFormSubmit = async (event: React.FormEvent<HTMLElement>) => {
    const user: UserProps = {
      //add additional field if sign-up
      ...(formState?.inputs?.userName?.value
        ? { userName: formState?.inputs?.userName?.value as string }
        : {}),
      email: formState?.inputs?.email?.value as string,
      password: formState?.inputs?.password?.value as string,
    };

    if (isLogin) {
      signupUser.mutate(user);
      //reset form if successful
      if (signupUser.isSuccess) {
        auth.login(signupUser.data.user, signupUser.data.token);
        setFormData(loginFields, false);
      }
    } else {
      loginUser.mutate(user);
      if (loginUser.isSuccess) {
        auth.login(loginUser.data.user, loginUser.data.token);
        setFormData(loginFields, false);
      }
    }
  };

  //toggle between sign-up and login
  const handleAuthOptions = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <Paper
      sx={{
        padding: 2,
        borderRadius: 2,
        margin: "5rem auto",
        maxWidth: "30vw",
      }}
    >
      <form onSubmit={handleFormSubmit}>
        <Grid container spacing={2} direction="column">
          {/* for new user include userName field */}
          {!isLogin && (
            <Grid item xs={12}>
              <FormHelperText>Choose a UserName</FormHelperText>
              <TextField
                fullWidth
                name="userName"
                id="userName"
                type="text"
                value={formState?.inputs?.userName?.value}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  inputHandler(
                    "userName",
                    event.target.value,
                    event.target.value.length > 0
                  )
                }
              />
            </Grid>
          )}
          <Grid item xs={12}>
            <FormHelperText>Enter Your email</FormHelperText>
            <TextField
              fullWidth
              name="email"
              id="email"
              type="text"
              value={formState?.inputs?.email?.value}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                inputHandler(
                  "email",
                  event.target.value,
                  validateEmail(event.target.value)
                )
              }
            />
          </Grid>
          <Grid item xs={12}>
            <FormHelperText>
              {isLogin ? "Enter Password" : "Choose a safe password"}
            </FormHelperText>
            <TextField
              fullWidth
              name="password"
              id="password"
              type="password"
              value={formState?.inputs?.password?.value}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                inputHandler(
                  "password",
                  event.target.value,
                  event.target.value.length > 0
                )
              }
            />
          </Grid>
        </Grid>
        <Stack alignItems="end">
          <Button
            sx={{ marginTop: "1rem" }}
            variant="contained"
            type="submit"
            disabled={!formState.isValid}
          >
            {isLogin ? "Login" : "Sign Up"}
          </Button>
        </Stack>
      </form>
      <Stack direction="row" spacing={2} sx={{ marginTop: "1rem auto" }}>
        <Button onClick={handleAuthOptions}>
          {isLogin ? "Sign-up" : "Login"}
        </Button>
      </Stack>
    </Paper>
  );
};

export default LoginForm;
