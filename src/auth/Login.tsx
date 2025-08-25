import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import {
  Box,
  Container,
} from "@mui/material";
import { showLoginButton } from "../services/dr-lib";

export function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const [buttonFlag] = useState<boolean>(false);

  useEffect(() => {
    const setupButton = () => {
      showLoginButton('login-button', (state) => {
        if (state === 'loggedIN') {
          const from = location.state?.from?.pathname || '/dashboard';
          navigate(from, { replace: true });
        }
      });
    };
    setupButton();
  }, [navigate, location, buttonFlag]);

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      ><div id="login-button"/></Box>
    </Container>
  );
}
