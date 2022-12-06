import React from "react";
import { createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { Link, List, ListItem, Typography, Button } from "@mui/material";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const [openServices, setOpenServices] = React.useState(false);

  const handleServices = () => {
    setOpenServices(!openServices);
  };

  const [openCorporate, setOpenCorporate] = React.useState(false);

  const handleCorporate = () => {
    setOpenCorporate(!openCorporate);
  };

  const [openLegalTerms, setOpenLegalTerms] = React.useState(false);

  const handleLegalTerms = () => {
    setOpenLegalTerms(!openLegalTerms);
  };

  const services = [
    "Schedule an Appointment",
    "Request Assistance",
    "Request a Catalog",
    "Subscribe to Newsletters",
  ];
  const corporate = ["Careers", "Philanthropy"];
  const legalTerms = [
    "Terms of Use",
    "Privacy Policy",
    "Cookie Notice",
    "Supply Chain",
    "Accessibility",
  ];

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 1024,
        lg: 1200,
        xl: 1536,
      },
    },
  });

  return (
    <Box
      sx={{
        backgroundColor: "#ffc7ba",
        color: "#434343",
      }}
    >
      <Box
        sx={{
          display: "flex",
          [theme.breakpoints.down("md")]: {
            display: "block",
          },
          justifyContent: "space-evenly",
          padding: "2% 5%",
          fontSize: "18px",

          border: "solid rgba(122,139,160,.3)",
          borderWidth: "0 0 1px",
          padding: "23px 0",
          width: "97%",
          margin: "0 auto",
        }}
      >
        <Box onClick={() => console.log("zxc")}>
          <Typography
            sx={{
              padding: "3px 10px",
              [theme.breakpoints.down("md")]: {
                display: "none",
              },
            }}
          >
            SERVICES
          </Typography>
          <List
            sx={{
              [theme.breakpoints.down("md")]: {
                padding: "0",
              },
            }}
          >
            {services.map((i, index) => (
              <ListItem
                key={index}
                sx={{
                  padding: "10px",
                  margin: 0,
                  [theme.breakpoints.down("md")]: {
                    display: "none",
                  },
                }}
              >
                {
                  <Link
                    sx={{
                      color: "#434343",
                      cursor: "pointer",
                      transition: "0.5s",
                    }}
                  >
                    {i}
                  </Link>
                }
              </ListItem>
            ))}
          </List>
        </Box>
        <Box>
          <Typography
            sx={{
              padding: "3px 10px",
              [theme.breakpoints.down("md")]: {
                display: "none",
              },
            }}
          >
            CORPORATE
          </Typography>
          <List
            sx={{
              [theme.breakpoints.down("md")]: {
                padding: "0",
              },
            }}
          >
            {corporate.map((i, index) => (
              <ListItem
                key={index}
                sx={{
                  padding: "10px",
                  margin: 0,
                  [theme.breakpoints.down("md")]: {
                    display: "none",
                  },
                }}
              >
                {
                  <Link
                    sx={{
                      color: "#434343",
                      cursor: "pointer",
                      transition: "0.5s",
                    }}
                  >
                    {i}
                  </Link>
                }
              </ListItem>
            ))}
          </List>
        </Box>
        <Box>
          <Typography
            sx={{
              padding: "3px 10px",
              [theme.breakpoints.down("md")]: {
                display: "none",
              },
            }}
          >
            LEGAL TERMS
          </Typography>
          <List
            sx={{
              [theme.breakpoints.down("md")]: {
                padding: "0",
              },
            }}
          >
            {legalTerms.map((i, index) => (
              <ListItem
                key={index}
                sx={{
                  padding: "10px",
                  margin: 0,
                  [theme.breakpoints.down("md")]: {
                    display: "none",
                  },
                }}
              >
                {
                  <Link
                    sx={{
                      color: "#434343",
                      cursor: "pointer",
                      transition: "0.5s",
                    }}
                  >
                    {i}
                  </Link>
                }
              </ListItem>
            ))}
          </List>
        </Box>

        <ListItemButton
          onClick={handleServices}
          sx={{
            [theme.breakpoints.up("md")]: { display: "none" },
            [theme.breakpoints.down("md")]: {
              fontWeight: 600,
              border: "solid rgba(122,139,160,.3)",
              borderWidth: "0 0 1px",
              padding: "23px 0",
            },
          }}
        >
          <ListItemText primary="SERVICES" />
          {openServices ? <ExpandMore /> : <ExpandLess />}
        </ListItemButton>
        <Collapse in={openServices} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{
                pl: 4,
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
              }}
            >
              {services.map((i, index) => (
                <ListItemText key={index} primary={i} sx={{}} />
              ))}
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton
          onClick={handleCorporate}
          sx={{
            [theme.breakpoints.up("md")]: { display: "none" },
            [theme.breakpoints.down("md")]: {
              fontWeight: 600,
              border: "solid rgba(122,139,160,.3)",
              borderWidth: "0 0 1px",
              padding: "23px 0",
            },
          }}
        >
          <ListItemText primary="Corporate" />
          {openCorporate ? <ExpandMore /> : <ExpandLess />}
        </ListItemButton>
        <Collapse in={openCorporate} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{
                pl: 4,
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
              }}
            >
              {corporate.map((i, index) => (
                <ListItemText key={index} primary={i} sx={{}} />
              ))}
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton
          onClick={handleLegalTerms}
          sx={{
            [theme.breakpoints.up("md")]: { display: "none" },
            [theme.breakpoints.down("md")]: {
              fontWeight: 600,
              border: "solid rgba(122,139,160,.3)",
              borderWidth: "0 0 1px",
              padding: "23px 0",
            },
          }}
        >
          <ListItemText primary="LEGAL TERMS" />
          {openLegalTerms ? <ExpandMore /> : <ExpandLess />}
        </ListItemButton>
        <Collapse in={openLegalTerms} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{
                pl: 4,
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
              }}
            >
              {legalTerms.map((i, index) => (
                <ListItemText key={index} primary={i} sx={{}} />
              ))}
            </ListItemButton>
          </List>
        </Collapse>

        <Box
          sx={{
            width: "27%",
            [theme.breakpoints.down("md")]: {
              width: "100%",
              margin: "0 auto",
            },
          }}
        >
          <List>
            <ListItem
              sx={{
                fontSize: "20px",
                padding: "3px 10px",
                [theme.breakpoints.down("md")]: {
                  padding: "3px 10px 10px 0",
                },
              }}
            >
              Connect with Us
            </ListItem>
            <List
              className="icons"
              sx={{
                display: "flex",
                width: "30%",
                [theme.breakpoints.down("md")]: {
                  width: "15%",
                },
              }}
            >
              <ListItem>
                <Link
                  sx={{ color: "#434343" }}
                  className="icon-twitter"
                  href="https://twitter.com/?lang=ru"
                >
                  <TwitterIcon />
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  sx={{ color: "#434343" }}
                  className="icon-instagram"
                  href="https://www.instagram.com/"
                >
                  <InstagramIcon />
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  sx={{ color: "#434343" }}
                  className="icon-facebook"
                  href="https://ru-ru.facebook.com/"
                >
                  <FacebookIcon />
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  sx={{ color: "#434343" }}
                  className="icon-youtube"
                  href="https://www.youtube.com/watch?v=LDAZMAP9ENE"
                >
                  <YouTubeIcon />
                </Link>
              </ListItem>
            </List>
          </List>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "80px",
          paddingBottom: "50px",
          paddingTop: "40px",
          borderTopWidth: "1px",
          borderColor: "white",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "13px",
          }}
        >
          <Typography>
            {" "}
            ICE TRENDS, Inc. 2022 ICP number 沪ICP备17030601号-1{" "}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
