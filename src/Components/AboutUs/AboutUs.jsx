import { Image } from "@mui/icons-material";
import { Box, createTheme, Typography } from "@mui/material";
import { width } from "@mui/system";
import React from "react";

const AboutUs = () => {
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
    <div>
      <Box>
        <Box
          sx={{
            width: "100%",
            height: "500px",
            marginBottom: 15,
          }}
        >
          <img
            style={{
              wihth: "100%",
              height: "600px",
            }}
            src="https://www.harrywinston.com/-/media/project/harry-winston/corporate/harry-winston-int/fine-jewelry/category/wedding-bands/herolarged_l2_cake_wb_main.jpg?rev=215353f8c5f94059bc5a7309c94c63ea"
            alt="error"
          />
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
              fontSize: "65px",
              width: "600px",
              fontFamily: "Quattrocento Sans",
              color: "#434343",
              marginBottom: "5px",
              lineHeight: "1.3",
              textAlign: "center",
            }}
          >
            We make really good earrings.{" "}
          </Typography>
          <Typography
            sx={{
              width: "700px",
              fontSize: "25px",
              fontFamily: "Quattrocento Sans",
              color: "#434343",
              lineHeight: "1.8",
              textAlign: "center",
            }}
          >
            Tini Lux was built out of a frustration with the existing jewelry
            market. We felt that there needed to be a trusted destination for
            jewelry that is safe for sensitive skin and metal allergies. We
            believe that everyone should be able to accessorize without pain.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            marginBottom: "5%",
            justifyContent: "space-evenly",
            marginTop: "5%",
            [theme.breakpoints.down("sm")]: {
              height: "250px",
            },
          }}
        >
          <img
            style={{
              maxWidth: "40%",
              marginRight: "5px",
            }}
            src="https://cdn.shopify.com/s/files/1/1908/4279/files/WWFH_2022_ROC_086_b4d1b057-ff47-41d8-b8e8-19f53b153810_1000x.jpg?v=1651166651"
            alt="his photo"
          />
          <Typography
            sx={{
              maxWidth: "40%",
              marginTop: "5%",
              fontFamily: "Quattrocento Sans",
              color: "#434343",
              fontSize: "20px",
              textAlign: "center",
            }}
          >
            Founding Story I created Tini Lux because I was frustrated with
            every pair of earrings that I tried. All I wanted were simple
            earrings that wouldn't cause a painful reaction, but I couldn't find
            anything that worked. I had given up wearing earrings years before
            because every pair (even “nickel free” and “hypoallergenic”
            earrings) almost instantaneously caused soreness, swelling, and
            bleeding. I tried so many pairs of earrings with the same results
            every time: pain and frustration. In my search for safe earrings, I
            discovered that I didn't just have sensitive ears, I had actually
            developed a contact allergy to metal from years of wearing earrings
            made with reactive materials. Armed with this new knowledge, I set
            out to work researching metal allergies. When I learned about the
            biocompatible properties of titanium and niobium and I knew that I
            had found my solution. Although I didn't set out to start a
            business, I knew that I had discovered something that could change
            how people wore jewelry. I decided that if no one else was going to
            create an option for all of the people with sensitive ears, then I
            would have to be the one to do it. And from there, Tini Lux was
            born.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              width: "700px",
              fontSize: "25px",
              fontFamily: "Quattrocento Sans",
              color: "#434343",
              lineHeight: "1.8",
              textAlign: "center",
            }}
          >
            THE CROWNING JEWELS Our diamond and gemstone fine jewelry collection
            offers hand-crafted pieces of unforgettable luxury that are perfect
            for any occasion.
          </Typography>
        </Box>

        {/* второй бокс */}

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "8%",
            marginBottom: "8%",
          }}
        >
          <Box sx={{ ml: "22%" }}>
            <img
              style={{ maxWidth: "80%" }}
              src="https://www.harrywinston.com/-/media/project/harry-winston/corporate/harry-winston-int/engagement-and-bridal/sbs_l2_cake_en.jpg?rev=34f5be85d89142ea859b2419f639b65c"
              alt="err"
            />
          </Box>

          <Box>
            <img
              style={{ maxWidth: "80%" }}
              src="https://www.harrywinston.com/-/media/project/harry-winston/corporate/harry-winston-int/engagement-and-bridal/sbs_l2_cake_wb.jpg?rev=9d87b22c93194b5d846d6b68c774bb6e"
              alt="err"
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default AboutUs;
