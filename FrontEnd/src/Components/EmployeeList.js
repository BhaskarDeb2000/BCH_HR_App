import React, { useState, useEffect } from "react";
import EmployeeCard from "./EmployeeCard.js";
import { Box, CircularProgress, Typography } from "@mui/material";
import axios from "axios";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get("http://localhost:5002/employees");
        setEmployees(response.data.employees);
      } catch (error) {
        console.error("Error fetching employees:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  const rolesHierarchy = [
    "Intern",
    "Junior Developer",
    "Developer",
    "Senior Developer",
    "Lead Developer",
  ];

  const promoteEmployee = (id) => {
    setEmployees((prev) =>
      prev.map((emp) =>
        emp.id === id
          ? {
              ...emp,
              role: rolesHierarchy[
                Math.min(
                  rolesHierarchy.indexOf(emp.role) + 1,
                  rolesHierarchy.length - 1
                )
              ],
            }
          : emp
      )
    );
  };

  const demoteEmployee = (id) => {
    setEmployees((prev) =>
      prev.map((emp) =>
        emp.id === id
          ? {
              ...emp,
              role: rolesHierarchy[
                Math.max(rolesHierarchy.indexOf(emp.role) - 1, 0)
              ],
            }
          : emp
      )
    );
  };

  const Loader = () => (
    <Box sx={{ textAlign: "center", marginTop: 4 }}>
      <CircularProgress />
      <Typography variant="body1" sx={{ marginTop: 2 }}>
        Loading employees...
      </Typography>
    </Box>
  );

  const NoEmployees = () => (
    <Box sx={{ textAlign: "center", marginTop: 4 }}>
      <Typography variant="h6">No employees found!</Typography>
    </Box>
  );

  return (
    <Box sx={{ padding: 4 }}>
      {loading ? (
        <Loader />
      ) : employees.length === 0 ? (
        <NoEmployees />
      ) : (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 3,
            justifyItems: "center",
            alignItems: "center",
            marginTop: 3,
          }}
        >
          {employees.map((employee) => (
            <EmployeeCard
              key={employee.id}
              employee={employee}
              onPromote={() => promoteEmployee(employee.id)}
              onDemote={() => demoteEmployee(employee.id)}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default EmployeeList;
