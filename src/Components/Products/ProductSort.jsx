import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { useProducts } from "../../Contexts/ProductContextProvider";

export default function NativeSelectDemo() {
  const { fetchByParams } = useProducts();
  return (
    <Box
      sx={{
        display: "flex",
        minWidth: 120,
        marginLeft: {
          xs: "30px",
          sm: "30px",
          md: "0",
          lg: "15px",
          xl: "0",
        },
      }}
    >
      <FormControl fullWidth>
        <InputLabel
          htmlFor="uncontrolled-native"
          sx={{
            fontWeight: 700,
            fontSize: "30px",
            fontFamily: "Quattrocento Sans",
            textAlign: "center",
            color: "rgb(47, 12, 12)",
          }}
        >
          Sort By Type
        </InputLabel>
        <NativeSelect
          onChange={(e) => fetchByParams("type", e.target.value)}
          defaultValue={"1"}
          inputProps={{
            name: "sort",
          }}
        >
          <option value={"All"}>All</option>
          <option value={"Jogger"}>Jogger</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
