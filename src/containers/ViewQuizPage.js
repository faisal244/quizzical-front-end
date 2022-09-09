import { FlipCardScore } from "../components/FlipCardScore";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const ViewQuizPage = () => {
  const location = useLocation();

  useEffect(() => {
    console.log("A" + location.state.catName);
    console.log("B" + location.state.difficulty);
    console.log("C" + location.state.questions);
    console.log("D" + location.state.questionType);
    // CONSTRUCT THE URL
    // MAKE API CALL
    // ONCE RESPONSE IS RETURNED 
    // SEND THE RESPONSE TO BACKEND
    // call a function that makes azios request and sets all the states
  }, []);

  return (
    <div className="high-scores-card">
      <div className="arrow-img">
        <FlipCardScore />
      </div>
    </div>
  );
};
