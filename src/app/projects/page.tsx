import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ProjectCard from "@/components/projectCard";
import styles from "./projects.module.css";
import { IProjectProps } from "@/common/types";
import Background from "@/components/background";

export default function Projects() {
  // Should be moved elsewhere. This is temporary to display on the website
  const projectList: IProjectProps[] = [
    {
      title: "Tim's Games",
      technologies: ["TypeScript", "CSS", "NextJS", "Vercel", "Material UI"],
      description:
        "A website for minor games that I want to design. Written in a similar stack to my personal website.",
      github: "https://github.com/TimChoy/tim-games",
      href: "https://tim-games.vercel.app"
    },
    {
      title: "Personal Website",
      technologies: ["TypeScript", "CSS", "NextJS", "Vercel", "Material UI"],
      description:
        "My personal website. Written in TypeScript using NextJS and built/deployed using Vercel. I plan on regularly improving and adding components to the website to try to learn new things and experiment with UI design.",
      github: "https://github.com/TimChoy/personal-site",
      href: "https://timchoy.vercel.app"
    },
    {
      title: "Project Sayyara",
      technologies: ["TypeScript", "CSS", "MySQL", "NextJS", "Vercel"],
      description:
        "A progressive web application connecting vehicle owners to independent auto repair shops. Offers features which include comparing shops and scheduling appointments for vehicle owners, as well as employee management tools for shop owners. Built as the Capstone project for my software engineering program.",
      github: "https://github.com/TimChoy/project-sayyara",
    },
    {
      title: "Let's Hustle",
      technologies: ["JavaScript", "MySQL", "ReactJS", "AWS EC2", "AWS S3"],
      description:
        "A web application that allows users to search for local gyms, and contribute throuhg adding gyms and reviews. Think of Yelp, but for local gyms.",
      github: "https://github.com/TimChoy/4ww3-Hustle",
    },
  ];

  return (
    <div>
      <div className={styles.main}>
        <Box>
          <Grid
            container
            spacing={{ xs: 2, sm: 4, md: 8 }}
            columns={{ xs: 1, sm: 2, md: 3 }}
          >
            {projectList.map((project, index) => (
              <Grid key={index} size={{ xs: 1, sm: 1, md: 1 }}>
                <ProjectCard
                  title={project.title}
                  technologies={project.technologies}
                  description={project.description}
                  github={project.github}
                  href={project.href}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
      <Background />
    </div>
  );
}
