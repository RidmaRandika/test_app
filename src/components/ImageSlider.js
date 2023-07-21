import React from "react";
import img from "../assets/sliderImg.jpg";
import { Box, Typography } from "@mui/material";
import ComboBox from "./ComboBox";

function ImageSlider() {
  return (
    <Box sx={{ position: "relative", display: "inline-block" ,width:'100%' }}>
      <img
        style={{ width: "100%", height: "auto" }}
        src={img}
        alt="Your Image"
      />
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "25%",
          transform: "translate(-50%, -50%)",
          color: "white",
          textAlign: "left",
          zIndex: 1,
        }}
      >
        <Typography variant="h4" sx={{fontWeight:400}} >I want to</Typography>
        <Typography variant="h4"><b>Know About</b></Typography>
        <ComboBox/>
      </Box>
    </Box>
  );
}

export default ImageSlider;
