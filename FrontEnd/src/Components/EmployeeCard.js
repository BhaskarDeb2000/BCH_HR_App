import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Avatar,
} from "@mui/material";

const EmployeeCard = ({ employee, onPromote, onDemote }) => {
  const avatarUrl = `https://api.multiavatar.com/${employee.name}.svg`;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          width: "30vh",
          boxShadow: 3,
          padding: 3,
          borderRadius: 2,
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      >
        <CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginBottom: 2,
            }}
          >
            <Avatar
              src={avatarUrl}
              alt={employee.name}
              sx={{ width: 56, height: 56, marginRight: 2 }}
            />
            <Typography variant="h6">{employee.name}</Typography>
          </Box>
          <Typography variant="subtitle1" color="text.secondary">
            Role: {employee.role}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Start Date: {employee.startDate}
          </Typography>
          <Box
            sx={{
              marginTop: 2,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button variant="outlined" color="success" onClick={onPromote}>
              Promote
            </Button>
            <Button variant="outlined" color="error" onClick={onDemote}>
              Demote
            </Button>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmployeeCard;
