import {
  Box,
  makeStyles,
  Paper,
  Table,
  TableContainer,
  Theme,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Button,
  Typography,
} from "@material-ui/core";
import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { JobCandidate } from "../../models/models";
import { ROUTES } from "../../Routes";

const useStyles = makeStyles((theme: Theme) => ({
  table: {
    minWidth: 650,
  },
}));

interface JobCandidatesProps {}

let JobCandidates: React.FC<JobCandidatesProps> = () => {
  const classes = useStyles();
  const history = useHistory();

  const [jobCandidates, setJobCandidates] = useState<JobCandidate[]>([]);

  const loadData = useCallback(async () => {
    console.log('[JobCandidates] fetch');
    const response = await fetch("/v1/api/jobCandidates/");
    const data = await response.json();
    setJobCandidates(data);
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <Box>
      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Full Name</TableCell>
              <TableCell>Expected Salary</TableCell>
              <TableCell>Skills</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {jobCandidates.map((jc) => (
              <TableRow key={jc.id}>
                <TableCell>
                  <Typography>{jc.id}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{jc.full_name}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{jc.expected_salary}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{jc.skills}</Typography>
                </TableCell>
                <TableCell>
                  <Button
                    onClick={() =>
                      history.push(ROUTES.JOB_CANDIDATE_DETAIL.replace(':id', jc.id.toString()))
                    }
                  >
                    Detail
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default JobCandidates;
