import React from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";

const EmployeeCard = ({ employee, onPromote, onDemote }) => {
  return (
    <Card
      sx={{
        width: 300,
        boxShadow: 2,
        padding: 2,
        borderRadius: 2,
      }}
    >
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {employee.name}
        </Typography>
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
  );
};

export default EmployeeCard;
