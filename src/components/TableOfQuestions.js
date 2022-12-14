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
      <Table sx={{ minWidth: 600 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Questions</TableCell>
            <TableCell align="right" sx={{ backgroundColor: "green" }}>
              Correct Answer
            </TableCell>
            <TableCell align="right" sx={{ backgroundColor: "red" }}>
              Incorrect Answer
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {quizData.map((row) => {
            return (
              <TableRow
                key={row.title}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right">{row.question}</TableCell>
                <TableCell align="right" sx={{ backgroundColor: "green" }}>
                  {row.correctAnswer}
                </TableCell>
                <TableCell align="right" sx={{ backgroundColor: "red" }}>
                  {JSON.stringify(row.incorrectAnswers).slice(",")}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableOfQuestions;
