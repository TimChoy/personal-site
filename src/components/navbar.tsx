'use client'

import React, { useState } from "react"
import { AppBar, Toolbar, Box, Container, Tabs, Tab } from "@mui/material";
import styles from "./navbar.module.css";
import Link from "next/link";

export default function NavBar() {
  const [selectedTab, setSelectedTab] = useState("one");

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
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }}}>
              <>
                <Tabs centered sx={{ margin: "auto" }} value={selectedTab}>
                  <Tab
                    value="one"
                    label={
                      <Link
                        href="/"
                        className={styles.linkTabs}
                      >
                        <p>
                          Home
                        </p>
                      </Link>
                    }
                    className={`Tab1 animate__animated animate__zoomIn ${styles.navTabs}`}
                  />

                  <Tab 
                    value="two"
                    label={
                      <Link href="/about" className={styles.linkTabs}>
                        <p>
                          About Me
                        </p>
                      </Link>
                    }
                    className={`Tab2 animate__animated animate__zoomIn ${styles.navTabs}`}
                  />
                  
                  <Tab
                    value="three"
                    label={
                      <Link href="/projects" className={styles.linkTabs}>
                        <p>
                          My Projects
                        </p>
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
  )
}
