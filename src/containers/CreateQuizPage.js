import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import { useMutation } from "@apollo/client";
import { useState } from "react";

import { CREATEQUIZ } from "../graphql/mutations";

export const CreateQuizPage = () => {
  const [createQuiz] = useMutation(CREATEQUIZ);
  // state for categories
  const [categoryName, setCategoryName] = useState("");

  const handleChange = (event) => {
    let category_name;
    setCategoryName(event.target.value);
    console.log("clicked on input");
    createQuiz({ variables: { categoryName: category_name.value() } });
  };
  return (
    <div>
      <FormControl fullWidth onClick={handleChange}>
        <InputLabel id="demo-simple-select-label">
          Please Select A Category
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={categoryName}
          label="Age"
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
