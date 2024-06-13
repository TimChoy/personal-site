import React from "react"
import { AppBar, Toolbar, Typography, Box, Container, Avatar, Tabs, Tab } from "@mui/material";
import styles from "./navbar.module.css";

export default function NavBar() {
  return (
    <AppBar 
      // className={styles.navbar1}
      style={{
        width: "93.5%",
        top: "2%",
        right: "3.2%",
        border: "2px solid white",
        borderRadius: "30px",
        background: "rgb(0,0,0)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
            className="cursorp"
          >
            <Avatar
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
              className="cursorp Tab8 animate__animated animate__backInLeft"
            >
              TC
            </Avatar>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <>
              <Tabs centered sx={{ margin: "auto" }}>
                <Tab
                  value="one"
                  label={
                    <p>
                      Home
                    </p>
                  }
                  className={`Tab1 animate__animated animate__zoomIn ${styles.navTabs}`}
                />

                <Tab 
                  label={
                    <p>
                      About Me
                    </p>
                  }
                  className={`Tab2 animate__animated animate__zoomIn ${styles.navTabs}`}
                />
                
                <Tab 
                  label={
                    <p>
                      My Projects
                    </p>
                  }
                  className={`Tab3 animate__animated animate__zoomIn ${styles.navTabs}`}
                />
              </Tabs>
            </>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}