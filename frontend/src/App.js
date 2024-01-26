import { AppBar, Box, IconButton } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import "./App.css";

const loggedIn = false;

function App() {
  return (
    <AppBar position="static" sx={{ flexgrow: 1, height: "3em" }}>
      <Box display="flex" flexDirection="row-reverse" sx={{ height: "100%" }}>
        {loggedIn ? (
          <AccountCircle sx={{ height: "100%", pr: 1 }} />
        ) : (
          <IconButton color="inherit">Login</IconButton>
        )}
      </Box>
    </AppBar>
  );
}

export default App;
