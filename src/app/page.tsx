"use client";
import CategoryCards from "@/components/Categories/CategoryCards";
import StyledText from "@/components/Shared/Text/Styledtext";

export default function Home() {
  return (
    <>
      <StyledText variant="h4">ProFitness Deals</StyledText>
      <StyledText variant="subtitle1">Read Reviews. Find Deals!</StyledText>
      <CategoryCards />
    </>
  );
}
