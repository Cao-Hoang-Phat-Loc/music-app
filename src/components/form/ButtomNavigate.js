import * as React from "react";
import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material";
import PauseIcon from "@mui/icons-material/Pause";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import useMusicPlayer from "../../hooks/usePlayerProvider";

export default function SimpleBottomNavigation() {
  const {
    togglePlay,
    isPlaying,
    playPreviousTrack,
    playNextTrack,
    currentTrackIndex,
  } = useMusicPlayer();

  return (
    <Box sx={{ width: "100%", mt: 2 }}>
      <BottomNavigation
        sx={{
          bgcolor: "#333",
          borderRadius: 2,
          ".MuiBottomNavigationAction-root": {
            color: "#fff",
          },
        }}
        showLabels
      >
        <BottomNavigationAction
          label="Previous"
          icon={<SkipPreviousIcon />}
          onClick={playPreviousTrack}
        />
        <BottomNavigationAction
          label="Pause/Play"
          icon={
            isPlaying && currentTrackIndex !== null ? (
              <PauseIcon />
            ) : (
              <PlayCircleOutlineIcon />
            )
          }
          onClick={togglePlay}
          disabled={currentTrackIndex === null} //  chưa chọn bài
        />
        <BottomNavigationAction
          label="Next"
          icon={<SkipNextIcon />}
          onClick={playNextTrack}
        />
      </BottomNavigation>
    </Box>
  );
}
