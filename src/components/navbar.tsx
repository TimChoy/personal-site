import React from "react"
import { AppBar, Toolbar, Typography } from "@mui/material";

export default function NavBar() {
  return (
    <AppBar 
      style={{
        width: "93.5%",
        top: "2%",
        right: "3.2%",
        border: "2px solid white",
        borderRadius: "30px",
        background: "rgb(0,0,0)",
      }}
    >
      <Toolbar>
        <Typography>
          Tim Choy
        </Typography>
      </Toolbar>
    </AppBar>
  )
}