import React from "react";
import { Typography } from "@mui/material";
import useMusicPlayer from "../hooks/usePlayerProvider";

function Header() {
  const { currentTrackName } = useMusicPlayer();
  return (
    <Typography
      variant="h5"
      sx={{
        color: "#fff",
        mb: 3, // Khoảng cách dưới cho header
        textAlign: "center",
      }}
    >
      {currentTrackName || "Choose a track to play"}
    </Typography>
  );
}

export default Header;
