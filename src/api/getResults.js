import axios from "axios";

const URL = "https://opentdb.com/api_category.php";

export const getResults = () => {
  axios
    .get(`${URL}`)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => console.error(`ERROR: ${error}`));
};
