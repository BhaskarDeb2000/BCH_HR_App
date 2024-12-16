import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  TextField,
  MenuItem,
} from "@mui/material";
import ButtonComponent from "./Elements/Button.js";

const EmployeeCard = ({ employee, onPromote, onDemote, onUpdate }) => {
  const { id, name, role, startDate, department } = employee;
  const avatarUrl = `https://api.multiavatar.com/${name}.svg`;

  const [isEditing, setIsEditing] = useState(false);
  const [updatedRole, setUpdatedRole] = useState(role);
  const [updatedDepartment, setUpdatedDepartment] = useState(department || "");
  const [updatedLocation, setUpdatedLocation] = useState(
    employee.location || ""
  );

  const handleSave = () => {
    onUpdate(id, {
      role: updatedRole,
      department: updatedDepartment,
      location: updatedLocation,
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setUpdatedRole(role);
    setUpdatedDepartment(department || "");
    setUpdatedLocation(employee.location || "");
    setIsEditing(false);
  };

  const departmentColor = {
    HR: "#f0e68c",
    Engineering: "#add8e6",
    Marketing: "#ffb6c1",
    Sales: "#d3ffce",
    Default: "#ffffff",
  };

  return (
    <Card
      sx={{
        width: "30vh",
        boxShadow: 3,
        padding: 3,
        borderRadius: 2,
        backgroundColor: departmentColor[department] || departmentColor.Default,
        transition: "transform 0.3s ease",
        "&:hover": { transform: "scale(1.05)" },
      }}
    >
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
          <Avatar
            src={avatarUrl}
            alt={name}
            sx={{ width: 56, height: 56, marginRight: 2 }}
          />
          <Typography variant="h6">{name}</Typography>
        </Box>
        {isEditing ? (
          <>
            <TextField
              label="Role"
              value={updatedRole}
              onChange={(e) => setUpdatedRole(e.target.value)}
              select
              fullWidth
              sx={{ marginBottom: 2 }}
            >
              <MenuItem value="Intern">Intern</MenuItem>
              <MenuItem value="Junior Developer">Junior Developer</MenuItem>
              <MenuItem value="Developer">Developer</MenuItem>
              <MenuItem value="Senior Developer">Senior Developer</MenuItem>
              <MenuItem value="Lead Developer">Lead Developer</MenuItem>
            </TextField>
            <TextField
              label="Department"
              value={updatedDepartment}
              onChange={(e) => setUpdatedDepartment(e.target.value)}
              fullWidth
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Location"
              value={updatedLocation}
              onChange={(e) => setUpdatedLocation(e.target.value)}
              fullWidth
              sx={{ marginBottom: 2 }}
            />
          </>
        ) : (
          <>
            <Typography variant="subtitle1" color="text.secondary">
              Role: {role}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Department: {department || "N/A"}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Location: {employee.location || "N/A"}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Start Date: {startDate}
            </Typography>
          </>
        )}
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {isEditing ? (
            <>
              <ButtonComponent
                label="Save"
                color="success"
                onClick={handleSave}
              />
              <ButtonComponent
                label="Cancel"
                color="error"
                onClick={handleCancel}
              />
            </>
          ) : (
            <>
              <ButtonComponent
                label="Promote"
                color="success"
                onClick={onPromote}
              />
              <ButtonComponent
                label="Demote"
                color="error"
                onClick={onDemote}
              />
              <ButtonComponent
                label="Edit"
                color="primary"
                onClick={() => setIsEditing(true)}
              />
            </>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default EmployeeCard;
