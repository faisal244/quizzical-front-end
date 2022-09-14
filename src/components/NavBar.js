import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useAuth } from "../context/AppProvider";
import HomeIcon from "@mui/icons-material/Home";

export const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  // set state for log out

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const { isLoggedIn, setIsLoggedIn, setUser } = useAuth();

  const navigator = (event) => {
    const path = event.target.dataset.path;
    navigate(path, { replace: true });
  };

  const logOut = () => {
    //clear from localstorage
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    // render the login sign up page
    setIsLoggedIn(false);
    setUser();
    navigate("/");
  };

  const navItems = isLoggedIn
    ? [
        {
          label: <HomeIcon />,
          path: "/",
          onClick: navigator,
        },
        // {
        // 	label: "DashBoard",
        // 	path: "/dashboard",
        // 	onClick: navigator,
        // },
        {
          label: "Log Out",
          path: "/logout",
          onClick: logOut,
        },
      ]
    : [
        {
          label: "Login",
          path: "/login",
          onClick: navigator,
        },
        {
          label: "Sign Up",
          path: "/sign-up",
          onClick: navigator,
        },
      ];
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }} onClick={item.onClick}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", height: "64px" }} component="header">
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "#264653",
          height: "64px",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                sx={{ color: "#fff" }}
                onClick={item.onClick}
                data-path={item.path}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
            },
          }}
          anchor="top"
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};
