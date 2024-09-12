import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import PauseIcon from "@mui/icons-material/Pause";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import useMusicPlayer from "../../hooks/usePlayerProvider";

export default function ZeroWidthStack() {
  const { playTrack, currentTrackIndex, isPlaying, trackList } =
    useMusicPlayer();

  return (
    <Box sx={{ width: "100%" }}>
      <Stack spacing={2}>
        {trackList.map((track, index) => (
          <Box
            key={index}
            onClick={() => playTrack(index)}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              bgcolor: currentTrackIndex === index ? "#333" : "#222",
              color: "#fff",
              borderRadius: 2,
              p: 2,
              cursor: "pointer",
              "&:hover": {
                bgcolor: "#444",
              },
            }}
          >
            <Typography noWrap>{track.name}</Typography>
            {currentTrackIndex === index && isPlaying ? (
              <PauseIcon sx={{ color: "#fff" }} />
            ) : (
              <PlayCircleOutlineIcon sx={{ color: "#fff" }} />
            )}
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
