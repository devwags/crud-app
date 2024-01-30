import { AppBar, Box, Button, IconButton, Menu, MenuItem } from "@mui/material";
import { AccountCircle, Home } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import LoginModal from "../LoginModal/LoginModal";

const Header = () => {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();
    const {isLoggedIn, authUser, setIsLoggedIn, setAuthUser} = useAuth();

    const logout = () => {
      setAuthUser(null);
      setIsLoggedIn(false);
      navigate("/");
    }

    const handleMenuClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <>
        <AppBar position="static" sx={{ flexgrow: 1, height: "3em" }}>
          <Box
            display="flex"
            flexDirection="row-reverse"
            alignItems="center"
            gap="2em"
            sx={{ height: "100%" }}
          >
            {isLoggedIn ? (
              <>
                <IconButton color="inherit" onClick={handleMenuClick} sx={{ height: "100%", mr: "1em" }} >
                  <AccountCircle />
                </IconButton>
                <Menu id="account-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
                  <MenuItem onClick={logout}>Logout</MenuItem>
                </Menu>
                <Button onClick={() => navigate(`/user/${authUser?.id}/items`)} color="inherit" sx={{fontWeight:"bold"}}>
                  My Inventory
                </Button>
              </>
            ) : (
              <Button onClick={() => setShowLoginModal(true)} color="inherit" sx={{fontWeight:"bold"}}>
                Login
              </Button>
            )}
            <IconButton color="inherit" onClick={() => navigate("/")} sx={{ mr: "auto", ml: "1em", cursor:"pointer" }}>
              <Home />
            </IconButton>
          </Box>
        </AppBar>
        <LoginModal show={showLoginModal} close={() => setShowLoginModal(false)}/>
    </>
  );
};

export default Header;
