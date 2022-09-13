import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const TableOfQuestions = ({ quizData }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Questions</TableCell>
            <TableCell align="right">Correct Answer</TableCell>
            <TableCell align="right">Incorrect Answer</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {quizData.map((row) => (
            <TableRow
              key={row.title}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right">{row.question}</TableCell>
              <TableCell align="right">{row.correct_answer}</TableCell>
              <TableCell align="right">{row.incorrect_answers}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
