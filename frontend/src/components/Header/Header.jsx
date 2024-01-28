import { AppBar, Box, Link } from "@mui/material";
import { AccountCircle, Home } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const loggedIn = false;

const Header = () => {
    const navigate = useNavigate();

    return (
    <AppBar position="static" sx={{ flexgrow: 1, height: "3em" }}>
      <Box
        display="flex"
        flexDirection="row-reverse"
        alignItems="center"
        gap="2em"
        sx={{ height: "100%" }}
      >
        {loggedIn ? (
          <>
            <AccountCircle sx={{ height: "100%", pr: "1em" }} />
            <Link
              href="#"
              fontWeight="bold"
              underline="hover"
              color="inherit"
              variant="body1"
            >
              My Inventory
            </Link>
          </>
        ) : (
          <Link
            href="#"
            fontWeight="bold"
            underline="hover"
            color="inherit"
            variant="body1"
            pr="1em"
          >
            Login
          </Link>
        )}
        <Home onClick={() => navigate("/")} sx={{ marginRight: "auto", pl: "1em", cursor:"pointer" }}/>
      </Box>
    </AppBar>
  );
};

export default Header;
