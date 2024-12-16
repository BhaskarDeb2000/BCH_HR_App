import React from "react";
import { Button } from "@mui/material";

const ButtonComponent = ({
  label,
  color,
  onClick,
  variant = "outlined",
  sx,
}) => {
  return (
    <Button
      variant={variant}
      color={color}
      onClick={onClick}
      sx={{
        ...sx,
        textTransform: "none",
      }}
    >
      {label}
    </Button>
  );
};

export default ButtonComponent;
