import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export const DashboardPage = () => {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">Hello Welcome To Your Ultimate Quiz!</h1>
        <p className="lead">
          This is an app used to help you test your knowledge and have fun
          whilst learning
        </p>
        <hr className="my-4" />
        <p>Click any of the buttons below to get started</p>
        <p className="lead"></p>
        <Stack
          spacing={2}
          direction="row"
          justifyContent="center"
          marginTop="1.5rem"
        >
          <Button variant="text" className="create-quiz">
            Create A Quiz
          </Button>
          <Button variant="contained">View HighScores</Button>
          <Button variant="outlined">View Saved Quizes</Button>
        </Stack>
      </div>
    </div>
  );
};
