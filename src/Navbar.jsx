import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, Outlet } from "react-router-dom";

export function NavBar() {
  const navArray = [
    { url: "/", name: "Homepage" },
    { url: "/countries", name: "Countries" },
  ];

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <div style={{ display: "flex", flexDirection: "row", gap: 40 }}>
                {navArray.map((navItem, index) => {
                  return (
                    <Link
                      to={navItem.url}
                      style={{ textDecoration: "none", color: "white" }}
                      key={index}
                    >
                      {navItem.name}
                    </Link>
                  );
                })}
              </div>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
    </>
  );
}
