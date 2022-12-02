import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import SearchIcon from "@mui/icons-material/Search";
import { Button, MenuItem, Tooltip } from "@mui/material";
import { useAuth } from "../../Contexts/AuthContextProvider";
import { Link, useNavigate } from "react-router-dom";
import { ADD } from "../../helpers/consts";
// import { useAuth } from "../Contexts/AuthContextProvider";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Navbar() {
  const {
    user: { email },
    handleLogout,
  } = useAuth();

  const navigate = useNavigate();
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <AppBar position="static" sx={{ backgroundColor: "white" }}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              width: "10%",
            }}
          >
            <Button onClick={() => navigate("/")}>
              <img
                width="90%"
                padding="0"
                margin="0 auto"
                height="25px"
                src="https://cdn.shopify.com/s/files/1/2529/3968/files/logo_600x_e9ef1201-0e6b-4ae3-83e8-51acaa780310.png?v=1660442090&width=500"
              />
            </Button>
          </Typography>
          <Box
            sx={{
              width: "40%",
              margin: "0 auto",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button
              onClick={() => navigate("/addproduct")}
              sx={{ color: "black" }}
            >
              ADD
            </Button>
            <Button onClick={() => navigate("/")} sx={{ color: "black" }}>
              HOME
            </Button>
            <Button
              onClick={() => navigate("/products")}
              sx={{ color: "black" }}
            >
              PRODUCTS
            </Button>
            <Button sx={{ color: "black" }}>ABOUT US</Button>
            <Button sx={{ color: "black" }}>CONTACT US</Button>
          </Box>
          <Box sx={{ width: "20%", display: "flex", justifyContent: "end" }}>
            <Search sx={{ margin: "5px", color: "black" }}>
              <SearchIconWrapper>
                <SearchIcon sx={{ color: "black" }} />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                sx={{
                  border: "2px solid black",
                  borderRadius: "20px",
                  height: "40px",
                }}
              />
            </Search>
          </Box>
          {email === ADD} ? (
          <Button
            onClick={() => navigate("/admin")}
            sx={{ textAlign: "center" }}
            color="inherit"
          >
            admin
          </Button>
          ) : (<></>)
          <Box sx={{ flexGrow: 0 }}>
            {email ? (
              <MenuItem onClick={handleLogout}>
                <Typography sx={{ textAlign: "center", color: "black" }}>
                  Logout
                </Typography>
                <AccountCircleIcon
                  sx={{ p: 0, width: "40px", color: "black" }}
                />
              </MenuItem>
            ) : (
              <Link
                to="/auth"
                style={{
                  textDecoration: "none ",
                  color: "black",
                }}
              >
                <MenuItem onClick={handleLogout}>
                  <Typography sx={{ textAlign: "center", color: "black" }}>
                    Login
                  </Typography>
                  <AccountCircleIcon sx={{ p: 0, width: "40px" }} />
                </MenuItem>
              </Link>
            )}
          </Box>
          <Tooltip>
            <IconButton
              onClick={() => navigate("/cart")}
              sx={{ p: 0, width: "40px" }}
            >
              <Badge badgeContent={""} color="primary">
                <ShoppingBagIcon />
              </Badge>
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
