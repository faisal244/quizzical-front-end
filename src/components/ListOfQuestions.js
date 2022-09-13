import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const ListOfQuestions = ({ quizData }) => {
  return (
    <div className="create-quiz-cards">
      {quizData.map((each, index) => {
        return (
          <div>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Questions</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{each.question}</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Correct Answer</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{each.correct_answers}</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Incorrect Answer</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{each.incorrect_answer}</Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        );
      })}
    </div>
  );
};
