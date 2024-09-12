import React from "react";
import ZeroWidthStack from "./form/Stack";
import { Box, Typography } from "@mui/material";

const TrackList = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        variant="h6"
        sx={{
          color: "#fff",
          mb: 2,
          textAlign: "center",
        }}
      >
        Track List
      </Typography>
      <ZeroWidthStack />
    </Box>
  );
};

export default TrackList;
