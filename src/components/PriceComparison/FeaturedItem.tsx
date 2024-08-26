import { useContext, useState } from "react";

import { AuthContext } from "@/context/auth-context";
import { useDeviceCheck } from "@/hooks/device-hook";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { FormHelperText } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

import StyledNextLink from "../Shared/Links/StyledNextLink";
import StyledText from "../Shared/Text/StyledText";

const dummyData = [
  {
    price: 9.92,
    vendor: "Walmart",
    link: "#",
  },
  {
    price: 12.92,
    vendor: "Amazon",
    link: "#",
  },
  {
    price: 11.92,
    vendor: "Sears",
    link: "#",
  },
  {
    price: 10.92,
    vendor: "sme",
    link: "#",
  },
];

const imgUrl =
  "https://res.cloudinary.com/iconfitness/image/upload/dpr_auto,f_auto,fl_progressive.lossy,q_auto,w_auto/v1/site--1/PFTL10925-12685.png";

const FeaturedItem = () => {
  const auth = useContext(AuthContext);
  const { isMobile, isTablet } = useDeviceCheck();
  const [value, setValue] = useState<number | null>(2);

  /**
   * TODO:
   * randomly pick a product from database and display with price options.
   */

  const random = Math.floor(Math.random() * 100);

  return (
    <Container maxWidth="md">
      <Paper sx={{ padding: 2 }}>
        <Grid container direction={isMobile ? "column" : "row"} spacing={2}>
          <Grid item xs={8} sx={{ borderRight: "1px solid #b1b1b1" }}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <StyledText variant="h6">The Proform Carbon Pro 2000</StyledText>
              <Rating name="product-rating" value={value} readOnly />
            </Stack>
            <Divider />
            <CardMedia
              component="img"
              src={imgUrl}
              alt="proform_treadmill"
              sx={{ width: "100%", height: "100%" }}
            />
          </Grid>
          <Grid item xs={4}>
            <Stack
              direction="column"
              alignItems="center"
              spacing={1}
              width="100%"
            >
              <StyledText variant="body1">View Best Prices</StyledText>
              {dummyData
                .sort((a, b) => a.price - b.price)
                .map(({ price, vendor, link }, i) => (
                  <Box
                    key={`${vendor}-${i}`}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Chip
                      sx={{
                        backgroundColor: `hsl(${i * 10}, 100%, 70%)`,
                        fontSize: 20,
                        minWidth: "200px",
                      }}
                      size="medium"
                      label={`$${price}`}
                      clickable
                    />
                    <StyledNextLink route={`/products/${vendor}`}>
                      <Stack width="100%" alignItems="center">
                        <FormHelperText>view on {vendor}.com</FormHelperText>
                      </Stack>
                    </StyledNextLink>
                  </Box>
                ))}

              <Stack sx={{ width: "100%" }} alignItems="center">
                <FormHelperText>
                  view offers from {random} other stores
                </FormHelperText>
                <Divider
                  flexItem
                  sx={{ margin: "0.5rem auto", width: "100%" }}
                />
                <Chip
                  variant="outlined"
                  sx={{ fontSize: 20 }}
                  component="button"
                  onClick={() => console.log("review")}
                  clickable
                  label="Read Review"
                  icon={<FitnessCenterIcon />}
                />
                <Button>Read Review</Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default FeaturedItem;
