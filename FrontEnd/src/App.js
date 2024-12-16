import React from "react";
import EmployeeList from "./Components/EmployeeList.js";
import { CssBaseline, Container, Typography } from "@mui/material";

function App() {
  return (
    <Container maxWidth="md" sx={{ paddingTop: 4 }}>
      <CssBaseline />
      <Typography variant="h3" align="center" gutterBottom>
        Employee Management
      </Typography>
      <EmployeeList />
    </Container>
  );
}

export default App;
