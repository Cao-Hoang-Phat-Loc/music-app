import { Box, Paper } from "@mui/material";
import Controller from "./components/Controller";
import Header from "./components/Header";
import TrackList from "./components/TrackList";
import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";

const App = () => {
  return (
    <MusicPlayerProvider>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          bgcolor: "white",
        }}
      >
        <Paper
          elevation={10}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            width: "90%",
            maxWidth: "500px",
            bgcolor: "#1e1e1e",
            borderRadius: 3,
            p: 3,
          }}
        >
          <Header />
          <TrackList />
          <Controller />
        </Paper>
      </Box>
    </MusicPlayerProvider>
  );
};

export default App;
