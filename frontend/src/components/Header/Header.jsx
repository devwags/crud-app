import { AppBar, Box, Button, Link } from "@mui/material";
import { AccountCircle, Home } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import LoginModal from "../LoginModal/LoginModal";

const Header = () => {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const navigate = useNavigate();
    const {isLoggedIn} = useAuth();

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
              <Button onClick={() => setShowLoginModal(true)} color="inherit" sx={{fontWeight:"bold"}}>
                Login
              </Button>
            )}
            <Home onClick={() => navigate("/")} sx={{ marginRight: "auto", pl: "1em", cursor:"pointer" }}/>
          </Box>
        </AppBar>
        <LoginModal show={showLoginModal} close={() => setShowLoginModal(false)}/>
    </>
  );
};

export default Header;
