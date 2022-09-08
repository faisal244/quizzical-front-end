import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import axios from "axios";

export const CreateQuizPage = () => {
  // state for categories
  const [categoryName, setCategoryName] = useState("");
  //make a call to API to get all the categories
  //define the URL
  const URL = "https://opentdb.com/api.php?amount=11";

  const getAllCategories = () => {
    axios
      .get(`${URL}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.error(`ERROR: ${error}`));
  };

  const handleChange = (event) => {
    setCategoryName(event.target.value);
    console.log("clicked on input");
    getAllCategories();
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
        ></Select>
      </FormControl>
    </div>
  );
};
