import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function UpNavbar() {
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
            }}
          >
            Buy Now Pay Later with Installments
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
