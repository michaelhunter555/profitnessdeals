import { useContext } from "react";

import { AuthContext } from "@/context/auth-context";
import { useDeviceCheck } from "@/hooks/device-hook";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { FormHelperText } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

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

  /**
   * TODO:
   * randomly pick a product from database and display with price options.
   */

  dummyData.sort((a, b) => a.price - b.price);

  return (
    <Container maxWidth="md">
      <Paper sx={{ padding: 2 }}>
        <Grid container direction={isMobile ? "column" : "row"} spacing={2}>
          <Grid item xs={9}>
            <StyledText variant="h6">The Proform Carbon Pro 2000</StyledText>
            <CardMedia
              component="img"
              src={imgUrl}
              alt="proform_treadmill"
              sx={{ width: "100%", height: "100%" }}
            />
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid item xs={2}>
            <Stack direction="column" spacing={1} width="100%">
              <StyledText variant="subtitle2">View Latest Prices</StyledText>
              {dummyData
                .sort((a, b) => a.price - b.price)
                .map(({ price, vendor, link }, i) => (
                  <>
                    <Chip
                      sx={{
                        backgroundColor: `hsl(${i * 10}, 100%, 70%)`,
                        fontSize: 15,
                      }}
                      avatar={<Avatar>{String.fromCharCode(i + 65)}</Avatar>}
                      key={`${vendor}-${i}`}
                      size="medium"
                      label={`$${price}`}
                      clickable
                    />
                    <FormHelperText>view on {vendor}</FormHelperText>
                  </>
                ))}
              <Chip
                component="button"
                onClick={() => console.log("review")}
                clickable
                label="Read Review"
                icon={<FitnessCenterIcon />}
              />
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default FeaturedItem;
