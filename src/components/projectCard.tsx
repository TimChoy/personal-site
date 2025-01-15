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

export default function ProjectCard() {
  return (
    <div className={styles.cardContainer}>
      <Card>
        <CardContent className={styles.cardContent}>
          <Typography variant="h5" component="div" sx={{ marginBottom: "10px" }}>
            Project Name
          </Typography>
          <Stack direction="row" spacing={1}>
            <Chip label="JavaScript" />
            <Chip label="Java" />
            <Chip label="C++" />
          </Stack>
          <Divider sx={{ marginTop: "10px", marginBottom: "5px" }} />
          <Typography variant="body2" component="div">
            Project Description: Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Mollitia culpa pariatur vel minus eaque veniam
            nostrum rem rerum repellendus ipsa? Quae placeat modi, molestiae
            architecto dicta est. Natus, error cupiditate?
          </Typography>
          <CardActions disableSpacing>
            <IconButton aria-label="Github">
              <GitHubIcon />
            </IconButton>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  );
}
