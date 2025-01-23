"use client";

import {
  Card,
  CardContent,
  CardActions,
  Chip,
  Typography,
  Divider,
  IconButton,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import { GitHub, OpenInNew } from "@mui/icons-material";
import styles from "./projectCard.module.css";
import { IProjectProps } from "@/common/types";

const ProjectCard = (props: IProjectProps) => {
  // Colours taken from GitHub's language colours
  // https://github.com/ozh/github-colors
  const mapColourToTech: { [index: string]: string } = {
    CSS: "#663399",
    JavaScript: "#f1e05a",
    MySQL: "#e38c00",
    TypeScript: "#3178c6",
  };

  return (
    <div className={styles.cardContainer}>
      <Card className={styles.cardStyles}>
        <CardContent className={styles.cardContent}>
          <Typography
            variant="h5"
            component="div"
            sx={{ marginBottom: "10px" }}
          >
            {props.title}
          </Typography>
          <Grid container spacing={1}>
            {props.technologies.map((data, index) => (
              <Grid key={index} direction="row">
                <Chip
                  key={index}
                  label={data}
                  variant="outlined"
                  size="small"
                  // Border colour will be based on language, or black otherwise
                  sx={{
                    borderColor: mapColourToTech[data] ?? "black",
                    borderWidth: "2px",
                  }}
                />
              </Grid>
            ))}
          </Grid>
          <Divider sx={{ marginTop: "10px", marginBottom: "5px" }} />
          <Typography variant="body2" component="div">
            {props.description}
          </Typography>
        </CardContent>
        <CardActions sx={{ padding: "16px", justifyContent: "end" }}>
          <IconButton
            aria-label="github"
            disabled={!props.github}
            color="inherit"
            href={props.github ? props.github : ""}
            target="_blank"
            title="Github"
          >
            <GitHub />
          </IconButton>
          <IconButton
            aria-label="project link"
            disabled={!props.href}
            color="inherit"
            href={props.href ? props.href : ""}
            target="_blank"
            title="Project Link"
          >
            <OpenInNew />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default ProjectCard;
