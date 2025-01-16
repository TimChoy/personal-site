import { Box, Grid } from "@mui/material";
import ProjectCard from "@/components/projectCard";
import styles from "./projects.module.css";
import { IProjectProps } from "@/common/types";

export default function Projects() {
  // Will be moved to a backend eventually
  const projectList: IProjectProps[] = [
    {
      title: "Personal Website",
      technologies: ["TypeScript", "NextJS", "Vercel"],
      description:
        "My personal website. Written in TypeScript using NextJS and built/deployed using Vercel.",
      github: "https://github.com/TimChoy/personal-site",
    },
    {
      title: "Project Sayyara",
      technologies: ["TypeScript", "NextJS", "MySQL", "Vercel"],
      description:
        "A progressive web application connecting vehicle owners to independent auto repair shops. Offers features which include comparing shops and scheduling appointments for vehicle owners, as well as employee management tools for shop owners. Built as the Capstone project for my software engineering program.",
      github: "https://github.com/TimChoy/project-sayyara",
    },
    {
      title: "Let's Hustle",
      technologies: ["JavaScript", "ReactJS", "AWS EC2", "AWS S3"],
      description:
        "A web application that allows users to search for local gyms, and contribute throuhg adding gyms and reviews.",
      github: "https://github.com/TimChoy/4ww3-Hustle",
    },
  ];

  return (
    <div className={styles.main}>
      <Box>
        <Grid
          container
          spacing={{ xs: 2, sm: 4, md: 8 }}
          columns={{ xs: 1, sm: 2, md: 3 }}
        >
          {projectList.map((project, index) => (
            <Grid item xs={1} sm={1} md={1} key={index}>
              <ProjectCard
                title={project.title}
                technologies={project.technologies}
                description={project.description}
                github={project.github}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
