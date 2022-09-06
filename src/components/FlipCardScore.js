import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export const FlipCardScore = () => {
  return (
    <div>
      <Grid container spacing={7} className="grid-container">
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 345, backgroundColor: "teal" }}>
            <CardMedia
              component="img"
              height="140"
              className="flip-scores-img"
              alt="Flip Img"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Hey <span className="wave">👋</span> , Osman You Scored
                <br />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
