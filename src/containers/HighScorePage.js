import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Arrow from "../images/arrow.jpg";

export const HighScorePage = () => {
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  const card = (
    <React.Fragment>
      <CardContent sx={{ backgroundColor: "primary.main" }}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </React.Fragment>
  );

  return (
    <div className="high-scores-card">
      <div className="arrow-img">
        <Box
          sx={{
            width: "30rem",
            textAlign: "center",
          }}
        >
          <Card variant="outlined">{card}</Card>
        </Box>
      </div>
    </div>
  );
};
