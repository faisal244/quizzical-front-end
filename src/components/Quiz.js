import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export const Quiz = ({ quizData }) => {
  console.log(quizData);
  return (
    <div>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {quizData.map((each) => {
          console.log(each);
        })}
      </List>
    </div>
  );
};
