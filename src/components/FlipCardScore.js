import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { Grid } from "@mui/material";

export const FlipCardScore = () => {
  return (
    <CardContent
      sx={{
        backgroundColor: "teal",
      }}
    >
      <Grid container direction="row" justifyContent="space-evenly">
        <Grid item xs={4}>
          <Typography
            sx={{ fontSize: 10, fontFamily: "serif" }}
            color="white"
            gutterBottom
          >
            Hey <span className="wave">👋</span> , Osman You Scored
            <br />
            <div className="flip-scores-img"> </div>
          </Typography>
        </Grid>

        <Grid item xs={4}>
          <Typography
            sx={{ fontSize: 10, fontFamily: "serif" }}
            color="white"
            gutterBottom
          >
            Hey <span className="wave">👋</span> , Osman You Scored
            <br />
            <div className="flip-scores-img"> </div>
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography
            sx={{ fontSize: 10, fontFamily: "serif" }}
            color="white"
            gutterBottom
          >
            Hey <span className="wave">👋</span> , Osman You Scored
            <br />
            <div className="flip-scores-img"> </div>
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  );
};
