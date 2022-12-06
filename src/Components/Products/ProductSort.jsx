import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { useProducts } from "../../Contexts/ProductContextProvider";
import { createTheme, Typography } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

export default function NativeSelectDemo() {
  const { fetchByParams } = useProducts();

  const theme = createTheme({
    breakpoints: {
      values: {
        xxxs: 320,
        xxs: 380,
        xs: 428,
        sm: 770,
        md: 1024,
        lg: 1250,
        xl: 1440,
      },
    },
  });
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "start",
        minWidth: 120,
        marginLeft: {
          xs: "30px",
          sm: "30px",
          md: "0",
          lg: "15px",
          xl: "0",
        },
        [theme.breakpoints.down("xxs")]: {
          display: "none",
        },
      }}
    >
      <FormControl
        fullWidth
        sx={{
          marginBottom: "3%",
          width: "25%",
          [theme.breakpoints.down("lg")]: {
            width: "30%",
          },
          [theme.breakpoints.down("xs")]: {
            width: "20%",
          },
          [theme.breakpoints.down("xs")]: {
            display: "none",
          },
        }}
      >
        <InputLabel
          htmlFor="uncontrolled-native"
          sx={{
            fontWeight: 700,
            fontSize: "30px",
            fontFamily: "Quattrocento Sans",
            textAlign: "center",
            color: "rgb(47, 12, 12)",
            [theme.breakpoints.down("lg")]: {
              fontSize: "28px",
            },
            [theme.breakpoints.down("xs")]: {
              fontSize: "24px",
            },
          }}
        >
          Sort By Category
        </InputLabel>
        <NativeSelect
          onChange={(e) => fetchByParams("type", e.target.value)}
          defaultValue={"1"}
          inputProps={{
            name: "sort",
          }}
        >
          <option value={"All"}>All</option>
          <option value={"Pendant"}>Pendant</option>
          <option value={"Earrings"}>Earrings</option>
          <option value={"Bracelet"}>Bracelet</option>
          <option value={"Charm"}>Charm</option>
        </NativeSelect>
      </FormControl>

      <FormControl
        fullWidth
        sx={{
          marginBottom: "3%",
          ml: "3%",
          width: "20%",
          [theme.breakpoints.down("lg")]: {
            width: "25%",
          },
          [theme.breakpoints.down("xs")]: {
            width: "20%",
          },
          [theme.breakpoints.down("xs")]: {
            display: "none",
          },
        }}
      >
        <InputLabel
          htmlFor="uncontrolled-native"
          sx={{
            fontWeight: 700,
            fontSize: "30px",
            fontFamily: "Quattrocento Sans",
            textAlign: "center",
            color: "rgb(47, 12, 12)",
            [theme.breakpoints.down("lg")]: {
              fontSize: "28px",
            },
            [theme.breakpoints.down("xs")]: {
              fontSize: "24px",
            },
          }}
        >
          Sort By Price
        </InputLabel>
        <NativeSelect
          onChange={(e) => fetchByParams("_sort", e.target.value)}
          defaultValue={"1"}
          inputProps={{
            name: "sort",
          }}
        >
          <option value={"All"}>All</option>
          <option value={"asc"}>Low to High</option>
          <option value={"desc"}>High to Low</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
