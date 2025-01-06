"use client";

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Container,
  Tabs,
  Tab,
  IconButton,
} from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const [selectedTab, setSelectedTab] = useState("one");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const router = useRouter();

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (path: string | null) => {
    setAnchorEl(null);
    if (path) {
      router.push(path);
    }
  };

  return (
    <React.Fragment>
      <AppBar
        style={{
          width: "75%",
          top: "2%",
          right: "12.5%",
          border: "2px solid white",
          borderRadius: "30px",
          background: "rgb(0,0,0)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ display: { xs: "flex", md: "none" } }}
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="dropdown-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={() => handleClose(null)}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              slotProps={{
                paper: {
                  style: {
                    background: "black",
                    color: "white",
                    minWidth: "50%",
                  },
                },
              }}
            >
              <MenuItem onClick={() => handleClose("/")}>Home</MenuItem>
              <MenuItem onClick={() => handleClose("/about")}>About Me</MenuItem>
              <MenuItem onClick={() => handleClose("/projects")}>My Projects</MenuItem>
            </Menu>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <>
                <Tabs centered sx={{ margin: "auto" }} value={selectedTab}>
                  <Tab
                    value="one"
                    label={
                      <Link href="/" className={styles.linkTabs}>
                        <p>Home</p>
                      </Link>
                    }
                    className={`Tab1 animate__animated animate__zoomIn ${styles.navTabs}`}
                  />

                  <Tab
                    value="two"
                    label={
                      <Link href="/about" className={styles.linkTabs}>
                        <p>About Me</p>
                      </Link>
                    }
                    className={`Tab2 animate__animated animate__zoomIn ${styles.navTabs}`}
                  />

                  <Tab
                    value="three"
                    label={
                      <Link href="/projects" className={styles.linkTabs}>
                        <p>My Projects</p>
                      </Link>
                    }
                    className={`Tab3 animate__animated animate__zoomIn ${styles.navTabs}`}
                  />
                </Tabs>
              </>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </React.Fragment>
  );
}
