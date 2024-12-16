import React, { useState, useEffect } from "react";
import EmployeeCard from "./EmployeeCard.js";
import { Box } from "@mui/material";
import axios from "axios";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get("http://localhost:5002/employees");
        setEmployees(response.data.employees);
      } catch (error) {
        console.error("Error fetching employees:", error);
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

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 2,
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
  );
};

export default EmployeeList;
