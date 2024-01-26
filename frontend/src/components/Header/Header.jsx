import { AppBar, Box, Link } from "@mui/material";
import { AccountCircle, Home } from "@mui/icons-material";

const loggedIn = true;

const Header = () => {

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
        <Home sx={{ marginRight: "auto", pl: "1em" }} />
      </Box>
    </AppBar>
  );
};

export default Header;
