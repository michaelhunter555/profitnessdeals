import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";

const HomeSlider = () => {
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <CardMedia
        component="img"
        src="/homeSlideImg.svg"
        alt="home_slide"
        height="90%"
        width="90%"
      />
    </Box>
  );
};

export default HomeSlider;
