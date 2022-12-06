import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { ADD } from "../../helpers/consts";
import { useAuth } from "../../Contexts/AuthContextProvider";
import { styled, alpha } from "@mui/material/styles";
import { createTheme } from "@mui/system";
import { Badge } from "@mui/material";

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
      width: "10ch",
      "&:focus": {
        width: "20ch",
      },
    },
    [theme.breakpoints.up("md")]: {
      width: "8ch",
      "&:focus": {
        width: "10ch",
      },
    },
  },
}));

function Navbar() {
  const theme = createTheme({
    breakpoints: {
      values: {
        xxxxs: 325,
        xxxs: 380,
        xxs: 430,
        xs: 770,
        sm: 915,
        md: 1025,
      },
    },
  });

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

  const {
    user: { email },
    handleLogout,
  } = useAuth();

  const navigate = useNavigate();

  //! SEARCH
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = React.useState(searchParams.get("q") || "");

  React.useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  return (
    <AppBar position="static" sx={{ backgroundColor: "white" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
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
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Button onClick={() => navigate("/")}>
              <img
                width="100%"
                padding="0"
                margin="0 auto"
                height="25px"
                src="https://cdn.shopify.com/s/files/1/2529/3968/files/logo_600x_e9ef1201-0e6b-4ae3-83e8-51acaa780310.png?v=1660442090&width=500"
              />
            </Button>
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              [theme.breakpoints.down("xxs")]: {
                flexGrow: "0.4",
              },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
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
              <Box>
                {" "}
                {email === ADD ? (
                  <Button onClick={() => navigate("/addproduct")}>ADD</Button>
                ) : (
                  <></>
                )}
                <Button
                  sx={{
                    color: "black",
                  }}
                  onClick={() => navigate("/")}
                >
                  HOME
                </Button>
                <Button
                  sx={{
                    color: "black",
                  }}
                  onClick={() => navigate("/products")}
                >
                  FINE JEWELRY
                </Button>
                <Button
                  sx={{
                    color: "black",
                  }}
                  onClick={() => navigate("/aboutus")}
                >
                  ABOUT US
                </Button>
                <Button
                  sx={{
                    color: "black",
                  }}
                  onClick={() => navigate("/contactus")}
                >
                  CONTACT US
                </Button>
              </Box>
            </Menu>
          </Box>
          <Button
            sx={{
              display: {
                xl: "none",
                md: "none",
                lg: "none",
                xs: "none",
              },
              [theme.breakpoints.down("xxs")]: {
                display: "block",
                justifyContent: "center",
                width: "40%",
              },
              [theme.breakpoints.down("xxs")]: {
                display: "block",
                justifyContent: "center",
                width: "40%",
              },
              [theme.breakpoints.down("xxxs")]: {
                display: "block",
                justifyContent: "center",
                width: "50%",
              },
            }}
            onClick={() => navigate("/")}
          >
            <img
              width="100%"
              padding="0"
              margin="0 auto"
              height="25px"
              src="https://cdn.shopify.com/s/files/1/2529/3968/files/logo_600x_e9ef1201-0e6b-4ae3-83e8-51acaa780310.png?v=1660442090&width=500"
            />
          </Button>
          <Box
            sx={{
              flexGrow: 3,
              display: {
                xs: "none",
                md: "flex",
                [theme.breakpoints.down("md")]: {
                  width: "90%",
                },
              },
            }}
          >
            <Box sx={{ display: "flex" }}>
              {" "}
              {email === ADD ? (
                <Button
                  sx={{
                    color: "black",
                  }}
                  onClick={() => navigate("/addproduct")}
                >
                  ADD
                </Button>
              ) : (
                <></>
              )}
              <Button
                sx={{
                  color: "black",
                }}
                onClick={() => navigate("/")}
              >
                HOME
              </Button>
              <Button
                sx={{
                  color: "black",
                }}
                onClick={() => navigate("/products")}
              >
                FINE JEWELRY
              </Button>
              <Button
                sx={{
                  color: "black",
                }}
                onClick={() => navigate("/aboutus")}
              >
                ABOUT US
              </Button>
              <Button
                sx={{
                  color: "black",
                }}
                onClick={() => navigate("/contactus")}
              >
                CONTACT US
              </Button>
            </Box>
          </Box>

          <Box sx={{ flexGrow: 0, display: "flex" }}>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            ></Menu>

            <Search
              sx={{
                margin: "5px",
                color: "black",
                [theme.breakpoints.down("xxs")]: {
                  display: "none",
                },
              }}
            >
              <SearchIconWrapper>
                <SearchIcon
                  sx={{
                    color: "black",
                  }}
                />
              </SearchIconWrapper>
              <StyledInputBase
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                sx={{
                  border: "2px solid black",
                  borderRadius: "20px",
                  height: "40px",
                }}
              />
            </Search>

            <Box
              sx={{
                flexGrow: 0,
                mt: "1%",
                [theme.breakpoints.down("xxs")]: {
                  display: "none",
                },
              }}
            >
              {email ? (
                <MenuItem onClick={handleLogout}>
                  <Typography
                    sx={{
                      fontFamily: "Quattrocento Sans",
                      color: "rgb(47, 12, 12)",
                      fontSize: "20px",
                      fontWeight: "400",
                    }}
                  >
                    Logout
                  </Typography>
                  <AccountCircleIcon
                    sx={{
                      p: 0,
                      width: "40px",
                      color: "black",
                    }}
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
                    <Typography
                      sx={{
                        fontFamily: "Quattrocento Sans",
                        color: "rgb(47, 12, 12)",
                        fontSize: "20px",
                        fontWeight: "400",
                      }}
                    >
                      Login
                    </Typography>
                    <AccountCircleIcon
                      sx={{
                        p: 0,
                        width: "40px",
                      }}
                    />
                  </MenuItem>
                </Link>
              )}
            </Box>
            <Tooltip>
              <IconButton
                onClick={() => navigate("/cart")}
                sx={{
                  p: 0,
                  width: "40px",
                  [theme.breakpoints.down("xxs")]: {
                    display: "none",
                  },
                }}
              >
                <Badge badgeContent={""} color="primary">
                  <ShoppingBagIcon
                    sx={{
                      p: 0,
                      width: "40px",
                    }}
                  />
                </Badge>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
