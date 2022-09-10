import { FlipCardScore } from "../components/FlipCardScore";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GETMYQUIZES } from "../graphql/queries";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const ViewQuizPage = () => {
  const { data, loading, error } = useQuery(GETMYQUIZES);

  return (
    <div>
      <pre>
        <div>{JSON.stringify(data, null, 2)}</div>
      </pre>
    </div>
  );
};
