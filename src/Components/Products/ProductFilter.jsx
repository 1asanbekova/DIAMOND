import React from "react";

import {
  Checkbox,
  createTheme,
  Divider,
  Link,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import AddIcon from "@mui/icons-material/Add";

const ProductFilter = () => {
  const [sort, setSort] = React.useState("");

  const handleSort = (event) => {
    setSort(event.target.value);
  };
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 1024,
        lg: 1150,
        xl: 1536,
      },
    },
  });

  const filterNew = ["Athletes", "Collaborations", "Must-Haves", "Shops"];
  const color = [
    "black",
    "blue",
    "aqua",
    "red",
    "pink",
    "orange",
    "yellow",
    "green",
    "aqua",
    "brown",
    "grey",
  ];
  const size = [
    1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10,
    10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 15, 16, 17,
  ];
  const price = ["$19 - $30", "$31 - $50", "$51 - $100", "$101 +"];
  const apparel = [
    "Accessories",
    "Bodysuits",
    "Dresses",
    "Hoodies",
    "Jackets",
    "Leggings",
    "Outerwear",
    "Pants",
    "Polos",
    "Rompers",
  ];
  const shoeStyle = ["High Top", "Low Top", "Mid Top", "Sandal", "Slide"];
  const collections = [
    "Axilus 2 Energized",
    "Axilus Jr",
    "Cage",
    "Disruptor 2",
    "Double Bounce",
    "Drifter",
    "Electrove",
    "F-13",
    "F-14",
    "Fila Orbit",
  ];
  const benefits = [
    "Anti-Odor Fabric",
    "CoolMax® Technology",
    "Forza Ball Short",
    "Forza Sculpting Fabric",
    "Recycled Materials",
    "Stretch Fabric",
    "uv_rotection",
    "UV Protection",
    "Wicking and Breathable Fabric",
  ];
  const collabarations = ["FILA x 2PAC", "MSGM x FILA", "The Museum DC x FILA"];
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return <></>;
};

export default ProductFilter;
