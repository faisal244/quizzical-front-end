import Card from "components/cards/TabCardGrid.js";
import AnimationRevealPage from "helpers/AnimationRevealPage";
import { default as Footer } from "components/footers/MiniCenteredFooter";

export const ViewAllQuizzes = () => {
  return (
    <AnimationRevealPage>
      <Card heading={"ALL QUIZZES"} />
      <Footer />
    </AnimationRevealPage>
  );
};

export default ViewAllQuizzes;
