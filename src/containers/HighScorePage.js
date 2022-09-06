import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { Fragment } from "react";

import { FlipCardScore } from "../components/FlipCardScore";

export const HighScorePage = () => {
  const card = (
    <Fragment>
      <FlipCardScore />
    </Fragment>
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
