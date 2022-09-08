import axios from "axios";

const URL = "https://opentdb.com/api.php?amount=1";

export const getResults = () => {
  axios
    .get(`${URL}`)
    .then((response) => {
      const resultsAPI = response.data.results;

      console.log(resultsAPI);
    })
    .catch((error) => console.error(`ERROR: ${error}`));
};
