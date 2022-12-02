import React from "react";
import Typography from "@mui/material/Typography";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

import { Link } from "react-router-dom";
import { createTheme } from "@mui/material";
import { Box } from "@mui/system";

const Connect = () => {
  const theme = createTheme();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: "26px",
            fontFamily: "Quattrocento Sans",
            color: "#434343",
            mt: {
              xs: "8px",
              md: "0px",
            },
          }}
          component="h1"
          variant="h5"
        >
          Connect with Us
        </Typography>
        <div align="center">
          <Box
            sx={{
              display: "flex",
              width: "20%",
              margin: "auto",
              justifyContent: "space-between",
              m: 2,
              ml: 0,
            }}
          >
            <Link
              sx={{}}
              className="icon-twitter"
              href="https://twitter.com/?lang=ru"
            >
              <TwitterIcon sx={{ fill: "#434343", fontSize: "2rem" }} />
            </Link>

            <Link className="icon-instagram" href="https://www.instagram.com/">
              <InstagramIcon sx={{ fill: "#434343", fontSize: "2rem" }} />
            </Link>

            <Link className="icon-facebook" href="https://ru-ru.facebook.com/">
              <FacebookIcon sx={{ fill: "#434343", fontSize: "2rem" }} />
            </Link>
          </Box>
        </div>
      </Box>
    </>
  );
};

export default Connect;
