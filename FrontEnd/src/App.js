import React, { useState } from "react";
import EmployeeList from "./Components/EmployeeList.js";
import {
  CssBaseline,
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Paper,
  Alert,
} from "@mui/material";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (username === "test" && password === "test1") {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Invalid username or password.");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  return (
    <div
      style={{
        background: "linear-gradient(45deg, #ff8e53, #ff2e63)",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="sm">
        <CssBaseline />
        <Typography
          variant="h3"
          align="center"
          color="white"
          gutterBottom
          sx={{ marginBottom: 4 }}
        >
          Employee Management
        </Typography>

        {!isLoggedIn ? (
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Paper
              elevation={8}
              sx={{ padding: 4, borderRadius: 4, background: "#ffffffa0" }}
            >
              <Typography
                variant="h5"
                align="center"
                sx={{ marginBottom: 2, color: "#333" }}
              >
                Log In
              </Typography>
              <TextField
                label="Username"
                variant="outlined"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                fullWidth
                sx={{ marginBottom: 2 }}
              />
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                sx={{ marginBottom: 2 }}
              />
              {error && (
                <Alert severity="error" sx={{ marginBottom: 2 }}>
                  {error}
                </Alert>
              )}
              <Button
                variant="contained"
                onClick={handleLogin}
                fullWidth
                sx={{
                  backgroundColor: "#FF5E57",
                  "&:hover": { backgroundColor: "#FF3D39" },
                }}
              >
                Log In
              </Button>
            </Paper>
          </Box>
        ) : (
          <div>
            <EmployeeList />
            <Box sx={{ textAlign: "center", marginTop: 4 }}>
              <Button
                variant="outlined"
                onClick={handleLogout}
                sx={{
                  borderColor: "#FF3D39",
                  color: "#FF3D39",
                  "&:hover": {
                    borderColor: "#FF1C1C",
                    color: "#FF1C1C",
                  },
                }}
              >
                Log Out
              </Button>
            </Box>
          </div>
        )}
      </Container>
    </div>
  );
}

export default App;
