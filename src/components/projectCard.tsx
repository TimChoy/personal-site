"use client";

import {
  Card,
  CardContent,
  CardActions,
  Chip,
  Typography,
  Divider,
  Stack,
  IconButton,
} from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import styles from "./projectCard.module.css";
import { IProjectProps } from "@/common/types";

const ProjectCard = (props: IProjectProps) => {
  return (
    <div className={styles.cardContainer}>
      <Card>
        <CardContent className={styles.cardContent}>
          <Typography
            variant="h5"
            component="div"
            sx={{ marginBottom: "10px" }}
          >
            {props.title}
          </Typography>
          <Stack direction="row" spacing={1}>
            {props.technologies.map((data, index) => (
              <Chip key={index} label={data} />
            ))}
          </Stack>
          <Divider sx={{ marginTop: "10px", marginBottom: "5px" }} />
          <Typography variant="body2" component="div">
            {props.description}
          </Typography>
          <CardActions disableSpacing>
            <a href={props.github} target="_blank">
              <GitHubIcon />
            </a>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectCard;
