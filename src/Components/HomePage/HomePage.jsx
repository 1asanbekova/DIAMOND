import { Button, createTheme, ThemeProvider, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import React from "react";
import "./HomePage.css";

const icons = [
  {
    name: "Sustainable",
    text: "Ethically sourced conflict-free stones & recycled material.",
    img: "https://cdn.shopify.com/s/files/1/2529/3968/files/sustainable_b65bd46b-d35b-4fb4-8fca-834fa5fa4a4c.png?v=1660443312",
  },
  {
    name: "Affordable",
    text: "Highest quality at the best price. We price match.",
    img: "https://cdn.shopify.com/s/files/1/2529/3968/files/afforadble_545f3835-cdc1-4d27-b947-d7e3d2990685.png?v=1660443698",
  },
  {
    name: "Top Rated",
    text: "95,000+ customers that love our jewlery, and we love them!",
    img: "https://cdn.shopify.com/s/files/1/2529/3968/files/top.png?v=1660443476",
  },
  {
    name: "Free Shipping",
    text: "Domestic shipping is free when you spend over $150.",
    img: "https://cdn.shopify.com/s/files/1/2529/3968/files/shipping.png?v=1660443665",
  },
];

const homePageImg = [
  {
    name: "Exclusive Diamond Engagement Rings",
    img: "https://cdn.shopify.com/s/files/1/2529/3968/products/ZICE-0001c.jpg?v=1601493131",
  },
  {
    name: "Crushed Ice Fine Rings",
    img: "https://cdn.shopify.com/s/files/1/2529/3968/products/IMG1.45-YELLOW.png?v=1659122345&width=750",
  },
  {
    name: "Exclusive Moissanite Engagement Rings",
    img: "https://cdn.shopify.com/s/files/1/2529/3968/products/GDB-0026CS8_4_b2700cc9-87da-43ab-93ef-4a958be277b3.jpg?v=1601493379",
  },
];

const HomePage = () => {
  const navigate = useNavigate();
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 600,
        sm: 800,
        md: 1100,
        lg: 1200,
        xl: 1400,
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Grid>
        <Box
          sx={{
            // [theme.breakpoints.down("lg")]: {
            //   height: "300px",
            // },
            backgroundSize: "100%",
            height: "500px",
            marginBottom: 5,
            backgroundImage: `url(https://cdn.shopify.com/s/files/1/2529/3968/files/bannerlarge.jpg?v=1669608447&width=1500)`,
          }}
        >
          <Box
            sx={{
              width: "40%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "10% 30% 20% 8%",
            }}
          >
            <Typography
              sx={{
                fontSize: "50px",
                color: "#434343",
                textAlign: "center",
                marginBottom: "5px",
                fontFamily: "Quattrocento Sans",
              }}
            >
              Cyber Week Deals
            </Typography>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#434343",
                textAlign: "center",
                fontFamily: "Quattrocento Sans",
              }}
            >
              Enjoy up to 35% off customer favorites all week long.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#E0E0E0",
                color: "#434343",
                width: "150px",
                height: "50px",
                mb: "50px",
                border: "solid",
                borderRadius: "15px",
              }}
              onClick={() => navigate("/products")}
            >
              Shop now
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            [theme.breakpoints.down("lg")]: {
              height: "450px",
            },
            [theme.breakpoints.down("md")]: {
              width: "80%",
              height: "350px",
            },
            [theme.breakpoints.down("sm")]: {
              width: "70%",
              height: "250px",
            },
            [theme.breakpoints.down("xs")]: {
              width: "60%",
              height: "150px",
            },
            width: "90%",
            height: "500px",
            display: "flex",
            justifyContent: "space-evenly",
            margin: "0 auto",
            marginBottom: "30px",
          }}
        >
          <img
            style={{
              width: "30%",
              borderRadius: "10px",
            }}
            src="https://cdn.shopify.com/s/files/1/2529/3968/files/pexels-polinach-11007534.jpg?v=1660441759"
          />
          <img
            style={{ width: "65%", borderRadius: "10px" }}
            src="https://cdn.shopify.com/s/files/1/2529/3968/files/FineJewelry-3.jpg?v=1660441212"
          />
        </Box>

        <Box sx={{ width: "100%" }}>
          <img src="https://www.harrywinston.com/-/media/project/harry-winston/corporate/harry-winston-int/high-jewelry/marvelous-creations-by-harry-winston/plp/herolarged_marvelous_plp_3_butterfly_2.gif?rev=cdc5e43d532542f6bf53f79b171af377" />
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <Typography
            sx={{
              [theme.breakpoints.down("sm")]: {
                fontSize: "30px",
                width: "50%",
              },
              fontSize: "50px",
              width: "600px",
              fontFamily: "Quattrocento Sans",
              color: "#434343",
              marginBottom: "5px",
              lineHeight: "1.3",
              textAlign: "center",
            }}
          >
            Sustainable, Obtainable & Sophisticated.
          </Typography>
          <Typography
            sx={{
              [theme.breakpoints.down("sm")]: {
                width: "50%",
                fontSize: "14px",
              },
              width: "700px",
              fontSize: "16px",
              fontFamily: "Quattrocento Sans",
              color: "#434343",
              lineHeight: "1.8",
              textAlign: "center",
            }}
          >
            At IceTrends, we believe that each love story is defined not by
            tradition, but by a magical connection between two people, any two
            people, who come together in different ways, in many stages of life.
            Our sustainable, high-quality, above ground Jewelry is as one of a
            kind and brilliant as the inexplicable bond you share with your
            one-and-only.
          </Typography>
        </Box>
        <Typography
          sx={{
            width: "86%",
            textAlign: "left",
            margin: "0 auto",
            fontSize: "28px",
            fontFamily: "Quattrocento Sans",
            color: "#434343",
            marginBottom: "20px",
          }}
        >
          Obtainable Luxury
        </Typography>
        <Box
          sx={{
            [theme.breakpoints.down("lg")]: {
              height: "450px",
            },
            [theme.breakpoints.down("md")]: {
              width: "80%",
              height: "350px",
            },
            [theme.breakpoints.down("sm")]: {
              width: "70%",
              height: "250px",
            },
            [theme.breakpoints.down("xs")]: {
              width: "60%",
              height: "150px",
            },
            width: "90%",
            height: "500px",
            display: "flex",
            justifyContent: "space-evenly",
            margin: "0 auto",
            marginBottom: "30px",
          }}
        >
          <img
            style={{ width: "65%", borderRadius: "10px" }}
            src="https://cdn.shopify.com/s/files/1/2529/3968/files/pexels-alleksana-7248760.jpg?v=1660442577"
          />
          <img
            style={{ width: "30%", borderRadius: "10px" }}
            src="https://cdn.shopify.com/s/files/1/2529/3968/files/IMG_9268.jpg?v=1660439276&width=1500"
          />
        </Box>
        <Box
          sx={{
            [theme.breakpoints.down("xs")]: {
              flexDirection: "column",
            },
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",

            marginBottom: "20px",
          }}
        >
          {icons.map((e, index) => (
            <div key={index} className="photoDivs">
              <img src={e.img} alt="" width="80%" />
              <p>{e.name}</p>
              <p>{e.text}</p>
            </div>
          ))}
        </Box>
        <Box
          sx={{
            [theme.breakpoints.down("xs")]: {
              flexDirection: "column",
            },
            width: "100%",
            margin: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            marginBottom: "20px",
          }}
        >
          {homePageImg.map((e, index) => (
            <div key={index} className="photoDivs2 homePageImg">
              <img src={e.img} alt="" width="100%" />
              <p>{e.name}</p>
            </div>
          ))}
        </Box>
      </Grid>
    </ThemeProvider>
  );
};

export default HomePage;
