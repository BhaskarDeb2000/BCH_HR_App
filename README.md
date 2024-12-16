# HR-App

This is a small project on a simple HR-App. The app is designed to manage employees, departments, and job roles.

## Week 1 Features

### EmployeeCard Component:
Each employee is displayed in an EmployeeCard, which includes their name, role, and start date.

### EmployeeList Component:
The EmployeeList component renders multiple EmployeeCard components by passing employee details as props.
Promotion/Demotion Functionality:

Buttons are added to each employee card that allow users to promote or demote the employee's role within a predefined hierarchy of roles (Intern, Junior Developer, Developer, Senior Developer, Lead Developer).

### State Management:
React state is used to manage and update employee roles in the app.

## Week 2 Features

This document outlines the steps and features implemented in the app for Week 2:

## Features Implemented

### 1. **Create an Array of Employees**

- An array of employee objects was created with the following details:
  - `name`: Full name of the employee
  - `role`: Job role
  - `startDate`: Date when the employee started

### 2. **Display Employee List**

- The `employees` array is rendered in the app as a list of cards showing employee details.
- Each card displays:
  - Name
  - Role
  - Start Date
  - Years Worked (calculated dynamically)

### 3. **Log In Button**

- Added a "Log In" button to toggle between two views:
  - Employee list (default view when logged in).
  - A login message when the user is logged out.
- The app maintains a simple `isLoggedIn` state to manage the toggle.

### 4. **Display Years Worked**

- Calculated years worked for each employee using the `startDate`.
- Displayed the years worked dynamically using JavaScript's `Date` object.

### 5. **Anniversary and Probation Reminders**

- Added reminders for employee anniversaries and probation reviews:
  - If the current date matches the month and day of the `startDate`, show a "Happy Anniversary!" message.
  - For new hires (employees with less than 1 year of experience), display a probation reminder.