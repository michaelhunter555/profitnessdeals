"use client";
import Link from "next/link";

import LoginForm from "@/components/AuthForms/LoginForm";
import { Content, PageContainer } from "@/components/Footer/FooterStyles";
import { Link as RouterLink } from "@mui/material";
import Stack from "@mui/material/Stack";

export default function AuthPage() {
  return (
    <PageContainer minHeight="100vh">
      <Content>
        <LoginForm />
        <Stack alignItems="center">
          <RouterLink
            component={Link}
            href="/forgot-password"
            sx={{
              cursor: "pointer",
            }}
          >
            Forgot Your Password?
          </RouterLink>
        </Stack>
      </Content>
    </PageContainer>
  );
}
