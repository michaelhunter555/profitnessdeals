"use client";
import CategoryCards from "@/components/Categories/CategoryCards";
import { Content, PageContainer } from "@/components/Footer/FooterStyles";
import FeaturedItem from "@/components/PriceComparison/FeaturedItem";
import HomeSearchField from "@/components/SearchField/HomeSearchField";
import StyledText from "@/components/Shared/Text/StyledText";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";

export default function Home() {
  return (
    <PageContainer>
      <Content>
        <Stack spacing={2} alignItems="center">
          <StyledText variant="h4">ProFitness Deals</StyledText>
          <StyledText variant="subtitle1">Read Reviews. Find Deals!</StyledText>
          <HomeSearchField />
          <CategoryCards />
          <FeaturedItem />
        </Stack>
      </Content>
      <Divider sx={{ margin: "5rem auto", width: "100%" }} />
    </PageContainer>
  );
}
