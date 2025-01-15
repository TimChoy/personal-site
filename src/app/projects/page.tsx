import { Box, Grid } from "@mui/material";
import ProjectCard from "@/components/projectCard";
import styles from "./projects.module.css";

export default function Projects() {
  return (
    <div className={styles.main}>
      <Box>
        <Grid
          container
          spacing={{ xs: 2, sm: 4, md: 8 }}
          columns={{ xs: 1, sm: 2, md: 3 }}
        >
          {Array.from(Array(3)).map((_, index) => (
            <Grid item xs={1} sm={1} md={1} key={index}>
              <ProjectCard />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
