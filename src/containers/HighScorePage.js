import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export const HighScorePage = () => {
  const card = (
    <React.Fragment>
      <CardContent
        sx={{
          backgroundColor: "teal",
        }}
      >
        <Typography
          sx={{ fontSize: 30, fontFamily: "serif" }}
          color="white"
          gutterBottom
        >
          Hey <span className="wave">👋</span> , Osman You Scored
          <br />
        </Typography>
        <Typography variant="h5" component="div" color="white"></Typography>
      </CardContent>
    </React.Fragment>
  );

  return (
    <div className="high-scores-card">
      <div className="arrow-img">
        <Box
          sx={{
            width: "50rem",
            height: "rem",
            textAlign: "center",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Card variant="outlined">{card} </Card>
        </Box>
      </div>
    </div>
  );
};
