import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5002;
app.use(cors());

const employees = [
  {
    id: 1,
    name: "John Doe",
    role: "Junior Developer",
    startDate: "2023-01-15",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Product Manager",
    startDate: "2022-08-01",
  },
  { id: 3, name: "Sam Wilson", role: "UX Designer", startDate: "2021-12-10" },
  { id: 4, name: "Emma Brown", role: "HR Specialist", startDate: "2020-05-20" },
  {
    id: 5,
    name: "Mike Johnson",
    role: "DevOps Engineer",
    startDate: "2023-03-12",
  },
  {
    id: 6,
    name: "Sophia Davis",
    role: "Marketing Manager",
    startDate: "2022-04-17",
  },
  { id: 7, name: "Liam Martinez", role: "QA Tester", startDate: "2021-09-15" },
  {
    id: 8,
    name: "Olivia Garcia",
    role: "Frontend Developer",
    startDate: "2023-06-08",
  },
  {
    id: 9,
    name: "William Lopez",
    role: "Backend Developer",
    startDate: "2020-11-22",
  },
  {
    id: 10,
    name: "Isabella Rodriguez",
    role: "Content Strategist",
    startDate: "2021-03-01",
  },
  {
    id: 11,
    name: "Ethan Clark",
    role: "Data Analyst",
    startDate: "2022-12-10",
  },
  {
    id: 12,
    name: "Mia Lewis",
    role: "Graphic Designer",
    startDate: "2019-08-05",
  },
  {
    id: 13,
    name: "Noah Young",
    role: "SEO Specialist",
    startDate: "2023-07-14",
  },
  {
    id: 14,
    name: "Ava King",
    role: "Customer Success Manager",
    startDate: "2020-06-25",
  },
  {
    id: 15,
    name: "James Wright",
    role: "Business Analyst",
    startDate: "2021-10-18",
  },
  {
    id: 16,
    name: "Charlotte Hill",
    role: "Social Media Manager",
    startDate: "2023-04-22",
  },
  {
    id: 17,
    name: "Lucas Green",
    role: "Full Stack Developer",
    startDate: "2019-07-11",
  },
  { id: 18, name: "Amelia Adams", role: "Recruiter", startDate: "2020-03-30" },
  {
    id: 19,
    name: "Mason Scott",
    role: "IT Support Specialist",
    startDate: "2021-01-19",
  },
  {
    id: 20,
    name: "Harper Baker",
    role: "Operations Manager",
    startDate: "2022-02-14",
  },
  {
    id: 21,
    name: "Elijah Carter",
    role: "Cloud Engineer",
    startDate: "2023-08-01",
  },
  { id: 22, name: "Emily Torres", role: "Tech Lead", startDate: "2018-11-28" },
  {
    id: 23,
    name: "Logan Perez",
    role: "Solution Architect",
    startDate: "2022-09-03",
  },
  {
    id: 24,
    name: "Abigail Turner",
    role: "Scrum Master",
    startDate: "2023-02-27",
  },
  {
    id: 25,
    name: "Benjamin White",
    role: "Database Administrator",
    startDate: "2021-05-09",
  },
  { id: 26, name: "Ella Hall", role: "Copywriter", startDate: "2019-03-16" },
  {
    id: 27,
    name: "Sebastian Allen",
    role: "Mobile App Developer",
    startDate: "2020-10-05",
  },
  {
    id: 28,
    name: "Scarlett Hernandez",
    role: "Legal Advisor",
    startDate: "2021-07-21",
  },
  {
    id: 29,
    name: "Alexander Walker",
    role: "AI Specialist",
    startDate: "2023-05-13",
  },
  {
    id: 30,
    name: "Victoria Rivera",
    role: "Sales Executive",
    startDate: "2022-11-09",
  },
];

app.get("/employees", (req, res) => {
  try {
    res.json({ employees });
  } catch (error) {
    console.error("Error fetching employees:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.use((req, res) => {
  res.status(404).send("Not Found");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
