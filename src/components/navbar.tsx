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
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const router = useRouter();
  const toggleDrawer = (toggle: boolean) => () => {
    setOpenDrawer(toggle);
  };

  const routeNames = ["Home", "About Me", "My Projects"];
  const routes = ["/", "about", "projects"];

  const handleDrawerClick = (index: number) => {
    toggleDrawer(false);
    console.log(index);
    router.push(routes[index]);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {routeNames.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => handleDrawerClick(index)}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const NavbarList = (
    <Tabs centered sx={{ margin: "auto" }} value={false}>
      {routeNames.map((text, index) => (
        <Tab
          key={text}
          value={text}
          label={
            <Link href={routes[index]} className={styles.linkTabs}>
              {text}
            </Link>
          }
          className={`animate__animated animate__zoomIn ${styles.navTabs}`}
        />
      ))}
    </Tabs>
  );

  return (
    <div>
      <AppBar
        style={{
          borderBottom: "2px solid white",
          background: "rgb(0,0,0)",
        }}
        position="sticky"
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ display: { xs: "flex", md: "none" } }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            {/* Drawer for mobile view */}
            <Drawer
              open={openDrawer}
              onClose={toggleDrawer(false)}
              PaperProps={{
                style: { background: "black", color: "white" },
              }}
            >
              {DrawerList}
            </Drawer>

            {/* Regular navbar */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <>
                {NavbarList}
              </>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
