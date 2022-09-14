import Hero from "components/hero/FullWidthWithImage";
import Card from "components/cards/TabCardGrid.js";
import AnimationRevealPage from "helpers/AnimationRevealPage";
import { default as Footer } from "components/footers/MiniCenteredFooter";

export const Homepage = () => {
  return (
    <AnimationRevealPage>
      <Hero />
      <Card />
      <Footer />
    </AnimationRevealPage>
  );
};

export default Homepage;
