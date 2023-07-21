import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { ButtonGroup, Grid } from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import LockIcon from "@mui/icons-material/Lock";
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FunctionsIcon from '@mui/icons-material/Functions';


import logo from "../assets/dfcc-bank-logo.svg";


const pages = ["About Us", "Careers", "Sustainability", "Media"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function SearchAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#FFFFFF", height: "4em" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 ,color:'black'}} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              // color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography> */}

          <img src={logo} width={"14%"} />

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              // color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, ml: "3em" }}
          >
            {pages.map((page, index) => (
              <Button
                key={index}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="English">
              <IconButton  sx={{ p: 0 }}>
                <FunctionsIcon/>
              </IconButton>
            </Tooltip>
          </Box>
          <Box sx={{ flexGrow: 0, mr: 1, ml: 1 }}>
            <Tooltip title="Sinhala">
              <IconButton  sx={{ p: 0 }}>
                <FormatColorTextIcon/>
              </IconButton>
            </Tooltip>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Tamil">
              <IconButton  sx={{ p: 0 }}>
                <FormatBoldIcon/>
              </IconButton>
            </Tooltip>
          </Box>
          <Box sx={{ flexGrow: 0, ml: 2 }}>
              <Button
                sx={{
                  backgroundColor: "grey",
                  color:'white',
                  height: "4em",
                  width: "8em",
                  borderRadius:0,
                  p: 2,
                  "&:hover": {
                    backgroundColor: "grey",
                  },
                }}
                startIcon={<LocationOnIcon />}
              >
                Locate Us
              </Button>
              <Button
                sx={{
                  backgroundColor: "grey",
                  color:'white',
                  height: "4em",
                  width: "8em",
                  borderRadius:0,
                  p: 2,
                  "&:hover": {
                    backgroundColor: "grey",
                  },
                }}
                startIcon={<CallIcon />}
              >
                Contact Us
              </Button>
              <Button
                sx={{
                  backgroundColor: "red",
                  color:'white',
                  height: "4em",
                  width: "8em",
                  borderRadius:0,
                  p: 2,
                  "&:hover": {
                    backgroundColor: "red"
                  },
                }}
                startIcon={<LockIcon />}
              >
                Login
              </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default SearchAppBar;
