"use client";
import Typography from "@mui/material/Typography";

type StyledTextProps = {
  children: React.ReactNode;
  variant:
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "caption";
};

const StyledText = ({ children, variant }: StyledTextProps) => {
  return (
    <Typography color="text.secondary" variant={variant}>
      {children}
    </Typography>
  );
};

export default StyledText;
