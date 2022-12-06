import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material";

export default function UpNavbar() {
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

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#ffc7ba",
          textAlign: "center",
        }}
      >
        <Toolbar variant="dense">
          <Typography
            variant="h6"
            component="div"
            sx={{
              width: "100%",
              textAlign: "center",
              color: "#434343",
              fontSize: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "Quattrocento Sans",
              [theme.breakpoints.down("xxxxs")]: {
                fontSize: "17px",
              },
            }}
          >
            Buy Now Pay Later with Installments
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
