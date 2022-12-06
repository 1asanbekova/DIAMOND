import { Box, Typography } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./ContactUs.css";
const ContactUs = () => {
  return (
    <>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            backgroundImage:
              "url(https://www.harrywinston.com/-/media/project/harry-winston/corporate/harry-winston-int/high-jewelry/marvelous-creations-by-harry-winston/plp/herolarged_marvelous_plp_4_python_2.gif?rev=19b7f9fc01b145ca845cf53d2ce986ad)",
          }}
        >
          <Typography
            sx={{
              fontSize: "50px",
              fontFamily: "Quattrocento Sans",
              color: "#434343",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            Custom Jewelry
          </Typography>
        </Box>
        <Box
          sx={{
            width: "80%",
            height: "430px",
            display: "flex",
            justifyContent: "space-evenly",
            margin: "0 auto",
            marginBottom: "30px",
          }}
        >
          <img
            style={{
              width: "35%",
              borderRadius: "10px",
              marginLeft: "200px",
              marginRight: "-15px",
            }}
            src="https://cdn.shopify.com/s/files/1/2529/3968/files/img_4017.jpg?v=1660518981&width=1500"
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",

              width: "40%",
            }}
          >
            <img
              style={{ width: "48%", borderRadius: "10px" }}
              src="https://cdn.shopify.com/s/files/1/2529/3968/files/Screen_Shot_2022-08-14_at_4.19.04_PM.png?v=1660519162"
            />
            <img
              style={{ width: "48%", borderRadius: "10px", marginTop: "15px" }}
              src="https://cdn.shopify.com/s/files/1/2529/3968/files/Screen_Shot_2022-08-14_at_4.17.46_PM.png?v=1660519084"
              alt=""
            />
          </Box>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            display: "flex",
            justifyContent: "center",
            margin: "0 auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: { xs: "100%", md: "80%" },
            }}
          >
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: 26,
                fontFamily: "Quattrocento Sans",
                color: "#434343",
              }}
              component="h1"
              variant="h5"
            >
              Get Started
            </Typography>

            <Box component="form" noValidate sx={{ mt: 1 }}>
              <Box sx={{ mt: 0 }}>
                <Typography sx={{ fontWeight: 600, fontSize: 14 }}>
                  Subject
                </Typography>
                <TextField
                  sx={{ "&": { borderRadius: 0 } }}
                  required
                  fullWidth
                  id="subject"
                  name="subject"

                  // ===========
                />
              </Box>

              <Box sx={{ mt: 2 }}>
                <Typography sx={{ fontWeight: 600, fontSize: 14 }}>
                  Name
                </Typography>
                <TextField
                  required
                  fullWidth
                  id="name"
                  name="name"

                  // ===========
                />
              </Box>

              <Box sx={{ mt: 2 }}>
                <Typography sx={{ fontWeight: 600, fontSize: 14 }}>
                  Email
                </Typography>
                <TextField
                  required
                  id="emaili"
                  fullWidth
                  name="email"

                  // ===========
                />
              </Box>

              <Box sx={{ mt: 2 }}>
                <Typography sx={{ fontWeight: 600, fontSize: 14 }}>
                  Phone
                </Typography>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  name="phone"

                  // ===========
                />
              </Box>

              <Box sx={{ mt: 2 }}>
                <Typography sx={{ fontWeight: 600, fontSize: 14 }}>
                  Description
                </Typography>
                <TextField
                  className="input-password"
                  required
                  fullWidth
                  id="password"
                  name="password"

                  // ===============
                />
              </Box>

              <Button
                className="button_create"
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  color: "#434343",
                  mt: 3,
                  mb: 5,
                  fontWeight: 600,
                  borderRadius: 0,
                }}
              >
                SUBMIT
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ContactUs;
