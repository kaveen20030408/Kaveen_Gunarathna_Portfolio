import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "clothe-haven",
    title: "Clothe Haven",
    description:
      "A full-stack e-commerce platform built with Java, Spring Boot, and React. Features a scalable REST API, JWT-based authentication, and a relational MySQL database for persistent data storage.",
    bullets: [
      "Designed and implemented a scalable REST API backend using Java, Spring Boot, and OOP principles following a Controller-Service-Repository architecture.",
      "Integrated a Relational Database (MySQL) for persistent data storage and implemented JWT-based authentication for secure access control.",
      "Applied Git-based version control throughout the Software Development Lifecycle.",
    ],
    stack: ["Java", "Spring Boot", "React", "MySQL", "REST API", "JWT"],
    year: "2026",
    github: "https://github.com/kaveen20030408/Cloth-Haven",
    image: "/images/clothe-haven.jpg",
  },
  {
    slug: "http-testdsl",
    title: "HTTP-TestDSL — Declarative API Testing Compiler",
    description:
      "A domain-specific language and compiler pipeline (tokenization, parsing, AST construction, semantic validation, runtime execution) built to automate Unit Testing and Integration Testing for backend REST APIs.",
    bullets: [
      "Built a full compiler pipeline — tokenization (JFlex), parsing (CUP), AST construction, semantic validation, and runtime execution — targeting live REST API testing.",
      "Reduced boilerplate test code by validating live HTTP responses using JUnit 5 and Java HttpClient.",
    ],
    stack: ["Java", "JFlex", "CUP", "JUnit 5", "Java HttpClient", "Spring Boot", "Maven"],
    year: "2025",
    github: "https://github.com/kaveen20030408/",
    image: "/images/http-testdsl.jpg",
  },
  {
    slug: "taskflow-testing",
    title: "TaskFlow — Spring Boot Backend Testing",
    description:
      "Authored 36 Unit Testing and Integration Testing cases across 7 test files for a Spring Boot backend, validating HTTP response contracts, JWT authentication, input validation, and global exception handling.",
    bullets: [
      "Authored 36 Unit and Integration test cases across 7 test files using JUnit 5, MockMvc, and Spring Boot Test.",
      "Validated HTTP response contracts, JWT authentication flows, input validation rules, and global exception handling for a production-grade REST API.",
    ],
    stack: ["JUnit 5", "MockMvc", "Spring Boot Test", "Maven"],
    year: "2026",
    github: "https://github.com/kaveen20030408/TaskFlow",
    image: "/images/taskflow.jpg",
  },
  {
    slug: "fluxion",
    title: "Fluxion — Enterprise Asset & Maintenance Management System",
    description:
      "A full-stack enterprise platform for asset and maintenance management, built with Clean Architecture principles and deployed to Azure App Service via GitHub Actions CI/CD.",
    bullets: [
      "Designed and built a full-stack solution spanning database schema design, backend architecture, and REST API implementation using Clean Architecture principles.",
      "Implemented CI/CD pipelines with GitHub Actions and deployed to Azure App Service, applying DevOps practices across development, QA, and deployment.",
      "Collaborated across Admin, Manager, and Technician role-based workflows in a cross-functional team environment.",
    ],
    stack: ["React", ".NET Web API", "C#", "MySQL", "Entity Framework Core", "JWT", "Docker", "Azure App Service", "GitHub Actions"],
    year: "2026",
    github: "https://github.com/kaveen20030408/Fluxion",
    video: "/images/FinalDemo_eaeooy.mp4",
  },
  {
    slug: "portfolio-showcase",
    title: "Portfolio Showcase",
    description:
      "A clean personal site to present projects, skills, and contact details.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    year: "2026",
  },
];

export const featuredProject = projects[0];
